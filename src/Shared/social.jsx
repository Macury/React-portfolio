import {
  BasketballIcon,
  BeIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./svg";

const Social = () => {
  return (
    <div className="flex items-center bg-white p-1 scale-95 absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md">
      <FacebookIcon />
      <BasketballIcon />
      <InstagramIcon />
      <LinkedinIcon />
      <BeIcon />
    </div>
  );
};

export default Social;
