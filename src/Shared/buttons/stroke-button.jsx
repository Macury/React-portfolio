import { ArrowIcon, DownloadIcon } from "../svg";

const StrokeButton = ({ download = false, buttonText, arrow = false }) => (
  <button className="flex items-center gap-2 border border-purple text-purple font-semibold px-4 py-2.5 rounded w-fit text-sm">
    {download && (
      <span className="">
        <DownloadIcon />
      </span>
    )}
    <span>{buttonText}</span>
    {arrow && (
      <span className="">
        <ArrowIcon color="#A53DFF" />
      </span>
    )}
  </button>
);

export default StrokeButton;
