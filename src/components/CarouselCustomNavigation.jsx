import { Carousel, IconButton } from "@material-tailwind/react";
 
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50 "
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute rounded-full top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute rounded-full top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="flex flex-row justify-center">
        <a href="https://www.instagram.com/reel/C3_ef_dIXuf/?utm_source=ig_web_copy_link" className="relative max-w-[50%] mb-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                      <div className="relative overflow-hidden">
                          <img src="../../img/flyer (1).png" alt="" className="w-full max-h-[586px]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 from-10% via-transparent bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <p className="text-1 absolute bottom-12">Ir a laidad &gt;</p>
                          </div>
                          <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-black/75 from-10% via-transparent flex items-center justify-center transition-opacity duration-300">
                          <p className="text-1 absolute bottom-6 text-lg">Ir a laidad &gt;</p>
                          </div>
                      </div>
        </a>
      </div>
      <div className="flex flex-row justify-center">
        <a href="https://www.instagram.com/reel/C3527bRr26S/?utm_source=ig_web_copy_link" className="relative max-w-[50%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                      <div className="relative overflow-hidden">
                          <img src="../../img/flyer (2).png" alt="" className="w-full max-h-[586px]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 from-10% via-transparent bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <p className="text-1 absolute bottom-12">Ir a laidad &gt;</p>
                          </div>
                          <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-black/75 from-10% via-transparent flex items-center justify-center transition-opacity duration-300">
                          <p className="text-1 absolute bottom-6 text-lg">Ir a laidad &gt;</p>
                          </div>
                      </div>
        </a>
      </div>
      <div className="flex flex-row justify-center">
        <a href="https://www.instagram.com/reel/C2_FTDNBxIJ/?utm_source=ig_web_copy_link" className="relative max-w-[50%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                      <div className="relative overflow-hidden">
                          <img src="../../img/flyer (3).png" alt="" className="w-full max-h-[586px]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 from-10% via-transparent bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <p className="text-1 absolute bottom-12">Ir a laidad &gt;</p>
                          </div>
                          <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-black/75 from-10% via-transparent flex items-center justify-center transition-opacity duration-300">
                          <p className="text-1 absolute bottom-6 text-lg">Ir a laidad &gt;</p>
                          </div>
                      </div>
        </a>
      </div>
    </Carousel>
  );
}