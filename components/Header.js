import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute w-full z-10 flex items-center px-1 xl:px-0 xl:h-[80px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={500}
              height={18}
              alt=""
              property={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
