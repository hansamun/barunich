"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, MessageCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function UggoTokenWebsite() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:px-12 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">🦍</span>
          </div>
          <h1 className="text-3xl font-bold text-yellow-400 font-hero">UGGO</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8 font-body">
          <a href="#about" className="font-semibold hover:text-yellow-400 transition-colors">
            ABOUT
          </a>
          <a href="#how-to-buy" className="font-semibold hover:text-yellow-400 transition-colors">
            HOW TO BUY
          </a>
          <a href="#gallery" className="font-semibold hover:text-yellow-400 transition-colors">
            GALLERY & MEMES
          </a>
          <a href="#tokenomics" className="font-semibold hover:text-yellow-400 transition-colors">
            TOKENOMICS
          </a>
        </nav>

        <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 font-body">Buy $UGGO</Button>
      </header>

      {/* Hero Section with Complex Space Background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
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
            <h2 className="text-5xl md:text-7xl font-bold text-blue-400 mb-8 font-hero">MEET UGGO</h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="flex items-center justify-center mb-8">
              <span className="text-yellow-400 text-2xl mr-4 font-hero">+</span>
              <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-body">
                Blue gorilla as a new meta in the crypto space by creating daily vlog videos and short movie, talking
                about everything on crypto. Make an educational content where $UGGO helps onboard newcomers to the
                crypto world.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold font-crypto">
                BUY $UGGO
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg font-semibold bg-transparent font-crypto"
              >
                DEXSCREENER
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Gorilla Character */}
        <AnimatedSection
          animation="bounceIn"
          delay={600}
          className="absolute bottom-16 right-1/3 w-32 h-40 flex items-end justify-center z-10"
        >
          <div className="text-8xl">🦍</div>
        </AnimatedSection>
      </section>

      {/* Blue Section Separator with Scrolling Text */}
      <AnimatedSection animation="fadeIn">
        <section className="relative z-10 bg-blue-600 py-3">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
              <div className="animate-marquee whitespace-nowrap font-crypto">
                ABOUT UGGO • BLUE GORILLA • CRYPTO EDUCATION • DAILY VLOGS • ABOUT UGGO • BLUE GORILLA • CRYPTO
                EDUCATION • DAILY VLOGS •
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sections with Starfield Background */}
      <div className="relative">
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
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-hero">ABOUT UGGO</h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <div className="text-center">
                  <div className="text-9xl mb-6">🦍</div>
                  <h3 className="text-3xl font-bold text-blue-400 mb-4 font-hero">The Blue Gorilla</h3>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed font-body">
                    UGGO is not just another meme token - it's a revolutionary approach to crypto education through
                    entertainment. Our blue gorilla mascot represents strength, community, and the wild nature of the
                    crypto market.
                  </p>
                  <p className="text-lg leading-relaxed font-body">
                    Through daily vlogs, educational content, and community engagement, UGGO aims to make cryptocurrency
                    accessible to everyone. We believe learning about crypto should be fun, engaging, and rewarding.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="bg-blue-600 px-4 py-2 rounded-lg font-crypto">EDUCATIONAL</div>
                    <div className="bg-yellow-500 px-4 py-2 rounded-lg font-crypto text-black">COMMUNITY</div>
                    <div className="bg-green-600 px-4 py-2 rounded-lg font-crypto">ENTERTAINING</div>
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
                  HOW TO BUY • STEP BY STEP • EASY PROCESS • GET YOUR UGGO • HOW TO BUY • STEP BY STEP • EASY PROCESS •
                  GET YOUR UGGO •
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
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-body">Follow these simple steps to get your $UGGO tokens</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">💳</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-hero">STEP 1</h3>
                  <h4 className="text-xl font-bold text-white mb-4 font-body">Get a Wallet</h4>
                  <p className="text-gray-300 font-body">
                    Download MetaMask or any compatible wallet from the app store or browser extension.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-hero">STEP 2</h3>
                  <h4 className="text-xl font-bold text-white mb-4 font-body">Buy ETH</h4>
                  <p className="text-gray-300 font-body">
                    Purchase Ethereum (ETH) from any exchange and send it to your wallet.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">🔄</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-hero">STEP 3</h3>
                  <h4 className="text-xl font-bold text-white mb-4 font-body">Swap for UGGO</h4>
                  <p className="text-gray-300 font-body">
                    Use Uniswap or DEX to swap your ETH for $UGGO tokens using our contract address.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scaleIn" delay={800}>
              <div className="text-center mt-12">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold font-crypto">
                  BUY ON UNISWAP
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
                  GALLERY & MEMES • UGGO CONTENT • VLOGS & VIDEOS • COMMUNITY CREATIONS • FUNNY MEMES • GALLERY & MEMES
                  • UGGO CONTENT • VLOGS & VIDEOS • COMMUNITY CREATIONS • FUNNY MEMES •
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
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-body">
                  Check out our latest content and funniest community memes
                </p>
              </div>
            </AnimatedSection>

            {/* Gallery Content */}
            <div className="mb-16">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center font-hero">CONTENT GALLERY</h3>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-6">
                <AnimatedSection animation="fadeInLeft" delay={300}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-6xl">🎥</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-hero">Daily Vlogs</h3>
                      <p className="text-gray-300 font-body">Watch UGGO's daily adventures in the crypto world</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={500}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                      <div className="text-6xl">📚</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-hero">Educational Content</h3>
                      <p className="text-gray-300 font-body">Learn crypto basics with UGGO's fun tutorials</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={700}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                      <div className="text-6xl">🎬</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-hero">Short Movies</h3>
                      <p className="text-gray-300 font-body">Entertaining short films featuring our blue gorilla</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Memes Content */}
            <div>
              <AnimatedSection animation="fadeInUp">
                <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center font-hero">COMMUNITY MEMES</h3>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection animation="scaleIn" delay={200}>
                  <div className="bg-gray-800 rounded-lg p-6 text-center">
                    <div className="text-8xl mb-4">🦍</div>
                    <p className="text-lg font-bold text-yellow-400 font-hero">HODL UGGO</p>
                    <p className="text-sm text-gray-300 font-body">When the market dips but you believe in UGGO</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={400}>
                  <div className="bg-gray-800 rounded-lg p-6 text-center">
                    <div className="text-8xl mb-4">😴</div>
                    <p className="text-lg font-bold text-blue-400 font-hero">SLEEPING ON GAINS</p>
                    <p className="text-sm text-gray-300 font-body">UGGO holders sleeping peacefully</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={600}>
                  <div className="bg-gray-800 rounded-lg p-6 text-center">
                    <div className="text-8xl mb-4">🎥</div>
                    <p className="text-lg font-bold text-green-400 font-hero">VLOG LIFE</p>
                    <p className="text-sm text-gray-300 font-body">Daily vlogs keeping the community engaged</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={800}>
                  <div className="bg-gray-800 rounded-lg p-6 text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className="text-lg font-bold text-purple-400 font-hero">TO THE MOON</p>
                    <p className="text-sm text-gray-300 font-body">UGGO preparing for takeoff</p>
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
                  TOKENOMICS • TOKEN INFO • SUPPLY & DISTRIBUTION • ECONOMICS • TOKENOMICS • TOKEN INFO • SUPPLY &
                  DISTRIBUTION • ECONOMICS •
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
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 font-body">Understanding $UGGO token economics</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <AnimatedSection animation="fadeInLeft" delay={200}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-hero">Total Supply</h3>
                    <p className="text-4xl font-bold font-crypto">1,000,000,000</p>
                    <p className="text-gray-300 font-body mt-2">Fixed supply, no additional minting</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={400}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-red-400 mb-4 font-hero">Liquidity</h3>
                    <p className="text-4xl font-bold font-crypto text-red-400">BURNED</p>
                    <p className="text-gray-300 font-body mt-2">LP tokens permanently burned</p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="space-y-8">
                <AnimatedSection animation="fadeInRight" delay={600}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 font-hero">Contract</h3>
                    <p className="text-4xl font-bold font-crypto text-blue-400">RENOUNCED</p>
                    <p className="text-gray-300 font-body mt-2">Ownership renounced for security</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeInRight" delay={800}>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-hero">Tax</h3>
                    <p className="text-4xl font-bold font-crypto text-green-400">0%</p>
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
                <p className="text-gray-400 font-body mt-4">Contract will be deployed soon. Stay tuned for updates!</p>
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
                  UGGOMAP • EAT SLEEP VLOG • PERFECT ROADMAP • CRYPTO EDUCATION • UGGOMAP • EAT SLEEP VLOG • PERFECT
                  ROADMAP • CRYPTO EDUCATION •
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
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 font-hero">UGGOMAP</h2>
                <p className="text-2xl md:text-3xl text-white font-medium font-body">
                  We have a perfect roadmap broo..
                </p>
              </div>
            </AnimatedSection>

            {/* Roadmap Process Flow */}
            <div className="relative max-w-4xl mx-auto">
              {/* Step 1: EAT */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <div className="flex items-center justify-center mb-16">
                  <div className="flex items-center space-x-12">
                    <div className="w-48 h-48 flex items-center justify-center relative">
                      <div className="text-8xl">🦍</div>
                      <div className="absolute -top-2 -right-4 text-4xl">🍌</div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white font-hero">EAT</h3>
                      <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connecting Line 1: EAT to VLOGGING */}
              <AnimatedSection animation="fadeIn" delay={400}>
                <div className="flex justify-center mb-8">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-yellow-400"></div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-yellow-400"></div>
                </div>
              </AnimatedSection>

              {/* Step 2: VLOGGING */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <div className="flex items-center justify-center mb-16">
                  <div className="flex items-center space-x-12">
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white font-hero">VLOGGING</h3>
                      <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
                    </div>
                    <div className="w-48 h-48 flex items-center justify-center relative">
                      <div className="text-8xl">🦍</div>
                      <div className="absolute -top-2 -right-2 w-12 h-16 bg-gray-700 rounded-lg transform rotate-12 flex flex-col">
                        <div className="w-full h-10 bg-gray-800 rounded-t-lg"></div>
                        <div className="flex-1 bg-blue-500 rounded-b-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connecting Line 2: VLOGGING to SLEEPING */}
              <AnimatedSection animation="fadeIn" delay={800}>
                <div className="flex justify-center mb-8">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-yellow-400"></div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <div className="w-0.5 h-16 border-l-4 border-dashed border-yellow-400"></div>
                </div>
              </AnimatedSection>

              {/* Step 3: SLEEPING */}
              <AnimatedSection animation="fadeInUp" delay={1000}>
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-12">
                    <div className="w-48 h-48 flex items-center justify-center relative">
                      {/* Bed */}
                      <div className="w-40 h-24 bg-blue-400 rounded-lg relative">
                        {/* Pillows */}
                        <div className="absolute -top-3 left-2 w-12 h-8 bg-white rounded-full transform -rotate-12"></div>
                        <div className="absolute -top-3 right-2 w-12 h-8 bg-white rounded-full transform rotate-12"></div>
                        {/* Sleeping gorilla */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl">😴</div>
                        {/* Blanket */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-500 rounded-b-lg"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-5xl md:text-6xl font-bold text-white font-hero">SLEEPING</h3>
                      <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Process indicators */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col space-y-8 text-yellow-400 font-bold font-crypto">
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
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
            <p className="text-gray-400 font-body mb-6">©2025 All Rights Reserved by UGGO</p>
          </footer>
        </AnimatedSection>

        {/* Bottom Banner - moved after footer */}
        <AnimatedSection animation="fadeIn">
          <section className="relative z-10 bg-blue-600 py-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between text-white font-bold text-lg overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-crypto">
                  WELCOME TO UGGO • DAILY VLOGS • SOLID COMMUNITY • META VLOGS ON CRYPTO • WELCOME TO UGGO • DAILY VLOGS
                  • SOLID COMMUNITY • META VLOGS ON CRYPTO •
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
}
