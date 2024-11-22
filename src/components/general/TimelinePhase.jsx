import { roadMapAllPhases } from "../data-display/data";

const TimelinePhase = ({ phase, isActive }) => {
  return (
    <div className="space-y-24">
      {roadMapAllPhases.map((phase, index) => (
        <div key={index} className="relative">
          {/* Timeline Dot */}
          <div className="absolute left-[29px] -translate-x-1/2 w-[38px] h-[38px] rounded-full bg-red-600">
            <div className="w-[27px] h-[27px] rounded-full bg-white absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="ml-16 flex-1">
            {/* Phase Header */}
            <div
              className={`bg-[#FD16404D] w-full md:w-[562px] h-auto md:h-[57px] px-4 md:pl-7 flex items-center mb-4 ${
                index % 2 !== 0 ? "ml-[238px]" : " "
              }`}
            >
              <h3 className="font-zen-dots text-[#FD1640] text-lg md:text-xl leading-6">
                {phase.title}
              </h3>
            </div>

            {/* Content Box */}
            <div
              className={`mt-2 flex flex-wrap ${
                index % 2 === 0 ? "flex-row " : "flex-row-reverse"
              } bg-[#FD1640] rounded-r-lg h-auto md:h-40 z-10`}
            >
              {/* Text Content */}
              <div className="flex-1 p-6 relative z-20">
                <ul className="list-disc pl-7 space-y-2 text-sm md:text-base font-inter">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Image/Video Section */}
              <div className="relative w-full md:w-[288px] h-auto md:h-[238px]">
                {/* <video
                  className="absolute rounded-full w-full h-full object-cover inset-3 z-[0] top-[-90px]"
                  autoPlay
                  loop
                  muted
                  src="https://s3-figma-videos-production-sig.figma.com/video/1169272246591235850/TEAM/bbc2/2cfb/-2510-48ac-a4e4-a0aec2785bd4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b~9Lvh0~~aFiuto6OnmZrNFd1k3yXlD5Kvk4YzknzW1JSLIZqeSF5oo2Aolpx1Po3ZP9KqnCPQt-TrucL99VSnBxv8J9DZ4ifFey220CP8t45YeEIIoFinVujCXdQdtVMsKv0~8qUdfZHzHKjBGuj5OZaPj4k5sgoiYkjS-oHqS0f1Mjl4OHeWVEPuIUJHYNr0Bl6-jYkgGsix4LNrV7mD18FpKFBa16tiOTCKeVL0-qbyqy-9PGXGrZ0~lNwbhF1onW~xg4A3cPFvoYA50MJrczluXwQCkKtInQ9SIZ4fkgKQqWNOloApQZql8VuB0buv0qMwWuFZsi1TZYwRIG8w__"
                /> */}
                <img
                  src={phase.image}
                  alt={`Phase ${phase.number}`}
                  className="mx-auto md:absolute md:left-1/2 md:top-[31px] transform md:-translate-x-1/2 md:-translate-y-1/2 w-[206px] h-[258px] z-20"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelinePhase;
