import useDarkMode from "../hooks/useDarkMode";
import { FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const TopNavigation = () => {
    return (
        <div className="top-navigation">
            <div className="top-nav-left">
                <HashtagIcon />
                <Title />
            </div>
            <div className="top-nav-right">
                <ThemeIcon />
                <Search />
                <BellIcon />
                <UserCircleIcon />
            </div>

        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleTheme = () => setDarkTheme(!darkTheme);

    return (
        <span onClick={handleTheme}>
            {darkTheme ? (
                <FaSun size={24} className="top-navigation-icon" />
            ) : (
                <FaMoon size={24} className="top-navigation-icon" />
            )}
        </span>
    );
}

const Search = () => {
    return (
        <div className="search">
            <input type="text" className="search-input" placeholder="search something..." />
            <FaSearch size={18} className="search-icon text-secondary my-auto" />
        </div>
    );
};

const BellIcon = () => <FaRegBell size={24} className="top-navigation-icon" />;
const HashtagIcon = () => <FaHashtag size={20} className="title-hashtag" />;
const UserCircleIcon = () => <FaUserCircle size={24} className="top-navigation-icon" />;
const Title = () => <h5 className="title-text">javascript</h5>;

export default TopNavigation;