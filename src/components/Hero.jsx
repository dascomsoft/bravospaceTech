import { ArrowRight, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5530&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-blue-500/20" data-aos="fade-up" data-aos-delay="100">
              <Star className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-foreground">Certified Digital Agency in South Africa</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight" data-aos="fade-up" data-aos-delay="200">
              Your digital partner to
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> transform</span> your ideas
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Bravespace Tech supports you in creating modern websites,
              custom web and mobile applications. Digital solutions tailored to
              ambitious small businesses and startups.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
              <Link to="/contact">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 text-lg rounded-md flex items-center justify-center w-full sm:w-auto"
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
              <Link to="/services">
                <div
                  className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg rounded-md flex items-center justify-center w-full sm:w-auto"
                >
                  View Our Services
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-muted-foreground">50+ Satisfied Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-muted-foreground">Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="600">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-3 rounded-xl" data-aos="zoom-in" data-aos-delay="700">
                <div className="p-3">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center ">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Websites</h3>
                  <p className="text-sm text-muted-foreground">Modern and responsive</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl mb-3" data-aos="zoom-in" data-aos-delay="800">
                <div className="p-6">
                  <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center ">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground">iOS and Android</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-500/10 to-blue-500/10 border border-slate-500/20 rounded-xl " data-aos="zoom-in" data-aos-delay="900">
                <div className="p-6">
                  <div className="bg-slate-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Web Apps</h3>
                  <p className="text-sm text-muted-foreground">Performant and secure</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-slate-500/10 border border-blue-500/20 rounded-xl " data-aos="zoom-in" data-aos-delay="1000">
                <div className="p-6">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">SEO</h3>
                  <p className="text-sm text-muted-foreground">Advanced optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;