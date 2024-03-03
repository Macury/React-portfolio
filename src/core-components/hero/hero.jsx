import Button from "../../Shared/buttons/button";
import Wrapper from "../../Shared/wrapper";
import StatCardHolder from "./components/statcard";
import avatar from "../../assets/images/avatar.png";
const Hero = () => (
  <section id="home">
    <div className="flex items-center min-h-screen pt-28">
      <Wrapper>
        {/* content */}
        <div className=" md:grid grid-cols-4 gap-4 items-center justify-center ">
          <div className=" col-span-2 flex flex-col mx-auto md:mx-0 max-w-[500px] md:max-w-[initial]   ">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="font-[600] text-5xl text-[#132238]">
                Hello, I'm
                <br /> Macury Mark
              </h1>
              <p className="mt-6 mb-6 text-[#556070]">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <Button buttonText="Say hello" />
            </div>
            <div className="">
              <StatCardHolder />
            </div>
          </div>
          <div className="hidden  col-span-2 md:flex justify-end">
            <img className="w-[74%] rounded-md" src={avatar} alt="Avatar" />
          </div>
        </div>
      </Wrapper>
    </div>
  </section>
);

export default Hero;
