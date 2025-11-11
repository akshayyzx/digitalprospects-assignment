import { Card } from "@/components/ui/card";
import ellipse21 from "@/assets/ellipse-21.png";

const technologies = [
  {
    title: "Backend Development",
    color: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-b-4 border-b-blue-400",
    icon: "💻"
  },
  {
    title: "Fronted Development",
    color: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-b-4 border-b-orange-400",
    icon: "⚙️"
  },
  {
    title: "Mobile Development",
    color: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-b-4 border-b-purple-400",
    icon: "📱"
  },
  {
    title: "Blockchain, AI/ML",
    color: "bg-cyan-50 dark:bg-cyan-950/20",
    borderColor: "border-b-4 border-b-cyan-400",
    icon: "🔷"
  },
  {
    title: "DevOps & Low-Code",
    color: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-b-4 border-b-yellow-400",
    icon: "⚡"
  },
  {
    title: "E-commerce & CMS",
    color: "bg-pink-50 dark:bg-pink-950/20",
    borderColor: "border-b-4 border-b-pink-400",
    icon: "🛍️"
  }
];

const techStack = [".NET", "C/C++", "DJANGO", "Firebase", "GOLANG", "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON", "RUBY ON RAILS", "JAVA"];

const TechnologySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative arrow */}
<div className="absolute left-10 top-10 rotate-[-10deg] opacity-20 text-foreground text-black">
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16"
  >
    <path
      d="M20 70 L60 30 M35 70 L75 30 M50 70 L90 30"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Diverse Technology Competency
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className={`p-6 md:p-8 ${tech.color} ${tech.borderColor} border-t-0 border-l-0 border-r-0 hover:shadow-lg transition-shadow`}>
              <div className="space-y-4">
                <div className="w-16 h-16 flex items-center justify-center text-4xl">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{tech.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((stack, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-background rounded border border-border">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
