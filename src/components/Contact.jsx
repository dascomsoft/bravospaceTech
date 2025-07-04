import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `
🚀 *NEW QUOTE REQUEST - BRAVESPACE TECH*

👤 *Client:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
🏢 *Company:* ${formData.company || 'Not provided'}
💼 *Project Type:* ${formData.project}

📋 *Project Description:*
${formData.message}

---
🎯 *Request sent from:* ${window.location.origin}
📅 *Date:* ${new Date().toLocaleString('en-US')}
    `.trim();

    const whatsappNumber = "27765976794";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    alert("Redirecting to WhatsApp! Your request will be sent via WhatsApp. We'll respond quickly.");
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Talk About Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Free consultation to analyze your needs and propose the perfect digital solution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-slate-700 bg-slate-900/50 rounded-xl">
              <div className="p-6 border-b border-slate-700">
                <h3 className="flex items-center space-x-3 font-bold text-lg">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span>Email</span>
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">dascomsoft@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 24h guaranteed</p>
              </div>
            </div>

            <div className="border border-slate-700 bg-slate-900/50 rounded-xl">
              <div className="p-6 border-b border-slate-700">
                <h3 className="flex items-center space-x-3 font-bold text-lg">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span>Phone</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  <div>
                    <p className="text-muted-foreground">🇿🇦 +27 765 976 794</p>
                    <p className="text-xs text-muted-foreground">South Africa HQ - CEO Mr Joseph</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">🇨🇲 +237 673 916 778</p>
                    <p className="text-xs text-muted-foreground">Cameroon Rep - Mr Dassi</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 9am-6pm (GMT+2)</p>
              </div>
            </div>

            <div className="border border-slate-700 bg-slate-900/50 rounded-xl">
              <div className="p-6 border-b border-slate-700">
                <h3 className="flex items-center space-x-3 font-bold text-lg">
                  <div className="bg-gradient-to-r from-slate-500 to-blue-500 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span>Address</span>
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">98 Nel Street</p>
                <p className="text-muted-foreground">Blignautsrus AH Walkerville</p>
                <p className="text-muted-foreground">South Africa</p>
                <p className="text-sm text-muted-foreground mt-2">100% online service</p>
              </div>
            </div>

            <div className="space-y-4 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <h3 className="font-semibold text-foreground flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Fast Process</span>
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free consultation</li>
                <li>• Quote within 48h</li>
                <li>• Development 2-6 weeks</li>
                <li>• Support included</li>
              </ul>
            </div>

            <div className="space-y-4 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
              <h3 className="font-semibold text-foreground flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-400" />
                <span>Confidentiality Guaranteed</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Your data and projects are protected by our strict confidentiality agreements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border border-slate-700 bg-slate-900/50 rounded-xl">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-2xl font-bold text-foreground">
                  Free Quote Request
                </h3>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-slate-600 rounded-md bg-slate-800/50 text-foreground"
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-slate-600 rounded-md bg-slate-800/50 text-foreground"
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
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-600 rounded-md bg-slate-800/50 text-foreground"
                        placeholder="+27 123 456 789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-600 rounded-md bg-slate-800/50 text-foreground"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-slate-600 rounded-md bg-slate-800/50 text-foreground"
                    >
                      <option value="">Select your project</option>
                      <option value="website">Website</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="web-app">Web Application</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="maintenance">Maintenance/Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-slate-600 rounded-md bg-slate-800/50 text-foreground"
                      placeholder="Describe your project, objectives, desired features, approximate budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-4 text-lg rounded-md flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send my request
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by Bravespace Tech 
                    regarding your project. Your data is protected.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;