import Slider from "./Slider";
import { AiFillPrinter, AiTwotoneNotification } from "react-icons/Ai";

const VideoBanner = () => {
  return (
    <div >
   

      <div className="lg:bg-gradient-to-l bg-gradient-to-l relative z-0 top-0 h-screen 
      bg-opacity-20 hero-overlay from-[#9080eb] rounded-b-2xl to-gray-800 shadow-2xl  ">

      <div className="mx-auto">
        <div className="relative overflow-hidden  z-50 md:flex   w-full py-2  
           rounded-xl">
          <div className="space-y-4 md:text-left text-center mx-2  mt-20 md:mx-10">
            <h2>DIGITAL PRINTING SERVICE</h2>{" "}
            <AiFillPrinter className="text-6xl mx-auto md:mx-0 text-secondary " />
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
                className="border-2 border-blue-400 block h-12 w-full rounded-md  border-double
                border-transparent bg-transparent 
               bg-base-100,linear-gradient(to_right,#334454,#334454)]
               	bg-origin-border px-3 py-2 text-slate-200 transition-all 
              duration-500 "
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
         <div className="w-1/2  mx-auto object-cover">

         <Slider />
         </div>
        </div>
        {/* <div
          className="relative z-0 flex lg:w-1/3  w-full md:hidden 
        lg:block md:-left-0 lg:left-[900px] -top-[550px] md:-top-[800px]   rounded-xl"
        >
          <Slider />
        </div> */}
      </div>

      </div>

      <div>
        <video
          className="object-cover overflow-hidden  min-h-screen w-full  opacity-90   -z-1 top-0  "
          src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/10/Home-1-Slider-Bg-Vid.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      
    </div>
  );
};

export default VideoBanner;