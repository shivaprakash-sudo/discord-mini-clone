import { FaDiscord, FaBook, FaCode, FaPlus } from 'react-icons/fa';
import { MdPerson } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="flex flex-col fixed top-0 left-0 h-screen w-16 m-0 bg-white dark:bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaDiscord size={28} />} text="Dashboard" />
            <hr className="sidebar-hr" />
            <SideBarIcon icon={<FaCode size={28} />} text="Coding" />
            <SideBarIcon icon={<FaBook size={28} />} text="Reading" />
            <SideBarIcon icon={<MdPerson size={28} />} text="Friends" />
            <SideBarIcon icon={<FaPlus size={28} />} text="Add new server" />
        </div>
    );
}

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
        </div>
    );
}


export default SideBar;