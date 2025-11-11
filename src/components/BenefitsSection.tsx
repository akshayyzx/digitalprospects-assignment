import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import hireAbout from "@/assets/Application programming interface-amico.png";
import heroLeft from "@/assets/Programming-pana.png";
import wavyimage from "@/assets/image 7.png";

const WhyHireExact = () => {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] text-white py-12 md:py-16 lg:py-24 flex justify-center">
      
      {/* === Decorative Wavy Image (Top Right Corner) === */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[500px] lg:w-[600px] opacity-80 pointer-events-none select-none">
        <img
          src={wavyimage}
          alt="decorative wavy pattern"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* === Left concentric decorative lines === */}
      <svg
        viewBox="0 0 600 600"
        aria-hidden
        className="hidden lg:block absolute -left-24 top-1/4 w-[500px] h-[500px] opacity-40"
      >
        <g stroke="#10B981" strokeWidth="2" fill="none" className="opacity-30">
          <circle cx="320" cy="300" r="200" />
          <circle cx="320" cy="300" r="170" />
          <circle cx="320" cy="300" r="140" />
          <circle cx="320" cy="300" r="110" />
          <circle cx="320" cy="300" r="80" />
        </g>
      </svg>

      {/* === Wavy dotted pattern top-right (kept for subtle depth) === */}
      {/* <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="hidden lg:block absolute right-0 top-0 w-[650px] h-[400px] opacity-30"
      >
        <defs>
          <circle id="dot" r="2" fill="#ffffff" />
        </defs>
        <g>
          {Array.from({ length: 50 }).map((_, i) => {
            const x = i * 15;
            const y = 200 + Math.sin(i / 3) * 80;
            const fade = 1 - i / 50;
            return <use key={i} href="#dot" x={x} y={y} opacity={fade} />;
          })}
          {Array.from({ length: 50 }).map((_, i) => {
            const x = i * 15;
            const y = 200 + Math.sin(i / 3 + 1) * 80;
            const fade = 1 - i / 50;
            return <use key={`2-${i}`} href="#dot" x={x} y={y - 40} opacity={fade} />;
          })}
        </g>
      </svg> */}

      {/* === Content Container === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* Centered title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-4">
          <h2 className="font-bold text-[28px] sm:text-4xl md:text-5xl leading-tight text-black mb-4">
            Why Hire Developers From Our Name
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#758A93] mt-10">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.
          </p>
        </div>

        {/* Top row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center justify-items-center">
          {/* Left illustration */}
          <div className="flex justify-center">
            <img
              src={heroLeft}
              alt="developer illustration left"
              className="w-[400px] md:w-[450px] lg:w-[480px] h-auto object-contain"
            />
          </div>

          {/* Right text */}
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-[#0F0E0E]">
              High Quality/Cost Ratio
            </h3>

            {/* Features */}
            <div className="space-y-5">
              <div className="flex items-start justify-center lg:justify-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="max-w-md">
                  <p className="font-semibold text-black text-lg">
                    Hire Silicon Valley Caliber At Half The Cost
                  </p>
                  <p className="mt-2 text-sm text-[#6F9A9F]">
                    Hire the top 1% of 1.5 Million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4">
                <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div className="max-w-md">
                  <p className="font-semibold text-black text-lg">
                    100+ Skills Available
                  </p>
                  <p className="mt-2 text-sm text-[#6F9A9F]">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center justify-items-center">
          {/* Left text */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            <h3 className="text-2xl md:text-4xl font-bold text-[#0F0E0E]">
              Rigorous Vetting
            </h3>

            <div className="space-y-5">
              <div className="flex items-start justify-center lg:justify-start gap-4">
                <div className="w-9 h-9 rounded-full bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="max-w-md">
                  <p className="font-semibold text-black text-lg">
                    5+ Hours Of Tests And Interviews
                  </p>
                  <p className="mt-2 text-sm text-[#6F9A9F]">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-4">
                <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div className="max-w-md">
                  <p className="font-semibold text-black text-lg">
                    Seniority Tests
                  </p>
                  <p className="mt-2 text-sm text-[#6F9A9F]">
                    Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={hireAbout}
              alt="developer illustration right"
              className="w-[360px] md:w-[420px] lg:w-[460px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireExact;
