import React from 'react';
import { Shield, Award, Globe, Users, CheckCircle, Clock } from 'lucide-react';

const TrustSection = () => {
  const trustFactors = [
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your data and projects are protected with enterprise-level security measures and strict confidentiality agreements.",
      stats: "100% Data Protection"
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team consists of certified developers and designers with proven expertise in modern technologies.",
      stats: "5+ Years Experience"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Based in South Africa with international service capabilities, we serve clients worldwide with local expertise.",
      stats: "15+ Countries Served"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A committed team of experts working exclusively on your project to ensure the best possible outcomes.",
      stats: "10+ Team Members"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure every project meets the highest standards.",
      stats: "99.9% Success Rate"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time, every time, without compromising on quality.",
      stats: "On-Time Delivery"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Trust Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built our reputation on trust, quality, and results. Here's why businesses choose us as their digital partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <div 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-800/50 border border-slate-600 rounded-xl overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <factor.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{factor.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {factor.description}
                </p>
                <div className="text-blue-400 font-semibold text-sm">
                  {factor.stats}
                </div>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default TrustSection;