import React from 'react';
import { Shield, Clock, Users, Trophy, Code, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "Years of experience in digital solutions with a track record of successful projects across various industries."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising quality. Your business goals are our priority."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Our team provides continuous support throughout your project and beyond, ensuring your success."
    },
    {
      icon: Trophy,
      title: "Award-Winning Quality",
      description: "We maintain the highest standards in design, development, and user experience for all our projects."
    },
    {
      icon: Code,
      title: "Latest Technologies",
      description: "We use cutting-edge technologies and best practices to ensure your solution is future-proof."
    },
    {
      icon: Headphones,
      title: "24/7 Availability",
      description: "Our support team is available around the clock to address any concerns or questions you may have."
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional digital solutions that drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;