import { HelpCircle, Monitor, Users, Presentation } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: HelpCircle,
    title: "INQUIRY",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    number: "2",
    icon: Monitor,
    title: "SELECT DEVELOPERS",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    number: "3",
    icon: Users,
    title: "TEAM INTEGRATION",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    number: "4",
    icon: Presentation,
    title: "TEAM SCALING",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
];

const HiringProcessSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-green-100 via-white to-red-100">
      {/* Decorative lines on left */}
      <div className="absolute left-10 bottom-20 opacity-20">
        <svg width="80" height="100" viewBox="0 0 80 100">
          <path d="M 10 10 Q 10 50 40 50" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M 10 30 Q 10 60 40 60" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M 10 50 Q 10 70 40 70" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Decorative dots on right */}
      <div className="absolute right-20 top-1/4 w-16 h-16 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-coral"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Hiring Process
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Take A Look At Our Simple And Straightforward Process To Hire Software Developers From ValueCoders.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
              <div className="text-center space-y-4 max-w-xs">
                <div className="relative inline-block">
                  {/* Main circle with thicker border */}
                  <div className="w-40 h-40 rounded-full border-[6px] border-accent flex items-center justify-center bg-white shadow-md relative">
                    <step.icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-coral text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block text-muted-foreground">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <path
                      d="M 5 20 L 35 20 M 25 10 L 35 20 L 25 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcessSection;
