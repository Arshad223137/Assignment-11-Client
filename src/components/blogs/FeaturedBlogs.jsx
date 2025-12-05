import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const lengths = blogs
    .map((blog) => blog.longDescription.length)
    .sort((a, b) => b - a)
    .slice(0, 10);

  const matchedBlogs = blogs.filter((blog) =>
    lengths.includes(blog.longDescription.length)
  );

  return (
    <div className="overflow-x-auto">
      <div className="text-center my-4">
        <h1 className="text-2xl font-semibold">
          Top <span className="text-primary">10 </span>LongDescription{" "}
          <span className="text-primary">Blog</span>
        </h1>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No:</th>
            <th>Profile Picture</th>
            <th>Blog Owner</th>
            <th>Blog Title</th>
            <th>Cheak-in</th>
          </tr>
        </thead>
        <tbody>
          {matchedBlogs.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={blog?.ownerProfile}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h4 className="font-bold">{blog?.ownerName}</h4>
              </td>
              <td>
                <p>{blog?.title}</p>
              </td>
              <th>
                <Link
                  to={`/details/${blog.id}`}
                  className="btn bg-primary text-white"
                >
                  Details
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogs;
