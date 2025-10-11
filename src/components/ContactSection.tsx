"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Github, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or want to place a custom order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Contact Information</h3>
              <div className="space-y-4">
                <Card className="flower-shadow hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">Email</div>
                      <a href="mailto:girish@ladestack.in" className="text-pink-600 dark:text-pink-400 hover:underline">
                        girish@ladestack.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flower-shadow hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">Instagram</div>
                      <a 
                        href="https://instagram.com/girish_lade_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-600 dark:text-pink-400 hover:underline"
                      >
                        @girish_lade_
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flower-shadow hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">GitHub</div>
                      <a 
                        href="https://github.com/girishlade111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-600 dark:text-pink-400 hover:underline"
                      >
                        @girishlade111
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden flower-shadow">
              <img
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&h=600&fit=crop"
                alt="Flower shop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Visit Our Shop</span>
                  </div>
                  <p className="text-sm">Come see our beautiful collection in person</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="flower-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your flower needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" className="w-full text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}