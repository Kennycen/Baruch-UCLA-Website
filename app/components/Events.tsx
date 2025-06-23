import React from "react";

const Events = (): React.JSX.Element => {
  return (
    <section
      id="events"
      className="flex flex-col justify-center items-center gap-4 p-16 px-10 mb-16 xl:px-[10rem] h-full bg-[#e9a033]"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#992933]">
        Our Events
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-around gap-6 text-white mb-8">
        <div
          className="h-[30rem] xl:h-[35rem] md:w-1/3 bg-cover rounded-2xl flex items-end p-5 shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out cursor-pointer"
          style={{ backgroundImage: "url('/images/misc/GIM.png')" }}
        >
          <div>
            <h3 className="text-xl">
              GIM <br /> General Interest Meeting
            </h3>
          </div>
        </div>
        <div
          className="h-[30rem] xl:h-[35rem] md:w-1/3 bg-cover rounded-2xl flex items-end p-5 shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out cursor-pointer"
          style={{ backgroundImage: "url('/images/misc/CLP.png')" }}
        >
          <div>
            <h3 className="text-xl">
              CLP <br /> Cultural Learning Program
            </h3>
          </div>
        </div>
        <div
          className="h-[30rem] xl:h-[35rem] md:w-1/3 bg-cover rounded-2xl flex items-end p-5 shadow-lg transform transition-transform hover:scale-105 duration-500 ease-in-out cursor-pointer"
          style={{ backgroundImage: "url('/images/misc/SOC.png')" }}
        >
          <div>
            <h3 className="text-xl">
              SOCIAL <br /> Social Events
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
