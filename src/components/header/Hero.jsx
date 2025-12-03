const Hero = () => {
  return (
    <div className="hero min-h-[80vh] bg-gradient-to-rfrom-base-200 to-base-300">
      <div className="hero-content flex-col md:flex-row-reverse gap-10">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="max-w-sm lg:max-w-md w-full rounded-2xl shadow-xl object-cover"
          alt="Banner"
        />

        <div className="max-w-xl">
          <p className="px-3 py-1 rounded-full bg-primary text-white w-max text-sm mb-4">
            Welcome to Our Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Trending <span className="text-primary">Tech Stories</span>{" "}
            & Creative Insights
          </h1>

          <p className="py-6 text-base md:text-lg text-gray-600">
            Stay updated with the latest articles on technology, lifestyle,
            design, travel, and more. Explore high-quality content crafted to
            inspire, educate, and guide you.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-primary px-6">Explore Blogs</button>
            <button className="btn btn-outline px-6">Latest Posts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
