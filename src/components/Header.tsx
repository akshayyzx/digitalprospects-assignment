import { Button } from "@/components/ui/button";
import { Zap, ChevronDown } from "lucide-react";
import { ArrowUpRight } from "lucide-react";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-foreground fill-current" />
            </div>
            <span className="font-bold text-xl text-foreground">Logoipsum</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
              Software Team
              <ChevronDown className="w-4 h-4 mt-1" />
            </button>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#technologies" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Technologies
            </a>
            <a href="#resources" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Resources
            </a>
            <a href="#company" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Company
            </a>
          </nav>
          
          <Button variant="outline-accent" className="rounded-md px-6">
            Get In Touch
         <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
