import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Headphones, MapPin, Info, HelpCircle, Plane, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "911234567890"; // Replace with actual WhatsApp number
    const message = "I'd like to send my medical reports for a free opinion.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-gradient-to-r from-medical-50 to-nile-50 pt-20 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Get Free Medical Opinion from India's Top Doctors
              <span className="block text-nile-600 mt-2">With Govt. Verified Support</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Fast, Affordable, and Trusted Medical Care in India for International Patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                className="cta-whatsapp text-base py-3 px-6 h-auto"
                onClick={openWhatsApp}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Medical Reports via WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="text-base py-3 px-6 h-auto border-nile-600 text-nile-600 hover:bg-nile-50"
              >
                Talk to a Medical Expert
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <Button 
                variant="secondary" 
                className="justify-start bg-white border border-nile-200 hover:bg-nile-50"
                asChild
              >
                <Link to="/free-services">
                  <HelpCircle className="mr-2 h-4 w-4 text-nile-600" />
                  Free Services
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                className="justify-start bg-white border border-nile-200 hover:bg-nile-50"
                asChild
              >
                <Link to="/free-services/visa-help">
                  <Plane className="mr-2 h-4 w-4 text-nile-600" />
                  Visa Help
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                className="justify-start bg-white border border-nile-200 hover:bg-nile-50"
                asChild
              >
                <Link to="/free-services/pickup">
                  <MapPin className="mr-2 h-4 w-4 text-nile-600" />
                  Pickup & Transfer
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                className="justify-start bg-white border border-nile-200 hover:bg-nile-50"
                asChild
              >
                <Link to="/free-services/translators">
                  <Globe className="mr-2 h-4 w-4 text-nile-600" />
                  Language Support
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=IMA" 
                  alt="Indian Medical Association" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=NABH" 
                  alt="NABH Accreditation" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/60x30/white/gray/?text=JCI" 
                  alt="JCI Certification" 
                  className="h-6"
                />
              </div>
              <div className="bg-white p-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src="https://placehold.co/100x30/white/gray/?text=Govt.+of+India" 
                  alt="Government of India" 
                  className="h-6"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
              src="https://i.ibb.co/kshPQtJb/istockphoto-1460981468-612x612.jpg" 
            alt="Diverse patients with Indian doctors" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-nile-600 text-white py-3 px-5 rounded-lg shadow-lg text-sm">
              Trusted by 1000+ International Patients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
