import RecentBlog from "../blogs/RecentBlog";
import Hero from "../header/Hero";
import NewsLetter from "../newsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentBlog />
      <NewsLetter />
    </div>
  );
};

export default Home;
