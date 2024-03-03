import Wrapper from "../../Shared/wrapper";
import ProcessCard from "./cards";

const Process = () => {
  return (
    <section id="process">
      <div className="-mt-[100px] bg-[#F0F1F3] pt-48 pb-10 ">
        <Wrapper>
          <div className="flex flex-col gap-8 items-center justify-between md:flex-row">
            <div className=" text-center max-w-[600px] md:text-left md:max-w-[400px]">
              <h2 className=" font-semibold text-4xl leading-[1.3] text-[#132238]">
                Work Process
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
            <ProcessCard />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Process;
