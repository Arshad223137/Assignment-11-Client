import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-rfrom-base-200 to-base-300 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest articles, insights, and updates delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto flex-1"
          />
          <button className="btn btn-primary px-8">Subscribe</button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
