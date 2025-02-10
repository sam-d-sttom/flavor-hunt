import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { BsCollectionFill } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";

export const Nav = () => {
    return (
        <nav className="w-full sm:w-[400px] h-[35px] fixed bottom-0 left-1/2 -translate-x-1/2 bg-neutral-300 rounded-t-lg"
            aria-label="Main navigation">
            <ul className="flex justify-around items-center h-full">
                <li title="Home" className="cursor-pointer">
                    <a href="#home">
                        <IoHome />
                    </a>
                </li>
                <li title="Explore" className="cursor-pointer">
                    <a href="#explore">
                        <MdExplore />
                    </a>
                </li>
                <li title="News" className="cursor-pointer">
                    <a href="#news">
                        <FaNewspaper />
                    </a>
                </li>
                <li title="Collections" className="cursor-pointer">
                    <a href="#collections">
                        <BsCollectionFill />
                    </a>
                </li>
                <li title="Create" className="cursor-pointer">
                    <a href="#create">
                        <IoCreate />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;