"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function SnookTokenWebsite() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")

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
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:px-12 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/images/snook-logo.png" alt="SNOOK Logo" className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-blue-400 font-hero">SNOOK</h1>
        </div>

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

        <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 font-body">Buy $SNOOK</Button>
      </header>

      {/* Hero Section with Complex Space Background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gray-900">
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
            <h2 className="text-5xl md:text-7xl font-bold text-blue-400 mb-8 font-hero">SNOOK</h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="flex items-center justify-center mb-8">
              <span className="text-blue-400 text-2xl mr-4 font-hero">+</span>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-body">
                The coolest cat in the crypto jungle! Built on Base Network and available on Ape Store. SNOOK brings
                smooth moves and smart trades to the DeFi ecosystem. Join the royal revolution and rule your way to
                success!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold font-crypto">
                BUY $SNOOK
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg font-semibold bg-transparent font-crypto"
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
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
              <div className="animate-marquee whitespace-nowrap font-crypto">
                ABOUT SNOOK • COOL CAT • BASE NETWORK • APE STORE • ABOUT SNOOK • COOL CAT • BASE NETWORK • APE STORE •
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
        </div>

        {/* About Section */}
        <section id="about" className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-hero">ABOUT SNOOK</h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center">
                  <div className="w-72 h-72 flex items-center justify-center mx-auto mb-6">
                    <img
                      src="/images/snook-about.png"
                      alt="SNOOK Royal Cat About"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed font-body">
                    SNOOK isn't just another meme token - it's the coolest operator in the crypto space! Built on the
                    lightning-fast Base Network, SNOOK offers seamless transactions and unparalleled user experience.
                  </p>
                  <p className="text-lg leading-relaxed font-body">
                    Available exclusively on Ape Store, SNOOK combines the power of community-driven tokenomics with
                    cutting-edge blockchain technology. Step into the future of DeFi with confidence and style!
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="bg-blue-600 px-4 py-2 rounded-lg font-crypto">BASE NETWORK</div>
                    <div className="bg-blue-500 px-4 py-2 rounded-lg font-crypto text-white">APE STORE</div>
                    <div className="bg-green-600 px-4 py-2 rounded-lg font-crypto">COOL MOVES</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Blue Section Separator */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  HOW TO BUY • STEP BY STEP • BASE NETWORK • APE STORE • GET YOUR SNOOK • HOW TO BUY • STEP BY STEP •
                  BASE NETWORK • APE STORE •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* How to Buy Section */}
        <section id="how-to-buy" className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-hero">HOW TO BUY</h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-body">
                  Follow these simple steps to get your $SNOOK tokens on Base Network
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">WALLET</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">STEP 1</h3>
                  <h4 className="text-xl font-bold text-white mb-4 font-body">Get Base Wallet</h4>
                  <p className="text-gray-300 font-body">
                    Download a Base Network compatible wallet like MetaMask or Coinbase Wallet and switch to Base
                    Network.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">BRIDGE</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">STEP 2</h3>
                  <h4 className="text-xl font-bold text-white mb-4 font-body">Bridge to Base</h4>
                  <p className="text-gray-300 font-body">
                    Bridge your ETH to Base Network using the official Base bridge or buy ETH directly on Base.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">STORE</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">STEP 3</h3>
                  <h4 className="text-xl font-bold text-white mb-4 font-body">Buy on Ape Store</h4>
                  <p className="text-gray-300 font-body">
                    Visit Ape Store and swap your ETH for $SNOOK tokens using our contract address.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scaleIn" delay={800}>
              <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold font-crypto">
                  BUY ON APE STORE
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blue Section Separator */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  GALLERY & MEMES • SNOOK CONTENT • COOL MOVES • COMMUNITY CREATIONS • CAT MEMES • GALLERY & MEMES •
                  SNOOK CONTENT • COOL MOVES •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Gallery & Memes Section */}
        <section id="gallery" className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-hero">GALLERY & MEMES</h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-body">
                  Check out our coolest content and funniest community cat memes
                </p>
              </div>
            </AnimatedSection>

            {/* Memes Content */}
            <div>
              <AnimatedSection animation="fadeInUp">
                <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center font-hero">COMMUNITY MEMES</h3>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-6">
                <AnimatedSection animation="scaleIn" delay={200}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/meme1.jpg" alt="Cooking up profits meme" className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <p className="text-lg font-bold text-blue-400 font-hero">COOKING PROFITS</p>
                      <p className="text-sm text-gray-300 font-body">When SNOOK is cooking up those gains</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={400}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/meme2.jpg" alt="Money stacks meme" className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <p className="text-lg font-bold text-blue-400 font-hero">STACKING GAINS</p>
                      <p className="text-sm text-gray-300 font-body">SNOOK holders counting their profits</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={600}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img src="/images/meme3.jpg" alt="Building wealth meme" className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <p className="text-lg font-bold text-blue-400 font-hero">BUILDING WEALTH</p>
                      <p className="text-sm text-gray-300 font-body">SNOOK community building the future</p>
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
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  TOKENOMICS • TOKEN INFO • BASE NETWORK • APE STORE • SUPPLY & DISTRIBUTION • TOKENOMICS • TOKEN INFO •
                  BASE NETWORK •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-hero">TOKENOMICS</h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-body">Understanding $SNOOK token economics on Base Network</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">Total Supply</h3>
                    <p className="text-4xl font-bold font-crypto">1,000,000,000</p>
                    <p className="text-gray-300 font-body mt-2">Fixed supply on Base Network</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={400}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">Liquidity</h3>
                    <p className="text-4xl font-bold font-crypto text-white">BURNED</p>
                    <p className="text-gray-300 font-body mt-2">LP tokens permanently burned</p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="space-y-8">
                <AnimatedSection animation="fadeInRight" delay={600}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">Network</h3>
                    <p className="text-4xl font-bold font-crypto text-blue-400">BASE</p>
                    <p className="text-gray-300 font-body mt-2">Built on Base for speed & efficiency</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={800}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">Tax</h3>
                    <p className="text-4xl font-bold font-crypto text-white">0%</p>
                    <p className="text-gray-300 font-body mt-2">No buy/sell taxes</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <AnimatedSection animation="slideInUp" delay={1000}>
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6 font-hero">Contract Address</h3>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg">
                    <p className="text-2xl font-bold text-white font-crypto animate-pulse">COMING SOON</p>
                  </div>
                </div>
                <p className="text-gray-400 font-body mt-4">
                  Contract will be deployed on Base Network soon. Stay tuned for updates!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blue Section Separator with Scrolling Text */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-3">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  SNOOKMAP • RULE TRADE REPEAT • PERFECT ROADMAP • BASE NETWORK • SNOOKMAP • RULE TRADE REPEAT • PERFECT
                  ROADMAP •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Roadmap Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <AnimatedSection animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 font-hero">SNOOKMAP</h2>
                <p className="text-2xl md:text-3xl text-white font-medium font-body">
                  We have the slickest roadmap in crypto..
                </p>
              </div>
            </AnimatedSection>

            {/* Roadmap Process Flow */}
            <div className="relative max-w-4xl mx-auto">
              {/* Step 1: RULE */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="flex items-center justify-center mb-16">
                  <div className="flex items-center space-x-12">
                    <div className="w-48 h-48 flex items-center justify-center relative">
                      <img
                        src="/images/snook-king.png"
                        alt="SNOOK King Cat Head"
                        className="w-40 h-40 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white font-hero">RULE</h3>
                      <div className="w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connecting Line 1: RULE to TRADING */}
              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="flex justify-center mb-8">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
              </AnimatedSection>

              {/* Step 2: TRADING */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="flex items-center justify-center mb-16">
                  <div className="flex items-center space-x-12">
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white font-hero">TRADING</h3>
                      <div className="w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
                    </div>
                    <div className="w-48 h-48 flex items-center justify-center relative">
                      <img
                        src="/images/snook-king-full.png"
                        alt="SNOOK King Cat Full Body Trading"
                        className="w-44 h-44 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connecting Line 2: TRADING to REPEAT */}
              <AnimatedSection animation="fadeIn" delay={800}>
                <div className="flex justify-center mb-8">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-blue-400"></div>
                </div>
              </AnimatedSection>

              {/* Step 3: REPEAT */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-12">
                    <div className="w-48 h-48 flex items-center justify-center relative">
                      <img
                        src="/images/snook-repeat.png"
                        alt="SNOOK Royal Cat Repeat"
                        className="w-44 h-44 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white font-hero">REPEAT</h3>
                      <div className="w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
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
          <footer className="relative z-10 py-8 px-6 text-center">
            <div className="flex justify-center space-x-8 mb-4">
              <a
                href="https://twitter.com/snooktoken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://t.me/snooktoken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-gray-400 font-body mb-6">©2025 All Rights Reserved by SNOOK</p>
          </footer>
        </AnimatedSection>

        {/* Bottom Banner - moved after footer */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  WELCOME TO SNOOK • BASE NETWORK • APE STORE • COOL MOVES • WELCOME TO SNOOK • BASE NETWORK • APE STORE
                  • COOL MOVES •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
}
