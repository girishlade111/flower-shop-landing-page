import { Button } from "@/components/ui/button";
import { Flower2, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl petal-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl petal-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl petal-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-full border border-pink-200 dark:border-pink-500/30">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fresh Blooms Daily</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Blooming</span>
              <br />
              <span className="text-gray-800 dark:text-gray-100">Moments of Joy</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Discover the perfect bouquet for every occasion. From romantic roses to cheerful sunflowers, 
              we bring nature's beauty to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 flower-shadow">
                <Flower2 className="mr-2 h-5 w-5" />
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Custom Orders
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div>
                <div className="font-bold text-2xl text-pink-600 dark:text-pink-400">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div>
                <div className="font-bold text-2xl text-pink-600 dark:text-pink-400">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Flower Varieties</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div>
                <div className="font-bold text-2xl text-pink-600 dark:text-pink-400">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop"
                alt="Beautiful flower bouquet"
                className="relative rounded-3xl object-cover w-full h-full flower-shadow"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-6 flower-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                    <Flower2 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-100">Premium Quality</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Handpicked flowers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}