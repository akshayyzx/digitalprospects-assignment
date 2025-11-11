import { ArrowUpRight } from "lucide-react";
import businessMeeting from "@/assets/business-meeting.jpg";

const features = [
  "English Speaking Programmers",
  "Flexible Work Hours",
  "Rapid Onboarding Process",
  "Expertise In Top Technologies",
  "Reliable Partner Credentials"
];

const WhyIndiaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={businessMeeting} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Why Hire Software Developers<br />In India?
            </h2>
          </div>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 border-b border-white/20 hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-lg font-medium">{feature}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndiaSection;
