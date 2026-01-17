import XSvg from "../svgs/X";

import { MdHomeFilled } from "react-icons/md"
import { IoNotifications } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const data = {
        fullName: "John Doe",
        username: "johndoe",
        profileImg: "/avatars/boy1.png"
    };

    return (
        <div className="md:flex-[2_2_0] w-18 max-w-52">
            <div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full">
                <Link to="/" className="flex justify-center md:justify-start">
                    <XSvg className="px-2 w-12 h-12 rounded-full fill-white hover:bg-stone-900" />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar