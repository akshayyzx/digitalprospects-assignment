import { CheckCircle2 } from "lucide-react";
import illustration from "../assets/Screenshot 2025-11-11 200401.png";

const benefits = [
  { text: "Client-Centric Approach", color: "text-accent" },
  { text: "Best-In-Class Project Management", color: "text-accent" },
  { text: "Global Quality Standards", color: "text-accent" },
  { text: "Time-Zone Compatibility", color: "text-accent" },
  { text: "Cutting-Edge Infrastructure", color: "text-accent" },
  { text: "Agile Adaptability", color: "text-accent" }
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* === Illustration Image === */}
          <div className="relative flex justify-center">
            {/* Decorative blurred green glow */}
            <div className="absolute inset-0 w-96 h-96 bg-mint/30 rounded-full -z-10 blur-3xl"></div>

            {/* Actual imported illustration image */}
            <img
              src={illustration}
              alt="Developers illustration"
              className="w-full max-w-lg object-contain"
              loading="lazy"
            />
          </div>

          {/* === Right Text Content === */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-5 h-5 ${benefit.color} shrink-0`} />
                  <span className="text-foreground text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
