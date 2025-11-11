import { CheckCircle2 } from "lucide-react";

const sidebarItems = [
  { title: "Benefits Of Hiring Developers", active: false },
  { title: "Key Factors To Consider While Hiring", active: true },
  { title: "Defining Your Project Requirements", active: false },
  { title: "Choosing The Right Development Model", active: false },
  { title: "Typical Challenges For Hiring Developers", active: false },
  { title: "Hiring Freelancers Vs. Dedicated Developers", active: false },
  { title: "Communication With Remote Developers", active: false }
];

const benefits = [
  { title: "Client-Centric Approach", color: "text-accent" },
  { title: "Best-In-Class Project Management", color: "text-accent" },
  { title: "Global Quality Standards", color: "text-accent" },
  { title: "Time-Zone Compatibility", color: "text-accent" },
  { title: "Cutting-Edge Infrastructure", color: "text-accent" },
  { title: "Agile Adaptability", color: "text-accent" }
];

const UserGuideSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            User Guide To Hire Dedicated Software Developers
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-1">
            <div className="bg-secondary rounded-t-lg p-4 font-semibold text-foreground border-b-2 border-border">
              Benefits Of Hiring Developers
            </div>
            {sidebarItems.map((item, index) => (
              <div 
                key={index}
                className={`p-4 cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-accent text-white font-semibold' 
                    : 'bg-background hover:bg-secondary text-foreground border-b border-border'
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
          
          {/* Content */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Benefits Of Hiring Developers
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-5 h-5 ${benefit.color} shrink-0`} />
                  <span className="text-sm font-medium text-foreground">{benefit.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop" 
                alt="Developer working on code"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuideSection;
