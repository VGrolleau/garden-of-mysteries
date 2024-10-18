import Footer from "./components/Footer.js";
import Story from "./story/page.js";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <Story />

      <Footer />
    </div>
  );
};

export default Home;
