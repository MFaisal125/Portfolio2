import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiDiscordLine,
  RiRedditLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.instagram.com/revenuerocket2/ "}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={" https://www.linkedin.com/in/mabdullah93/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
