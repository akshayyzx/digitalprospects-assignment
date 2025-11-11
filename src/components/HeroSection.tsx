import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-gradient-to-r from-green-100 via-white to-rose-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 pt-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
                <div className="flex items-center gap-4 lg:text-5xl">
                  <span className="text-accent">HIRE DEDICATED</span>
                  <div className="h-1 w-52 bg-emerald-400"></div>
                </div>
                <span className="text-primary block font-bold lg:text-8xl">DEVELOPERS</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
              </p>
            </div>

            <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="coral" size="lg" className="rounded-md text-base font-semibold group">
                View More
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline-accent" size="lg" className="rounded-md text-base font-semibold group">
                Get In Touch
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-border">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Create Your Team</h2>
                <p className="text-sm text-muted-foreground">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <Input placeholder="Enter Your Name" className="bg-secondary border-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <Input type="email" placeholder="Enter Your Email" className="bg-secondary border-input" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone No</label>
                    <Input type="tel" placeholder="Enter Your Number" className="bg-secondary border-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Country</label>
                    <Input placeholder="Enter Your Country" className="bg-secondary border-input" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Project Brief</label>
                  <Textarea 
                    placeholder="Enter Your Project Brief" 
                    className="bg-secondary border-input min-h-[120px] resize-none"
                  />
                </div>
                
                <Button variant="coral" size="lg" className="w-full text-base font-semibold group">
                  Hire Software Developer
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
