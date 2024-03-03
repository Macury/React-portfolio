import Button from "../../Shared/buttons/button";

const MobileNav = ({ links }) => (
  <div className="min-h-screen w-full flex flex-col gap-2 backdrop-blur items-center absolute bg-white/75 pt-24 top-[71px] left-0 text-lg md:hidden">
    {links.map((item, index) => (
      <a className="font-medium" key={index} href={item.ref}>
        {item.name}
      </a>
    ))}
    <div className="pt-3">
      <Button buttonText="Contact" />
    </div>
  </div>
);

export default MobileNav;
