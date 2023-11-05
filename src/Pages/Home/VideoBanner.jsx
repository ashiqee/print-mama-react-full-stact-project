import Slider from "./Slider";
import { AiFillPrinter, AiTwotoneNotification } from "react-icons/Ai";

const VideoBanner = () => {
  return (
    <div className="border bg-gray-700">
      <div>
        <video
          className="object-cover  min-h-screen w-full  opacity-90  absolute -z-1 top-0  "
          src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/10/Home-1-Slider-Bg-Vid.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="lg:bg-gradient-to-r bg-gradient-to-l relative z-0 top-0 h-screen opacity-60 from-[#EB9B80] rounded-b-2xl to-orange-200 shadow-2xl bg-opacity-10 "></div>
      <div>
        <div className="absolute z-50 flex lg:w-1/3 w-full py-2   md:-left-0 lg:left-[180px] top-[100px]  md:top-[200px]   rounded-xl">
          <div className="space-y-4 mx-2 md:mx-20">
            <h2>DIGITAL PRINTING SERVICE</h2>{" "}
            <AiFillPrinter className="text-6xl text-secondary text-left" />
            <h2 className="text-3xl font-bold">
              Truly Inspired Personal & Promotional Gifts
            </h2>
            <p className="hidden md:block">
              Morbi at faucibus nunc. Vivamus rhoncus placerat rhoncus. Cras et
              magna magna. Proin a erat commodo, pretium diam id, volutpat
              lacus. Vestibulum mattis rutrum mauris.
            </p>
            <div className="flex">
              <input
                className="border-1 border-blue-400 block h-12 w-full rounded-md border border-double
                border-transparent bg-transparent 
               bg-base-100,linear-gradient(to_right,#334454,#334454)]
               	bg-origin-border px-3 py-2 text-slate-200 transition-all 
              duration-500 [background-clip:padding-box,_border-box]
               placeholder:text-slate-500 
               focus:bg-[linear-gradient(#000,#000),
                linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                className="text-2xl btn bg-secondary border-none"
                type="submit"
                name=""
                id=""
              >
                <AiTwotoneNotification />
              </button>
            </div>
          </div>
        </div>
        <div
          className="relative z-0 flex lg:w-1/3  w-full md:hidden 
        lg:block md:-left-0 lg:left-[900px] -top-[550px] md:-top-[800px]   rounded-xl"
        >
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
