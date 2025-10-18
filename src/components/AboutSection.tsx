import React from "react";

const AboutIEDCBIT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0018] via-[#1b0033] to-[#0a0018] flex items-start justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Sparkles (SVG) positioned absolutely */}
        <div className="pointer-events-none relative">
          <svg
            className="absolute -top-8 -left-6 w-20 h-20 animate-spark"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.5 7L19 8.5L13.5 10L12 15L10.5 10L5 8.5L10.5 7L12 2Z"
              stroke="#d9b3ff"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="absolute top-6 right-0 w-12 h-12 animate-spark delay-2000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L13.2 7.2L17.6 8.4L13.2 9.6L12 13.8L10.8 9.6L6.4 8.4L10.8 7.2L12 3Z"
              stroke="#d9b3ff"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="absolute bottom-6 left-6 w-10 h-10 animate-spark delay-3500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L12.8 7.2L16 8L12.8 8.8L12 12L11.2 8.8L8 8L11.2 7.2L12 4Z"
              stroke="#d9b3ff"
              strokeWidth="0.45"
              strokeLinejoin="round"
            />
          </svg>

          <section className="bg-[#1b0033]/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl ring-1 ring-[#b266ff]/20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#e6ccff] drop-shadow-[0_0_10px_#b266ff] mb-4">
              ABOUT IEDC-BIT
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#f3e6ff] drop-shadow-[0_0_8px_#a64dff]">
              The Innovation and Entrepreneurship Development Cell of Bangalore
              Institute of Technology (IEDC: BIT) is set up with the primary
              motive of encouraging entrepreneurship and works towards
              developing and strengthening entrepreneurial qualities in budding
              professionals. The Cell aims to provide the required support to
              students with innovative ideas to transform them into new products
              and services. IEDC: BIT acts as an Incubation Center for these
              students with ideas.
            </p>
          </section>

          {/* Decorative glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-[#a64dff] via-[#b266ff] to-[#cc80ff]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spark {
          0% {
            transform: translateY(0) scale(0.9) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-6px) scale(1.05) rotate(12deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(0.9) rotate(0deg);
            opacity: 0.7;
          }
        }

        .animate-spark {
          animation: spark 3.2s ease-in-out infinite;
          filter: drop-shadow(0 4px 10px rgba(178, 102, 255, 0.25));
        }

        .delay-2000 {
          animation-delay: 0.8s;
        }
        .delay-3500 {
          animation-delay: 1.6s;
        }

        @media (max-width: 640px) {
          .min-h-screen {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutIEDCBIT;

