"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const flowers = [
  {
    id: 1,
    name: "Rose Elegance",
    price: "$45",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=600&fit=crop",
    category: "Roses",
    popular: true
  },
  {
    id: 2,
    name: "Sunflower Delight",
    price: "$38",
    image: "https://images.unsplash.com/photo-1597848212624-e530498e4e31?w=600&h=600&fit=crop",
    category: "Sunflowers",
    popular: false
  },
  {
    id: 3,
    name: "Tulip Paradise",
    price: "$42",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=600&fit=crop",
    category: "Tulips",
    popular: true
  },
  {
    id: 4,
    name: "Orchid Luxe",
    price: "$55",
    image: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=600&h=600&fit=crop",
    category: "Orchids",
    popular: false
  },
  {
    id: 5,
    name: "Lavender Dreams",
    price: "$35",
    image: "https://images.unsplash.com/photo-1611639505750-1b7938c2e3a3?w=600&h=600&fit=crop",
    category: "Lavender",
    popular: true
  },
  {
    id: 6,
    name: "Lily Bouquet",
    price: "$48",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop",
    category: "Lilies",
    popular: false
  }
];

export default function FeaturedFlowers() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Collection</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handpicked selections of our most loved arrangements, crafted with care and delivered with love
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower) => (
            <Card key={flower.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 flower-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {flower.popular && (
                  <Badge className="absolute top-4 left-4 bg-pink-500 hover:bg-pink-600">
                    Popular
                  </Badge>
                )}
                <button
                  onClick={() => toggleFavorite(flower.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.includes(flower.id) ? 'fill-pink-500 text-pink-500' : 'text-gray-600 dark:text-gray-300'}`} 
                  />
                </button>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{flower.name}</h3>
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">{flower.price}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{flower.category}</p>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}