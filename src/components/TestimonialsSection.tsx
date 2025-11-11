import { Card } from "@/components/ui/card";
import { Star, Play } from "lucide-react";

const testimonials = [
  {
    name: "Krish Bruynson",
    company: "Director, Starloft",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Anna Peterson",
    company: "Director, Starloft",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "James Weston",
    company: "Director, Starloft",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Robert Hale",
    company: "Director, Starloft",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F292E] mb-4">
            What Our Clients Have To Say About Us
          </h2>
          <p className="text-base md:text-lg text-[#5C767D] max-w-3xl mx-auto">
            Take A Look At Our Simple And Straightforward Process To Hire
            Software
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-0"
            >
              {/* Folded image container */}
              <div className="relative aspect-[3/4] overflow-hidden group clip-path-fold">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* White folded corner */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-t-[60px] border-l-transparent border-t-white"></div>

                {/* Play Button */}
                <button className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-emerald-400 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </button>
              </div>

              {/* Text Info */}
              <div className="p-5 text-center space-y-2">
                <h3 className="font-bold text-lg text-[#0F292E]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#5C767D]">{testimonial.company}</p>
                <div className="flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-emerald-400 text-emerald-400"
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Fold effect style */}
      <style>{`
        .clip-path-fold {
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 30px),
            calc(100% - 30px) 100%,
            0 100%
          );
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
