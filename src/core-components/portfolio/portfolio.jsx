import Wrapper from "../../Shared/wrapper";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import fourth from "../../assets/images/fourth.png";
import fifth from "../../assets/images/fifth.png";
import sixth from "../../assets/images/sixth.png";
import Button, { IconButton } from "../../Shared/buttons/button";
import StrokeButton from "../../Shared/buttons/stroke-button";
import { ArrowIcon } from "../../Shared/svg";

const cardImages = [
  { src: first },
  { src: second },
  { src: third },
  { src: fourth },
  { src: fifth },
  { src: sixth },
];

const Card = () => {
  return (
    <>
      {cardImages.map((items, index) => (
        <div
          className="flex flex-col rounded-md border border-black/10"
          key={index}
        >
          <img src={items.src} alt="" />
          <div className="p-4">
            <span className="text-[#87909D] font-medium text-xs ">
              Web development Practice
            </span>
            <h3 className="text-[#132238] font-semibold">
              Product Admin Dashboard
            </h3>
            <p className="text-[#556070] mt-3 mb-3">
              Vivamus eleifend convallis ante, non pharetra libero molestie
              laoreet. Donec id imperdiet lacus.
            </p>
            <StrokeButton buttonText="Case Study" arrow={true} />
          </div>
        </div>
      ))}
    </>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="py-20">
        <Wrapper>
          <div>
            <div className=" flex flex-col gap-5 items-center text-center mb-10">
              <h2 className=" font-bold text-4xl text-[#132238]">Portfolio</h2>
              <p className="text-[#87909D] max-w-[500px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className=" flex flex-col items-center gap-14 ">
              <div className="grid tb:grid-cols-2 md:grid-cols-3 gap-5">
                <Card />
              </div>
              <Button buttonText="More Projects" />
            </div>
          </div>
        </Wrapper>
        <div className="bg-[#132238] w-full py-20 mt-20">
          <Wrapper>
            <div className="  text-center max-w-[400px] mx-auto">
              <h2 className="text-white font-semibold text-3xl">
                Do you have Project Idea? Let's discuss your project!
              </h2>
              <p className=" text-[#A5ACB5] mt-3 mb-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <div className="flex justify-center">
                <IconButton
                  buttonText="Let’s work Together"
                  svg={<ArrowIcon color="white" />}
                />
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
