import Wrapper from "../../Shared/wrapper";
import i from "../../assets/images/i.png";
import ii from "../../assets/images/ii.png";
import iii from "../../assets/images/iii.png";
import iv from "../../assets/images/iv.png";

const cardImages = [{ src: i }, { src: ii }, { src: iii }, { src: iv }];

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
              22 Oct, 2020 / 246 Comments
            </span>
            <h3 className="text-[#132238] font-semibold">
              Lorem ipsum dolor sit consea. Nulla purus arcu
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

const Blog = () => {
  return (
    <section id="blog">
      <div className="w-full py-20">
        <Wrapper>
          <div>
            <div className=" flex flex-col gap-5 items-center text-center mb-10">
              <h2 className=" font-bold text-4xl text-[#132238]">Blog</h2>
              <p className="text-[#87909D] max-w-[500px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className=" flex flex-col items-center gap-14 ">
              <div className="grid tb:grid-cols-2 md:grid-cols-4 gap-5">
                <Card />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Blog;
