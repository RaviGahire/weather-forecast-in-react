import React, { useState } from 'react';
import { Cloud, Users, Target, Award, MapPin, Mail, Phone, Zap, Shield, Heart, TrendingUp, Globe } from 'lucide-react';
import {Footer} from './Footer'

export  function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Meteorologist",
      image: "👩‍🔬",
      bio: "15+ years of experience in atmospheric sciences",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Michael Chen",
      role: "Lead Data Scientist",
      image: "👨‍💻",
      bio: "Expert in AI-powered weather prediction models",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Product Director",
      image: "👩‍💼",
      bio: "Passionate about making weather data accessible",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      image: "👨‍💻",
      bio: "Building scalable weather monitoring systems",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50M+", label: "Active Users", color: "from-blue-500 to-cyan-500" },
    { icon: <Globe className="w-8 h-8" />, value: "150+", label: "Countries", color: "from-purple-500 to-pink-500" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "99.9%", label: "Accuracy", color: "from-green-500 to-emerald-500" },
    { icon: <Award className="w-8 h-8" />, value: "25+", label: "Awards Won", color: "from-orange-500 to-red-500" }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Accuracy First",
      description: "We prioritize precision in every forecast, using cutting-edge technology and data science.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description: "Your data privacy is our responsibility. We maintain the highest security standards.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric",
      description: "Every feature is designed with our users in mind, making weather data accessible to all.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with AI and machine learning for better predictions.",
      color: "from-yellow-500 to-green-500"
    }
  ];

  const milestones = [
    { year: "2015", event: "Company Founded", description: "Started with a vision to revolutionize weather forecasting" },
    { year: "2017", event: "AI Integration", description: "Launched our first AI-powered prediction model" },
    { year: "2019", event: "Global Expansion", description: "Reached 100 countries worldwide" },
    { year: "2022", event: "50M Users", description: "Celebrated 50 million active users milestone" },
    { year: "2024", event: "Award Winner", description: "Recognized as Best Weather App globally" }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-white">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-400 via-blue-600 to-blue-800"></div>
        <div className="absolute inset-0" ></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center animate-fadeIn">
            <div className="inline-flex items-center text-zinc-50 gap-2 bg-zinc-100/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-100/20">
              <Cloud className="w-5 h-5 text-zinc-50" />
              <span className="text-sm font-medium">About WeatherPro</span>
            </div>
            
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-zinc-50">
              We Make Weather
              <br />Simple & Accurate
            </h1>
            
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Empowering millions of people worldwide with precise weather forecasts and real-time alerts. 
              Your trusted companion for every weather condition.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-3 py-2 md:px-8 md:py-4 text-sm md:text-lg bg-gray-900 cursor-pointer rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/30">
                Join Our Team
              </button>
              <button className="px-3 py-2 md:px-8 md:py-4 text-sm md:text-lg cursor-pointer  bg-[#1e293b] rounded-xl font-semibold hover:bg-[#2d3b50] transition-colors border border-gray-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 text-center hover:scale-105 transition-transform border border-gray-700/50"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-16">
        <div className="bg-[#1e293b] rounded-3xl p-3 md:p-8 border border-gray-700/50">
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium capitalize transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                    : 'bg-[#0f172a] hover:bg-[#1a2332]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'mission' && (
            <div className="animate-fadeIn">
              <h2 className="text-lg md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-400" />
                Our Mission
              </h2>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                To provide the most accurate, reliable, and accessible weather information to people around the world. 
                We believe everyone deserves to know what's coming, whether it's planning a picnic or preparing for a storm. 
                Our mission is to make weather forecasting simple, intuitive, and available to everyone, everywhere.
              </p>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="animate-fadeIn">
              <h2 className="text-lg md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Globe className="w-8 h-8 text-purple-400" />
                Our Vision
              </h2>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                To become the world's most trusted weather platform, leveraging cutting-edge AI and machine learning 
                to predict weather patterns with unprecedented accuracy. We envision a future where weather-related 
                disasters are minimized through early warnings and where every person has access to life-saving weather information.
              </p>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="animate-fadeIn">
              <h2 className="text-lg md:text-3xl font-bold mb-6">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-[#0f172a] rounded-xl p-6 hover:scale-105 transition-transform border border-gray-700/50"
                  >
                    <div className={`inline-flex p-3 bg-gradient-to-br ${value.color} rounded-lg mb-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className={`w-1/1 md:w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700/50 hover:scale-105 transition-transform mx-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-[#0f172a] shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-800">The brilliant minds behind WeatherPro</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-[#1e293b] rounded-2xl overflow-hidden hover:scale-105 transition-transform border border-gray-700/50 group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="h-48 bg-gradient-to-bl from-blue-400 via-blue-600 to-blue-800 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                {member.image}
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-blue-400 text-sm mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <a href={member.social.twitter} className="w-10 h-10 bg-[#0f172a] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    𝕏
                  </a>
                  <a href={member.social.linkedin} className="w-10 h-10 bg-[#0f172a] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    in
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-bl from-blue-400 via-blue-600 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Have questions or want to join our mission? We'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@weatherpro.com" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
                hello@weatherpro.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>


      <Footer/>
      </>
  );
}