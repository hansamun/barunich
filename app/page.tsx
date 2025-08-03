"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle, Menu, X } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function SnookTokenWebsite() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["about", "how-to-buy", "gallery", "tokenomics"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 md:px-12 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img src="/images/snook-logo.png" alt="SNOOK Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400 font-hero">SNOOK</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-body">
          <button
            onClick={() => scrollToSection("about")}
            className={`font-semibold hover:text-blue-400 transition-colors ${
              activeSection === "about" ? "text-blue-400" : "text-white"
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("how-to-buy")}
            className={`font-semibold hover:text-blue-400 transition-colors ${
              activeSection === "how-to-buy" ? "text-blue-400" : "text-white"
            }`}
          >
            HOW TO BUY
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`font-semibold hover:text-blue-400 transition-colors ${
              activeSection === "gallery" ? "text-blue-400" : "text-white"
            }`}
          >
            GALLERY & MEMES
          </button>
          <button
            onClick={() => scrollToSection("tokenomics")}
            className={`font-semibold hover:text-blue-400 transition-colors ${
              activeSection === "tokenomics" ? "text-blue-400" : "text-white"
            }`}
          >
            TOKENOMICS
          </button>
        </nav>

        {/* Desktop Buy Button */}
        <Button className="hidden md:block bg-white text-black hover:bg-gray-200 font-semibold px-6 font-body">
          Buy $SNOOK
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-blue-400 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-sm border-b border-gray-800 md:hidden">
            <nav className="flex flex-col space-y-4 p-6 font-body">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left font-semibold hover:text-blue-400 transition-colors ${
                  activeSection === "about" ? "text-blue-400" : "text-white"
                }`}
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("how-to-buy")}
                className={`text-left font-semibold hover:text-blue-400 transition-colors ${
                  activeSection === "how-to-buy" ? "text-blue-400" : "text-white"
                }`}
              >
                HOW TO BUY
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`text-left font-semibold hover:text-blue-400 transition-colors ${
                  activeSection === "gallery" ? "text-blue-400" : "text-white"
                }`}
              >
                GALLERY & MEMES
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className={`text-left font-semibold hover:text-blue-400 transition-colors ${
                  activeSection === "tokenomics" ? "text-blue-400" : "text-white"
                }`}
              >
                TOKENOMICS
              </button>
              <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 font-body w-full mt-4">
                Buy $SNOOK
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Complex Space Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 bg-gray-900">
        {/* Complex Space Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/space-background.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-blue-400 mb-4 font-hero">SNOOK</h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-6 md:mb-8 font-hero">
              Welcome to the world of $SNOOK
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="flex items-start justify-center mb-6 md:mb-8">
              <span className="text-blue-400 text-xl md:text-2xl mr-3 md:mr-4 font-hero mt-1">+</span>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-body text-left">
                Wake up early to put some $SNOOK in your bags and hold because its still early.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-8 md:mb-12 font-hero px-4">
              Join the royal revolution. Rule the chain. Trade like a king.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold font-crypto w-full sm:w-auto">
                BUY $SNOOK
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold bg-transparent font-crypto w-full sm:w-auto"
              >
                DEXSCREEN
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blue Section Separator with Scrolling Text */}
      <AnimatedSection animation="fadeIn">
        <section className="relative z-10 bg-blue-600 py-3">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between text-white font-bold text-sm md:text-lg overflow-hidden">
              <div className="animate-marquee whitespace-nowrap font-crypto">
                $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK •
                $SNOOK •
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sections with Starfield Background */}
      <div className="relative bg-gray-900">
        {/* Starfield Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-repeat"
            style={{
              backgroundImage: "url('/images/starfield-background.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* About Section */}
        <section id="about" className="relative z-10 py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-hero">
                  ABOUT SNOOK
                </h2>
                <div className="w-16 md:w-24 h-1 bg-blue-400 mx-auto mb-6 md:mb-8"></div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center order-1 md:order-none">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center mx-auto mb-6">
                    <img
                      src="/images/snook-about.png"
                      alt="SNOOK Royal Cat About"
                      className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="space-y-4 md:space-y-6 order-2 md:order-none">
                  <p className="text-base md:text-lg leading-relaxed font-body">
                    $SNOOK isn't just another meme token – it's a smooth-talking, crown-wearing feline dominating the
                    Base jungle. Built on the Base Network, SNOOK offers lightning-fast transactions and a meme-worthy
                    user experience.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-body">
                    SNOOK blends community-powered tokenomics with cutting-edge blockchain technology. From meme lords
                    to smart traders, this token is built for those who want to conquer DeFi with style.
                  </p>
                  <p className="text-lg md:text-xl text-blue-400 font-bold font-hero mb-6 md:mb-8">
                    Become part of the royal community. It's smooth, it's slick, it's SNOOK.
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
                    <div className="bg-blue-600 px-3 md:px-4 py-2 rounded-lg font-crypto text-sm md:text-base">
                      BASE NETWORK
                    </div>
                    <div className="bg-blue-500 px-3 md:px-4 py-2 rounded-lg font-crypto text-white text-sm md:text-base">
                      APE STORE
                    </div>
                    <div className="bg-green-600 px-3 md:px-4 py-2 rounded-lg font-crypto text-sm md:text-base">
                      COOL MOVES
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Blue Section Separator */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between text-white font-bold text-sm md:text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK •
                  $SNOOK •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="relative z-10 py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-hero">
                  HOW TO BUY
                </h2>
                <div className="w-16 md:w-24 h-1 bg-blue-400 mx-auto mb-6 md:mb-8"></div>
                <p className="text-lg md:text-xl text-gray-300 font-body px-4">
                  Follow these simple steps to get your $SNOOK tokens on Base Network
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="bg-gray-800 rounded-lg p-6 md:p-8 text-center">
                  <div className="text-4xl md:text-6xl mb-4">WALLET</div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">STEP 1</h3>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-body">Get a Wallet</h4>
                  <p className="text-sm md:text-base text-gray-300 font-body">
                    Download a Base-compatible wallet like MetaMask or Coinbase Wallet and switch to Base Network.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-gray-800 rounded-lg p-6 md:p-8 text-center">
                  <div className="text-4xl md:text-6xl mb-4">BRIDGE</div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">STEP 2</h3>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-body">Bridge to Base</h4>
                  <p className="text-sm md:text-base text-gray-300 font-body">
                    Bridge your ETH to Base Network using the official Base bridge or buy ETH directly on Base.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-gray-800 rounded-lg p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
                  <div className="text-4xl md:text-6xl mb-4">STORE</div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">STEP 3</h3>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 font-body">Buy $SNOOK</h4>
                  <p className="text-sm md:text-base text-gray-300 font-body">
                    Go to Ape Store and swap your ETH for $SNOOK tokens using our contract address.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scaleIn" delay={800}>
              <div className="text-center mt-8 md:mt-12 px-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-semibold font-crypto w-full sm:w-auto">
                  BUY ON APE STORE
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blue Section Separator */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between text-white font-bold text-sm md:text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK •
                  $SNOOK •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Gallery & Memes Section */}
        <section id="gallery" className="relative z-10 py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-hero">
                  GALLERY & MEMES
                </h2>
                <div className="w-16 md:w-24 h-1 bg-blue-400 mx-auto mb-6 md:mb-8"></div>
                <p className="text-lg md:text-xl text-gray-300 font-body mb-3 md:mb-4 px-4">
                  SNOOK is not just a token. It's a brand, a vibe, and a movement.
                </p>
                <p className="text-base md:text-lg text-gray-300 font-body px-4">
                  Explore our collection of memes, community art, and content celebrating the royal cat of crypto.
                </p>
                <p className="text-xl md:text-2xl text-blue-400 font-bold font-hero mt-4 md:mt-6 px-4">
                  $SNOOK — Where memes meet money.
                </p>
              </div>
            </AnimatedSection>

            {/* Memes Content */}
            <div>
              <AnimatedSection animation="fadeInUp">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 md:mb-8 text-center font-hero">
                  COMMUNITY MEMES
                </h3>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <AnimatedSection animation="scaleIn" delay={200}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/images/meme1.jpg"
                      alt="Cooking up profits meme"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-3 md:p-4">
                      <p className="text-base md:text-lg font-bold text-blue-400 font-hero">COOKING PROFITS</p>
                      <p className="text-xs md:text-sm text-gray-300 font-body">When SNOOK is cooking up those gains</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={400}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/meme2.jpg" alt="Money stacks meme" className="w-full h-48 md:h-64 object-cover" />
                    <div className="p-3 md:p-4">
                      <p className="text-base md:text-lg font-bold text-blue-400 font-hero">STACKING GAINS</p>
                      <p className="text-xs md:text-sm text-gray-300 font-body">SNOOK holders counting their profits</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={600}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1">
                    <img
                      src="/images/meme3.jpg"
                      alt="Building wealth meme"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-3 md:p-4">
                      <p className="text-base md:text-lg font-bold text-blue-400 font-hero">BUILDING WEALTH</p>
                      <p className="text-xs md:text-sm text-gray-300 font-body">SNOOK community building the future</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Blue Section Separator */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between text-white font-bold text-sm md:text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK •
                  $SNOOK •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="relative z-10 py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-hero">
                  TOKENOMICS
                </h2>
                <div className="w-16 md:w-24 h-1 bg-blue-400 mx-auto mb-6 md:mb-8"></div>
                <p className="text-lg md:text-xl text-gray-300 font-body px-4">
                  Understanding $SNOOK token economics on Base Network
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div className="space-y-6 md:space-y-8">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">Total Supply</h3>
                    <p className="text-2xl md:text-4xl font-bold font-crypto">1,000,000,000</p>
                    <p className="text-sm md:text-base text-gray-300 font-body mt-2">Fixed supply on Base Network</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={400}>
                  <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">Liquidity</h3>
                    <p className="text-2xl md:text-4xl font-bold font-crypto text-white">BURNED</p>
                    <p className="text-sm md:text-base text-gray-300 font-body mt-2">LP tokens permanently burned</p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="space-y-6 md:space-y-8">
                <AnimatedSection animation="fadeInRight" delay={600}>
                  <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">Network</h3>
                    <p className="text-2xl md:text-4xl font-bold font-crypto text-blue-400">BASE</p>
                    <p className="text-sm md:text-base text-gray-300 font-body mt-2">
                      Built on Base for speed & efficiency
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={800}>
                  <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 font-hero">Tax</h3>
                    <p className="text-2xl md:text-4xl font-bold font-crypto text-white">0%</p>
                    <p className="text-sm md:text-base text-gray-300 font-body mt-2">No buy/sell taxes</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <AnimatedSection animation="slideInUp" delay={1000}>
              <div className="bg-gray-800 rounded-lg p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 font-hero">Contract Address</h3>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-lg">
                    <p className="text-lg md:text-2xl font-bold text-white font-crypto animate-pulse">COMING SOON</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-400 font-body mt-4 px-4">
                  Contract will be deployed on Base Network soon. Stay tuned for updates!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blue Section Separator with Scrolling Text */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between text-white font-bold text-sm md:text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK •
                  $SNOOK •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Roadmap Section */}
        <section className="relative z-10 py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 font-hero">
                  SNOOKMAP
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-medium font-body px-4">
                  We have the slickest roadmap in crypto..
                </p>
              </div>
            </AnimatedSection>

            {/* Mobile Roadmap - Vertical Layout */}
            <div className="block md:hidden">
              {/* Step 1: RULE */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="w-32 h-32 flex items-center justify-center mb-4">
                    <img src="/images/snook-king.png" alt="SNOOK King Cat Head" className="w-28 h-28 object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-hero mb-2">RULE</h3>
                  <div className="w-12 h-1 bg-blue-400 mx-auto"></div>
                  <div className="text-blue-400 font-bold font-crypto text-lg mt-4">01</div>
                </div>
              </AnimatedSection>

              {/* Connecting Line */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>
              </div>

              {/* Step 2: TRADING */}
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="w-32 h-32 flex items-center justify-center mb-4">
                    <img
                      src="/images/snook-king-full.png"
                      alt="SNOOK King Cat Full Body Trading"
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-hero mb-2">TRADING</h3>
                  <div className="w-12 h-1 bg-blue-400 mx-auto"></div>
                  <div className="text-blue-400 font-bold font-crypto text-lg mt-4">02</div>
                </div>
              </AnimatedSection>

              {/* Connecting Line */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>
              </div>

              {/* Step 3: REPEAT */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 flex items-center justify-center mb-4">
                    <img
                      src="/images/snook-repeat.png"
                      alt="SNOOK Royal Cat Repeat"
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-hero mb-2">REPEAT</h3>
                  <div className="w-12 h-1 bg-blue-400 mx-auto"></div>
                  <div className="text-blue-400 font-bold font-crypto text-lg mt-4">03</div>
                </div>
              </AnimatedSection>
            </div>

            {/* Desktop Roadmap - Horizontal Layout */}
            <div className="hidden md:block relative max-w-4xl mx-auto">
              {/* Step 1: RULE */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="flex items-center justify-center mb-16">
                  <div className="flex items-center space-x-8 lg:space-x-12">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center relative">
                      <img
                        src="/images/snook-king.png"
                        alt="SNOOK King Cat Head"
                        className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-hero">RULE</h3>
                      <div className="w-12 lg:w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connecting Line 1: RULE to TRADING */}
              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="flex justify-center mb-8">
                  <div className="w-0.5 h-12 lg:h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="w-0.5 h-12 lg:h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
              </AnimatedSection>

              {/* Step 2: TRADING */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="flex items-center justify-center mb-16">
                  <div className="flex items-center space-x-8 lg:space-x-12">
                    <div className="text-center">
                      <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-hero">TRADING</h3>
                      <div className="w-12 lg:w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
                    </div>
                    <div className="w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center relative">
                      <img
                        src="/images/snook-king-full.png"
                        alt="SNOOK King Cat Full Body Trading"
                        className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connecting Line 2: TRADING to REPEAT */}
              <AnimatedSection animation="fadeIn" delay={800}>
                <div className="flex justify-center mb-8">
                  <div className="w-0.5 h-12 lg:h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="w-0.5 h-12 lg:h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
              </AnimatedSection>

              {/* Step 3: REPEAT */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-8 lg:space-x-12">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center relative">
                      <img
                        src="/images/snook-repeat.png"
                        alt="SNOOK Royal Cat Repeat"
                        className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-hero">REPEAT</h3>
                      <div className="w-12 lg:w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Process indicators */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col space-y-8 text-blue-400 font-bold font-crypto">
                  <AnimatedSection animation="fadeInLeft" delay={200}>
                    <div className="text-xl">01</div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInLeft" delay={600}>
                    <div className="text-xl">02</div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeInLeft" delay={1000}>
                    <div className="text-xl">03</div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <AnimatedSection animation="fadeInUp">
          <footer className="relative z-10 py-6 md:py-8 px-4 md:px-6 text-center">
            <div className="flex justify-center space-x-6 md:space-x-8 mb-4">
              <a
                href="https://x.com/Snook_onBase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} className="md:w-6 md:h-6" />
              </a>
              <a
                href="https://t.me/snookonbase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <MessageCircle size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
            <p className="text-sm md:text-base text-gray-400 font-body mb-6 px-4">©2025 All Rights Reserved by SNOOK</p>
          </footer>
        </AnimatedSection>

        {/* Bottom Banner - moved after footer */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3 md:py-4">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between text-white font-bold text-sm md:text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK • $SNOOK •
                  $SNOOK •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
}
