import { Globe, Smartphone, Code, Search, Shield, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';






const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Modern Websites",
      description: "Creation of responsive websites, SEO optimized and adapted to your identity. Modern design and custom features.",
      features: ["Responsive design", "SEO optimization", "Integrated CMS", "Enhanced security"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Development of intuitive iOS and Android applications to reach your customers wherever they are.",
      features: ["iOS & Android", "Optimized UX/UI", "API integrations", "App Store ready"],
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Complex and performant web solutions adapted to your business specific needs.",
      features: ["Modern technologies", "Scalability", "Performance", "Maintenance"],
      gradient: "from-slate-500 to-blue-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with our advanced SEO strategies and local/international targeting.",
      features: ["SEO audit", "Local keywords", "Optimized content", "Analytics tracking"],
      gradient: "from-blue-500 to-slate-500"
    },
    {
      icon: Shield,
      title: "Security & Hosting",
      description: "Secure hosting, regular backups and advanced protection for your data.",
      features: ["Integrated SSL", "Auto backups", "DDoS protection", "99.9% uptime"],
      gradient: "from-purple-500 to-slate-500"
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Continuous monitoring, regular updates and technical support to ensure your projects growth.",
      features: ["24/7 support", "Updates", "Training", "Strategic advice"],
      gradient: "from-slate-500 to-purple-500"
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Digital <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete solutions to transform your digital presence and grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your specific needs and create the perfect solution for your business together.
            </p>
            <Link to="/contact">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-block">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
