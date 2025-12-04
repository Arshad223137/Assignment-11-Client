import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const blog = data.find((b) => b.id === parseInt(id));

  if (!blog) return <div>Blog not found!</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto my-10">
      <img src={blog.image} alt={blog.title} className="rounded mb-4 w-full h-96 object-cover" />
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="mb-2">
        <strong>Category:</strong> {blog.category}
      </p>
      <p>{blog.longDescription}</p>
      <p className="mt-2 text-sm text-gray-500">Created: {blog.creationTime}</p>
    </div>
  );
};

export default Details;
