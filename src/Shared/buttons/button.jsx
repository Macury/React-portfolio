const Button = ({ buttonText }) => (
  <button className="bg-purple text-white font-normal px-4 py-2 rounded w-fit text-xs">
    {buttonText}
  </button>
);

export default Button;

export const IconButton = ({ buttonText, svg }) => {
  console.log(svg);
  return (
    <button className="bg-purple text-white font-normal px-4 py-2 rounded w-fit text-xs flex items-center gap-4">
      {buttonText} <span className="">{svg}</span>
    </button>
  );
};
