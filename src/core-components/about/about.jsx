import Button from "../../Shared/buttons/button";
import StrokeButton from "../../Shared/buttons/stroke-button";
import Social from "../../Shared/social";
import Wrapper from "../../Shared/wrapper";
import avatar2 from "../../assets/images/avatar2.png";
const About = () => {
  return (
    <section id="about">
      <div className=" mt-10">
        <Wrapper>
          <div className="relative bg-white flex flex-col items-center gap-[100px] tb:p-[100px] project-shadow rounded-md md:flex-row">
            <div className="relative">
              <img className="w-full" src={avatar2} alt="Avatar" />
              <Social />
            </div>
            <div className="">
              <div className=" mx-auto max-w-[600px]">
                <h2 className=" font-semibold text-4xl leading-[1.3] text-[#132238]">
                  I am Professional User Experience Designer
                </h2>
                <p className=" mt-2 text-[#556070]">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences.
                </p>
                <p className="mt-4 mb-4 text-[#556070]">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services.
                </p>
              </div>
              <div className=" flex gap-4 ">
                <Button buttonText="My Project" />
                <StrokeButton buttonText="Download CV" download={true} />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default About;
