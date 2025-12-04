import { useEffect, useState } from "react";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          All<span className="text-primary">-</span>Blogs
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">
                    {blog.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.shortDescription}</p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <button className="btn btn-sm btn-primary">Details</button>
                  <p>{blog?.creationTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
