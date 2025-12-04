import { useEffect, useState } from "react";

const AddedBlog = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleString());
    }, 1000);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const shortDP = form.shortDP.value;
    const longDP = form.longDP.value;
    const time = new Date().toLocaleString([],{
      hour: "2-digit",
      minute: "2-digit",
    });

    const data = { title, image, category, shortDP, longDP, time };
    console.log(data);
  };

  return (
    <section className="py-16 bg-base-200 min-h-screen">
      <div className="max-w-3xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-8">
          Add <span className="text-primary">New</span> Blog {time}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 md:p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Title Input */}
          <div>
            <label className="font-semibold">Blog Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="input input-bordered w-full outline-none focus:border-blue-300"
              name="title"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold">Blog Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="input input-bordered w-full outline-none focus:border-blue-300"
              name="image"
            />
          </div>

          {/* Category */}
          <div className="">
            <label className="font-semibold ">Category</label>
            <select
              name="category"
              className="select select-bordered w-full outline-none focus:border-blue-300"
            >
              <option value="">Select a category</option>
              <option>Technology</option>
              <option>Education</option>
              <option>Programming</option>
              <option>Lifestyle</option>
            </select>
          </div>

          {/* Short Description */}
          <div>
            <label className="font-semibold">Short Description</label>
            <textarea
              maxLength={90}
              placeholder="Write short description"
              className="textarea textarea-bordered w-full outline-none focus:border-blue-300"
              rows="2"
              name="shortDP"
            ></textarea>
          </div>
          {/* Full Description */}
          <div>
            <label className="font-semibold">Short Description</label>
            <textarea
              maxLength={1300}
              placeholder="Write full description"
              className="textarea textarea-bordered w-full outline-none focus:border-blue-300"
              rows="6"
              name="longDP"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full text-lg">Add Blog</button>
        </form>
      </div>
    </section>
  );
};

export default AddedBlog;
