import { roadMapAllPhases } from "../data-display/data";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2 font-zen-dots">Roadmap</h1>
          <p className="text-sm opacity-80">
            Guiding the fusion of culture, AI, and Web3 innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[29px] top-0 bottom-0 w-0 border-l-2 border-dashed border-red-600" />

          {/* Phases */}
          <div className="space-y-24">
            {roadMapAllPhases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-[29px] -translate-x-1/2 w-[38px] h-[38px] rounded-full bg-red-600">
                  <div className="w-[28px] h-[28px] rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className={`ml-16 flex-1 'ml-[416.5px]' : ''}`}>
                  {/* Phase Header */}
                  <div className="bg-[#FD16404D] w-[562px] h-[57px] flex items-center mb-4">
                    <h3 className="font-zen-dots text-[#FD1640] text-xl leading-6 pl-7">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Content Box */}
                  <div className="mt-2 flex bg-[#FD1640] rounded-r-lg h-40 z-10 ">
                    <div className="flex-1 p-6 relative z-20">
                      <ul className="list-disc pl-7 space-y-2 text-base font-inter">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative w-[238px] h-[238px]">
                      {/* Background Video with Glow Effect */}
                      {/* <div className="absolute rounded-full w-64  h-60 left-[-10px] top-[-130px]  inset-0 z-0"> */}
                        <video
                          className="absolute rounded-full w-full h-full object-cover inset-3 z-[0]"
                          autoPlay
                          loop
                          muted
                          src="https://s3-figma-videos-production-sig.figma.com/video/1169272246591235850/TEAM/bbc2/2cfb/-2510-48ac-a4e4-a0aec2785bd4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b~9Lvh0~~aFiuto6OnmZrNFd1k3yXlD5Kvk4YzknzW1JSLIZqeSF5oo2Aolpx1Po3ZP9KqnCPQt-TrucL99VSnBxv8J9DZ4ifFey220CP8t45YeEIIoFinVujCXdQdtVMsKv0~8qUdfZHzHKjBGuj5OZaPj4k5sgoiYkjS-oHqS0f1Mjl4OHeWVEPuIUJHYNr0Bl6-jYkgGsix4LNrV7mD18FpKFBa16tiOTCKeVL0-qbyqy-9PGXGrZ0~lNwbhF1onW~xg4A3cPFvoYA50MJrczluXwQCkKtInQ9SIZ4fkgKQqWNOloApQZql8VuB0buv0qMwWuFZsi1TZYwRIG8w__"
                        />
                      {/* </div> */}
                      {/* Character Image */}
                      <img
                        src={phase.image}
                        alt={`Phase ${phase.number}`}
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[206px] h-[258px] z-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {roadMapAllPhases.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 0 ? "bg-red-600" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
