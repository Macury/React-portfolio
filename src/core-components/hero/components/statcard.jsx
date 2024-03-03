const StatCard = ({ bold, normal }) => {
  return (
    <div className="bg-[#EDD8FF] flex flex-col justify-center text-center h-[75px] md:h-[90px] text-[#424E60] rounded">
      <p className="font-semibold text-[20px] md:text-[26px]">{bold}</p>
      <p className="text-[10px] md:text-xs">{normal}</p>
    </div>
  );
};

const statInformation = [
  {
    bold: "15Y.",
    normal: "Experience",
  },
  {
    bold: "250+",
    normal: "Project Completed",
  },
  {
    bold: "58",
    normal: "Happy Clients",
  },
];

const StatCardHolder = () => {
  return (
    <div className="grid grid-cols-3 gap-0.5 mt-20">
      {statInformation.map((info, index) => (
        <StatCard key={index} bold={info.bold} normal={info.normal} />
      ))}
    </div>
  );
};
export default StatCardHolder;
