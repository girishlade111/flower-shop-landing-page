import { Truck, Gift, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders over $50. Fast and reliable delivery to your doorstep."
  },
  {
    icon: Gift,
    title: "Custom Arrangements",
    description: "Personalized bouquets designed just for your special occasion."
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Order before 2 PM for same-day delivery in your local area."
  },
  {
    icon: Award,
    title: "Fresh Guarantee",
    description: "100% satisfaction guaranteed. All flowers are freshly picked."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to delivering the freshest flowers and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 flower-shadow border-2 hover:border-pink-200 dark:hover:border-pink-500/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}