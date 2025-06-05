import type { Metadata } from "next";
import Link from "next/link";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              <Link href="/">
                <img
                  src="/amali_word_logo.png"
                  alt="AMALI"
                  className="h-8 w-auto cursor-pointer"
                />
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/amali_woman_logo.png"
                alt="AMALI Woman Logo"
                className="h-10 w-auto"
              />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <a
                href="https://b3ntv1-0s.myshopify.com/a/collections/products"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-3 sm:px-4 py-2"
              >
                Reserve Now
              </a>
              <p className="text-xs text-amali-gold-400 mt-1">Limited Pre-Orders</p>
              <button className="text-gray-700 hover:text-amali-blue-900 text-xs sm:text-sm hidden sm:inline">Login</button>
              <button className="text-gray-700 hover:text-amali-blue-900 text-xs sm:text-sm">Cart</button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><button className="hover:text-white">About</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Articles</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/articles/saffron-ancient-gold" className="hover:text-white">Saffron Benefits</Link></li>
                <li><Link href="/articles/yerba-mate-warrior-leaf" className="hover:text-white">Yerba Mate Guide</Link></li>
                <li><Link href="/articles/amali-vs-competitors" className="hover:text-white">Amali vs Competitors</Link></li>
                <li><Link href="/articles/euphoric-energy" className="hover:text-white">Euphoric Energy</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-2xl font-bold text-amali-gold-400 mb-4">AMALI</div>
              <p className="text-gray-400 text-sm">© 2025 Amali. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
