import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-foreground fill-current" />
              </div>
              <span className="font-bold text-xl">Logoipsum</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Software Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Technologies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Contact us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Dedicated Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Staff Augmentation Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Development Center</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span>Envato, Level 13, 2 Elizabeth Victoria 3000 India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 861 944 1176</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>ezyoga@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white">
          <p>logoname. 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
