import { Flower2, Mail, Instagram, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20 border-t border-pink-100 dark:border-pink-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Flower Shop</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Bringing nature's beauty to your doorstep with fresh, handpicked flowers for every occasion.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:girish@ladestack.in"
                className="w-9 h-9 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors flower-shadow"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </a>
              <a
                href="https://instagram.com/girish_lade_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors flower-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </a>
              <a
                href="https://github.com/girishlade111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors flower-shadow"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Shop All Flowers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Custom Arrangements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Roses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Sunflowers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Tulips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Orchids
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pink-100 dark:border-pink-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="text-center md:text-left">
              © {currentYear} Flower Shop. All rights reserved. Built with ❤️ by{" "}
              <a 
                href="https://ladestack.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 dark:text-pink-400 hover:underline font-medium inline-flex items-center gap-1"
              >
                LadeStack
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:girish@ladestack.in" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                Contact
              </a>
              <span>•</span>
              <a 
                href="https://ladestack.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}