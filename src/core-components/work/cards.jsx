import {
  EducationNotesIcon,
  BussinessGrowthIcon,
  UserInterfaceIcon,
  DeviceIcon,
} from "../../Shared/svg";

const ProcessCard = () => {
  return (
    <div className=" flex flex-col gap-5 tb:flex-row md:w-1/2">
      <div className=" flex flex-col items-center gap-5">
        <div className=" flex flex-col  bg-white p-6 rounded-md h-[230px] card-shadow">
          <EducationNotesIcon />
          <h3 className=" text-[#132238] font-semibold mt-3">1. Research</h3>
          <p className=" mt-3">
            Lorem ipsum dIolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col  bg-white p-6 rounded-md h-[230px]">
          <BussinessGrowthIcon />
          <h3 className=" text-[#132238] font-semibold mt-3">2. Analyze </h3>
          <p className=" mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-5 mt-3">
        <div className=" flex flex-col  bg-white p-6 rounded-md h-[230px]">
          <UserInterfaceIcon />
          <h3 className=" text-[#132238] font-semibold mt-3">3. Design</h3>
          <p className=" mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" flex flex-col  bg-white p-6 rounded-md h-[230px]">
          <DeviceIcon />
          <h3 className=" text-[#132238] font-semibold mt-3">4. Launch</h3>
          <p className=" mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
