import React from "react";

const Ready = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 text-white text-center">
      <div className=" px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Transform Your Workflow?
        </h2>

        <p className="text-[16px] text-purple-100 mb-2">
          Join thousands of professionals who are already using Digitools to
          work smarter.
        </p>
        <p className="text-[16px] text-purple-100 mb-10">
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button className="bg-white text-purple-700 font-semibold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-all duration-300 text-lg">
            Explore Products
          </button>

          <button className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300 text-lg">
            View Pricing
          </button>
        </div>

        <p className="text-[16px] text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Ready;
