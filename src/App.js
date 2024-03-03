import About from "./core-components/about/about";
import Blog from "./core-components/blog/blog";
import Hero from "./core-components/hero/hero";
import Portfolio from "./core-components/portfolio/portfolio";
import Process from "./core-components/work/work-process";
import Navbar from "./layout/navigation/navbar";

const App = () => {
  return (
    <div className="tb:bg-body min-h-screen bg-[length:95%] bg-[top_400px_left_500px] pb-20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Portfolio />
        <Blog />
      </main>
    </div>
  );
};

export default App;
