"use client"
// Updated shop URLs - force rebuild

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Check, X, Play } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-white text-amali-blue-900 py-2 text-center text-sm font-medium">
        FREE SHIPPING ON ORDERS $150+
      </div>

      {/* Navigation */}
      <header className="bg-amali-blue-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/amali_word_logo.png"
                alt="AMALI"
                className="h-8 w-auto"
              />
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/amali_woman_logo.png"
                alt="AMALI Woman Logo"
                className="h-10 w-auto"
              />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="text-center">
                <a
                  href="https://b3ntv1-0s.myshopify.com/a/collections/products"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-3 sm:px-4 py-2"
                >
                  Reserve Now
                </a>
                <p className="text-xs text-amali-gold-400 mt-1">Limited Pre-Orders</p>
              </div>
              <button className="text-gray-700 hover:text-amali-blue-900 text-xs sm:text-sm hidden sm:inline">Login</button>
              <button className="text-gray-700 hover:text-amali-blue-900 text-xs sm:text-sm">Cart</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Supercharge Your Life with<br />
              <span className="text-amali-blue-900">Euphoric</span> <span className="text-amali-gold-400">Energy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
              An organic fusion of Persian Saffron & Brazilian Yerba Mate bringing you euphoric energy to optimize your life.
            </p>
          </div>
        </div>

        {/* Hero Banner - Full Width */}
        <div className="w-full">
          <img
            src="/hero_banner_woman_drinking.png"
            alt="Woman drinking Amali Euphoric Energy - Golden drink against blue sky"
            className="w-full h-auto object-cover"
          />
        </div>



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mt-12 px-4">
            <div className="text-center">
              <p className="text-gray-600 italic mb-2">
                "I've never felt this good from a drink.
No joke, the first time I tried Amali, I felt like dancing. I wasn't expecting it to hit that hard (in a good way). The warmth, the lightness, the mood lift... it's what Red Bull wishes it could be. Total game-changer."
              </p>
              <p className="text-sm text-gray-500">Ashley M. - San Diego</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 italic mb-2">
                "Switched from coffee and never looking back.
I used to drink 2 to 3 cups of coffee just to function. It made me anxious and I'd crash hard in the afternoon. Amali is completely different. It gives me smooth, euphoric energy that lasts for hours, and I feel genuinely good. My mood, clarity, and focus are nextlevel."

              </p>
              <p className="text-sm text-gray-500">Carson G. - Portland</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 italic mb-2">
                "More than energy — this stuff lifts your whole vibe.
I replaced my morning coffee with Amali two weeks ago and I feel amazing. Not only do I have energy, but I also feel emotionally balanced and lighter — like there's an inner warmth that carries me through the day. I've never felt that from a drink."

              </p>
              <p className="text-sm text-gray-500">Sara W. - Oakland</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shop Best Sellers</h2>
        </div>

        {/* Best Sellers Banner - Full Width */}
        <div className="w-full mb-8">
          <img
            src="/amali_best_sellers_banner.png"
            alt="Amali Euphoric Energy - Best Sellers"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a
              href="https://b3ntv1-0s.myshopify.com/a/collections/products"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-[#0F2C66] hover:bg-[#142449] text-white px-8 py-3"
            >
              Reserve Now
            </a>
            <p className="text-xs text-amali-gold-400 mt-2">Limited Pre-Orders</p>
            <p className="text-sm text-amali-gold-400 mt-1">FREE SHIPPING ON $150+</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Amali</h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr>
                  <th className="text-left pb-4" />
                  <th className="text-center pb-4">
                    <div className="text-amali-gold-400 font-bold">AMALI</div>
                  </th>
                  <th className="text-center pb-4 text-gray-400">Other Brands</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-gray-700">
                  <td className="py-4 text-gray-300">Sourced from organic ingredients*</td>
                  <td className="py-4 text-center">
                    <Check className="w-6 h-6 text-amali-gold-400 mx-auto" />
                  </td>
                  <td className="py-4 text-center">
                    <X className="w-6 h-6 text-gray-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 text-gray-300">Highest quality, bioavailable ingredients for maximum absorption</td>
                  <td className="py-4 text-center">
                    <Check className="w-6 h-6 text-amali-gold-400 mx-auto" />
                  </td>
                  <td className="py-4 text-center">
                    <X className="w-6 h-6 text-gray-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 text-gray-300">Exceeds daily energy requirements</td>
                  <td className="py-4 text-center">
                    <Check className="w-6 h-6 text-amali-gold-400 mx-auto" />
                  </td>
                  <td className="py-4 text-center">
                    <X className="w-6 h-6 text-gray-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 text-gray-300">No fillers, artificial flavors, or junk</td>
                  <td className="py-4 text-center">
                    <Check className="w-6 h-6 text-amali-gold-400 mx-auto" />
                  </td>
                  <td className="py-4 text-center">
                    <X className="w-6 h-6 text-gray-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-300">Third-party tested and verified</td>
                  <td className="py-4 text-center">
                    <Check className="w-6 h-6 text-amali-gold-400 mx-auto" />
                  </td>
                  <td className="py-4 text-center">
                    <X className="w-6 h-6 text-gray-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://b3ntv1-0s.myshopify.com/a/collections/products"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-8 py-3"
            >
              Reserve Now
            </a>
            <p className="text-xs text-amali-gold-400 mt-2">Limited Pre-Orders</p>
            <p className="text-sm text-amali-gold-400 mt-1">FREE SHIPPING ON $150+</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16" style={{backgroundColor: '#B8860B20'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
              <div className="flex justify-center mb-2">
                {['star-testimonial-1-1', 'star-testimonial-1-2', 'star-testimonial-1-3', 'star-testimonial-1-4', 'star-testimonial-1-5'].map((key) => (
                  <Star key={key} className="w-4 h-4 text-amali-gold-400 fill-amali-gold-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Adding Amali to my daily routine has proven to be a life-changer. The euphoric energy boost is unmatched. My focus is deeper and I wake up naturally feeling amazing."
              </p>
              <p className="font-semibold text-gray-900">Lisa Johnson</p>
              <p className="text-sm text-gray-600">Daily Amali Consumer</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
              <div className="flex justify-center mb-2">
                {['star-testimonial-2-1', 'star-testimonial-2-2', 'star-testimonial-2-3', 'star-testimonial-2-4', 'star-testimonial-2-5'].map((key) => (
                  <Star key={key} className="w-4 h-4 text-amali-gold-400 fill-amali-gold-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "A lot of people struggle with afternoon crashes and low energy. Amali consistently eliminates those issues for me because of its amazing organic ingredient blend."
              </p>
              <p className="font-semibold text-gray-900">David Chen</p>
              <p className="text-sm text-gray-600">Daily Amali Consumer</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://b3ntv1-0s.myshopify.com/a/collections/products"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-6 py-3"
            >
              Reserve Now
            </a>
            <p className="text-xs text-amali-gold-400 mt-2">Limited Pre-Orders</p>
            <p className="text-sm text-amali-gold-400 mt-1">Join thousands of satisfied customers</p>
          </div>
        </div>
      </section>

      {/* Bundle & Save */}
      <section className="py-16" style={{background: 'linear-gradient(to right, #B8860B20, #B8860B30)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bundle & Save up to 20%</h2>
        </div>

        {/* Bundle Banner - Full Width */}
        <div className="w-full mb-8">
          <img
            src="/amali_bundle_banner.png"
            alt="Amali Bundle - Beach Scene"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="https://b3ntv1-0s.myshopify.com/a/collections/products"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-[#0F2C66] hover:bg-[#142449] text-white px-8 py-3"
          >
            Reserve Now
          </a>
          <p className="text-xs text-amali-gold-400 mt-2">Limited Pre-Orders</p>
          <p className="text-sm text-amali-gold-400 mt-1">FREE SHIPPING ON $150+</p>
        </div>
      </section>

      {/* Happy Customers Videos */}
      <section className="py-16 bg-gray-900 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">15,369+ Happy Customers</h2>
          <div className="flex justify-center mb-8">
            {['star-happy-customers-1', 'star-happy-customers-2', 'star-happy-customers-3', 'star-happy-customers-4', 'star-happy-customers-5'].map((key) => (
              <Star key={key} className="w-6 h-6 text-amali-gold-400 fill-amali-gold-400" />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative bg-gray-800 rounded-lg overflow-hidden aspect-square">
                <img
                  src="/api/placeholder/200/200"
                  alt={`Customer video ${i}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Insights Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Evidence-based Health Insights</h2>
          <p className="text-center text-gray-600 mb-12">View All Articles</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/articles/saffron-ancient-gold" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <img
                src="/saffron_article_image_new.png"
                alt="The Ancient Gold: Why Saffron Is the Most Underrated Super Spice on the Planet"
                className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-amali-blue-900 transition-colors">
                  The Ancient Gold: Why Saffron Is the Most Underrated Super Spice on the Planet
                </h3>
              </div>
            </Link>

            <Link href="/articles/yerba-mate-warrior-leaf" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <img
                src="/yerba_mate_article_image.png"
                alt="Yerba Mate: The Warrior Leaf That Wakes You Up Without Wrecking You"
                className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-amali-blue-900 transition-colors">
                  Yerba Mate: The Warrior Leaf That Wakes You Up Without Wrecking You
                </h3>
                <p className="text-xs text-gray-600 hidden">
                  Yerba mate delivers clean energy, boosts focus, supports fat burning, and protects your heart. Learn the top benefits of yerba mate tea, backed by research.
                </p>
              </div>
            </Link>

            <Link href="/articles/amali-vs-competitors" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <img
                src="/amali_comparison_final.png"
                alt="Why Amali Is Better Than Coffee, Celsius, or Red Bull"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-amali-blue-900 transition-colors">
                  Why Amali Is Better Than Coffee, Celsius, or Red Bull
                </h3>
                <p className="text-xs text-gray-600 hidden">
                  Tired of caffeine crashes and synthetic stimulants? Discover why Amali's botanical energy blend is a cleaner, smarter alternative to traditional energy drinks.
                </p>
              </div>
            </Link>

            <Link href="/articles/euphoric-energy" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <img
                src="/euphoric_energy_article_image.png"
                alt="What Is Euphoric Energy? The Future of Focus, Mood, and Motivation in One Drink"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-amali-blue-900 transition-colors">
                  What Is Euphoric Energy? The Future of Focus, Mood, and Motivation in One Drink
                </h3>
                <p className="text-xs text-gray-600 hidden">
                  What if your energy drink didn't just wake you up—but actually made you feel good? Discover the science of euphoric energy and why Amali is leading the movement.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amali-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the Newsletter</h2>
          <p className="text-amali-gold-400 mb-6 opacity-80">Once a Week. All Energy. No Spam.</p>

          <div className="mb-6">
            <a
              href="https://b3ntv1-0s.myshopify.com/a/collections/products"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-6 py-3"
            >
              Reserve Now
            </a>
            <p className="text-xs text-amali-gold-400 mt-2">Limited Pre-Orders</p>
          </div>

          <form
            action="https://manage.kmail-lists.com/subscriptions/subscribe"
            method="POST"
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 items-start px-4"
            target="_blank"
          >
            <input type="hidden" name="g" value="S4eySh" />
            <input
              type="text"
              name="$first_name"
              placeholder="First Name"
              className="bg-white border-0 rounded px-4 py-2 flex-1 text-gray-900 w-full sm:w-auto"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-white border-0 rounded px-4 py-2 flex-1 text-gray-900 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-amali-gold-400 hover:bg-[#9A7209] text-gray-900 px-6 py-2 font-semibold rounded w-full sm:w-auto"
            >
              JOIN
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="https://b3ntv1-0s.myshopify.com/a/collections/products"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-4 py-2"
                  >
                    Reserve Now
                  </a>
                  <p className="text-xs text-amali-gold-400 mt-1">Limited Pre-Orders</p>
                </li>
                <li><button className="hover:text-white">Shop Best Sellers</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Account</button></li>
                <li><button className="hover:text-white">Get Help</button></li>
                <li><button className="hover:text-white">Learn</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">More</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white">Newsletter</button></li>
                <li><button className="hover:text-white">Affiliates</button></li>
              </ul>
            </div>
            <div>
              <div className="text-2xl font-bold text-amali-gold-400 mb-4">AMALI</div>
              <div className="flex flex-col items-start">
                <a
                  href="https://www.instagram.com/amali.energy/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 group"
                >
                  <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-11.png" alt="Instagram" className="w-7 h-7 mb-2 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.instagram.com/amali.energy/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p className="mt-2">These statements have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease.</p>
            <p className="mt-4">© 2025 Amali. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  )
}
