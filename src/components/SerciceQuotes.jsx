import { useState } from 'react';
import { Globe, Smartphone, Code, Search, Shield, Headphones, Calculator, Send } from 'lucide-react';
import React from 'react';

const ServiceQuotes = () => {
  const [selectedService, setSelectedService] = useState('');
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    details: ''
  });

  const services = [
    {
      id: 'modern-website',
      icon: Globe,
      title: "Modern Website",
      description: "Responsive site, SEO optimized",
      price: "Starting from 15,000 ZAR",
      features: ["Responsive design", "Integrated CMS", "SEO optimization", "1 year hosting"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: "Mobile Application",
      description: "Native iOS & Android",
      price: "Starting from 25,000 ZAR",
      features: ["iOS & Android", "Integrated APIs", "UX/UI design", "Store publication"],
      gradient: "from-purple-500 to-blue-500"
    },
    {
      id: 'web-app',
      icon: Code,
      title: "Web Application",
      description: "Complex web solution",
      price: "Starting from 20,000 ZAR",
      features: ["Modern technologies", "Database", "Admin panel", "Maintenance"],
      gradient: "from-slate-500 to-blue-500"
    },
    {
      id: 'seo',
      icon: Search,
      title: "SEO Optimization",
      description: "Advanced referencing",
      price: "Starting from 5,000 ZAR/month",
      features: ["SEO audit", "Technical optimization", "Content marketing", "Monthly reports"],
      gradient: "from-blue-500 to-slate-500"
    },
    {
      id: 'maintenance',
      icon: Shield,
      title: "Maintenance & Support",
      description: "Continuous technical support",
      price: "Starting from 2,000 ZAR/month",
      features: ["24/7 support", "Updates", "Backups", "Monitoring"],
      gradient: "from-purple-500 to-slate-500"
    },
    {
      id: 'consultation',
      icon: Headphones,
      title: "Strategic Consultation",
      description: "Personalized digital advice",
      price: "Starting from 1,500 ZAR/session",
      features: ["Digital audit", "Strategy", "Recommendations", "Action plan"],
      gradient: "from-slate-500 to-purple-500"
    }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleInputChange = (e) => {
    setQuoteData({
      ...quoteData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    
    const selectedServiceData = services.find(s => s.id === selectedService);
    
    const whatsappMessage = `
🎯 *SPECIALIZED QUOTE REQUEST - BRAVESPACE TECH*

💼 *Requested Service:* ${selectedServiceData?.title || selectedService}
💰 *Base Price:* ${selectedServiceData?.price || 'On quote'}

👤 *Client:* ${quoteData.name}
📧 *Email:* ${quoteData.email}
📱 *Phone:* ${quoteData.phone || 'Not provided'}
🏢 *Company:* ${quoteData.company || 'Not provided'}
💵 *Budget:* ${quoteData.budget}
⏰ *Desired Timeline:* ${quoteData.timeline}

📋 *Project Details:*
${quoteData.details}

---
🎯 *Page:* Specialized Quote
📅 *Date:* ${new Date().toLocaleString('en-US')}
    `.trim();

    const whatsappNumber = "27765976794";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    alert("Quote sent via WhatsApp! Your specialized quote request has been sent. We'll respond with a detailed quote.");
    
    setQuoteData({
      name: '',
      email: '',
      phone: '',
      company: '',
      budget: '',
      timeline: '',
      details: ''
    });
    setSelectedService('');
  };

  return (
    <section className="py-20 bg-slate-800" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Free <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quotes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a personalized quote for your project. Select the service that interests you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                selectedService === service.id 
                  ? 'border-blue-500 shadow-lg ring-2 ring-blue-500/20' 
                  : 'border-border hover:border-blue-500/50'
              }`}
              onClick={() => handleServiceSelect(service.id)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
                <p className="text-lg font-semibold text-blue-400">{service.price}</p>
              </div>
              <div className="mt-4">
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

        {/* Quote Form */}
        {selectedService && (
          <div className="max-w-4xl mx-auto border border-border rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <div className="p-6 border-b border-border">
              <div className="flex items-center space-x-3 mb-2">
                <Calculator className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-foreground">Personalized Quote Request</h2>
              </div>
              <p className="text-muted-foreground">
                Selected service: <span className="font-semibold text-blue-400">
                  {services.find(s => s.id === selectedService)?.title}
                </span>
              </p>
            </div>
            <div className="p-6">
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={quoteData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={quoteData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={quoteData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder="+27 123 456 789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      name="company"
                      value={quoteData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Approximate Budget
                    </label>
                    <select
                      name="budget"
                      value={quoteData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="">Select your budget</option>
                      <option value="5000-15000">5,000 - 15,000 ZAR</option>
                      <option value="15000-30000">15,000 - 30,000 ZAR</option>
                      <option value="30000-50000">30,000 - 50,000 ZAR</option>
                      <option value="50000+">50,000+ ZAR</option>
                      <option value="on-quote">On quote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Desired Timeline
                    </label>
                    <select
                      name="timeline"
                      value={quoteData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="normal">Normal (1-2 months)</option>
                      <option value="flexible">Flexible (2-3 months)</option>
                      <option value="not-urgent">Not urgent (3+ months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="details"
                    value={quoteData.details}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    placeholder="Describe your project in detail: features, desired design, target audience, specific constraints..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-4 text-lg rounded-md flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Quote Request
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Your request will be sent via WhatsApp for fast and personalized processing.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceQuotes;