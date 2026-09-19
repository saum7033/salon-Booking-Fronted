import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2
        w-[177.78vh]
        h-[59.25vw]
        min-w-full
        min-h-full
        -translate-x-1/2
        -translate-y-1/2
        pointer-events-none"
        src="https://www.youtube.com/embed/_0YvVFcaRp8?autoplay=1&mute=1&loop=1&playlist=_0YvVFcaRp8&controls=0&rel=0&modestbranding=1&playsinline=1&start=5&end=21"
        title="Banner Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
      ></iframe>
      <div className="textPart absolute flex flex-col items-center justify-center inset-0 text-white z-20 space-y-3 px-5">
        <h1 className="text-5xl font-bold text-border-black-600">Be your self</h1>
        <p className="text-slate-400 text-2xl text-center font-semibold">
            Discover and Book Beauty, wellness near you
        </p>
        <input className="border-none bg-white rounded-md py-3.5 w-[12rem] md:w-[29rem] outline-none text-black px-11" type="text" placeholder="search salon service........"/>
      </div>
    </div>
  );
};

export default Banner; 