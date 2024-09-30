import ArrowUpRight from "@/assets/icons/ArrowUpRight";
import grainImage from "@/assets/images/grain.jpg";

function Contact() {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src}`,
            }}
          ></div>
          <div className="md:flex md:felx-col md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 md:w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight classname="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
