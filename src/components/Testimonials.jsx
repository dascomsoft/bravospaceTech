import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Bravespace Tech transformed our online presence with a stunning website that perfectly represents our brand. Their attention to detail and professional approach exceeded our expectations.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "GrowthLab",
      role: "Founder",
      content: "The mobile app they developed for us has been a game-changer. User-friendly, fast, and exactly what we needed to scale our business. Highly recommended!",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Emma Williams",
      company: "Digital Dynamics",
      role: "Marketing Director",
      content: "Outstanding service from start to finish. The team was responsive, creative, and delivered on time. Our new web application has significantly improved our workflow.",
      rating: 5,
      image: "👩‍🚀"
    },
    {
      name: "David Brown",
      company: "InnovateCorp",
      role: "CTO",
      content: "Professional, reliable, and innovative. Bravespace Tech understood our technical requirements and delivered a solution that perfectly fits our needs.",
      rating: 5,
      image: "👨‍🔬"
    },
    {
      name: "Lisa Anderson",
      company: "CreativeCo",
      role: "Owner",
      content: "The SEO optimization they provided has dramatically increased our online visibility. We've seen a 300% increase in organic traffic since working with them.",
      rating: 5,
      image: "👩‍🎨"
    },
    {
      name: "James Wilson",
      company: "TechBridge",
      role: "Product Manager",
      content: "Exceptional quality and attention to detail. The ongoing support and maintenance services have been invaluable for our business growth.",
      rating: 5,
      image: "👨‍💼"
    }
  ];

  return (
    <section className="py-20 bg-slate-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-900/30 border border-slate-700 rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;