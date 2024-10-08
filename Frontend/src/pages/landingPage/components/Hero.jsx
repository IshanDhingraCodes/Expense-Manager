import { Expense } from "../assets";
function Hero() {
  return (
    <>
      <div className="container md:flex items-center justify-around md:py-20 py-10 ">
        <div className=" w-full flex flex-col md:items-start items-center md:mr-10 mt-5">
          <p className=" bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-lg text-gray-300 p-2 rounded-xl mb-5">
            “Simplify Your Spending Today”
          </p>
          <h1 className="text-gray-300 font-bold lg:text-7xl md:text-6xl text-4xl md:text-justify text-center mb-5">
            Take <span className="text-emerald-500">Control</span> Of Your{" "}
            <span className="text-emerald-500">Finances!</span>
          </h1>
          <p className="text-white md:text-justify text-center">
            “Easily track, manage, and optimize your spending with our
            user-friendly Website.”
          </p>
        </div>
        <div className="w-full md:ml-10 ">
          <img src={Expense} alt="Expense" className="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
