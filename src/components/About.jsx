import React from 'react';
import { MapPin, Users, Award, Clock } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Satisfied Clients",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Award,
      number: "100+",
      label: "Projects Completed",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Clock,
      number: "2-6",
      label: "Weeks Delivery",
      gradient: "from-blue-500 to-slate-500"
    },
    {
      icon: MapPin,
      number: "3",
      label: "Countries Served",
      gradient: "from-slate-500 to-blue-500"
    }
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4076&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-aos="fade-up">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Bravospace 294 Tech</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="100">
                Digital agency registered in South Africa, we support small businesses
                and startups in their digital transformation with customized solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Our expertise covers modern website creation, web and mobile application
                development, as well as SEO optimization. We work online discreetly
                and securely, guaranteeing confidentiality and quality with every project.
              </p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratize access to digital technologies for African and
                international businesses, by offering innovative, accessible and performant
                solutions that stimulate growth and competitiveness.
              </p>
            </div>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Personalized solutions adapted to your budget</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Modern technologies and market trends</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Technical support and training included</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Confidentiality and security guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-slate-900/50 border-slate-700 hover:shadow-lg transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 100}
                >
                  <div className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} p-4`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20" data-aos="fade-up" data-aos-delay="900">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Based in South Africa</h3>
                    <p className="text-muted-foreground">Legally registered agency</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our legal status in South Africa allows us to offer international quality
                  services while maintaining competitive rates for startups and SMEs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20" data-aos="fade-up" data-aos-delay="1000">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">🌍 International Reach</h3>
                <p className="text-muted-foreground">
                  We serve clients in South Africa, Cameroon and other countries,
                  with a 100% secure and transparent online service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
