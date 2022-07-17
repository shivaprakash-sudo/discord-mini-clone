import TopNavigation from '../components/TopNavigation';
import { BsPlusCircleFill } from "react-icons/bs";

const postDetails = [
    {
        name: "Shiva",
        timeStamp: "1 week ago",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ullam, iste sequi quis cum accusantium quam odit. Accusamus accusantium magni voluptas nostrum fugiat perspiciatis blanditiis eius, deleniti sunt temporibus. Dolorem!
        Ad amet ullamco et aliqua minim deserunt aliqua exercitation non culpa adipisicing. Minim culpa ad officia ipsum officia minim tempor elit consequat. Commodo incididunt magna labore sint ut exercitation proident. Duis incididunt ullamco nulla aliqua cupidatat enim ullamco Lorem mollit enim ad in non. Excepteur occaecat tempor nostrud cupidatat adipisicing.`
    },
    {
        name: "Vishnu",
        timeStamp: "3 days ago",
        text: "Nisi exercitation irure consectetur anim anim nostrud ex."
    },
    {
        name: "Sam",
        timeStamp: "1 day ago",
        text: "Quis proident amet ut elit dolore eiusmod."
    },
    {
        name: "Son I",
        timeStamp: "15 hours ago",
        text: "Lorem quis ut."
    },
    {
        name: "Niketh",
        timeStamp: "3 hours ago",
        text: "Quis ipsum tempor sunt consectetur aliquip aliquip qui laboris consectetur."
    },
    {
        name: "Jay",
        timeStamp: "1 hour ago",
        text: "Qui magna sit."
    },
    {
        name: "Ben",
        timeStamp: "30 minutes ago",
        text: "Quis proident amet ut elit dolore eiusmod."
    },
    {
        name: "Augustine",
        timeStamp: "20 minutes ago",
        text: "Lorem quis ut."
    },
    {
        name: "Sara",
        timeStamp: "few seconds ago",
        text: "Quis ipsum tempor sunt consectetur aliquip aliquip qui laboris consectetur."
    },
    {
        name: "Sid",
        timeStamp: "just now",
        text: "Qui magna sit."
    }
];

const Content = () => {
    return (
        <div className="w-full h-auto bg-gray-300 dark:bg-gray-700 dark:text-white">
            <TopNavigation />
            <div className="mt-6 mx-8">
                {postDetails.map(postDetail => (
                    <Post
                        name={postDetail.name}
                        timeStamp={postDetail.timeStamp}
                        text={postDetail.text} />
                ))}
            </div>
            <MessageBox />
        </div>
    );
};

const Post = ({ name, timeStamp, text }) => {
    const randomSeed = Math.floor(Math.random() * 1000);
    return (
        <div className="flex gap-4 post my-6">
            <img src={`https://avatars.dicebear.com/api/adventurer/${randomSeed
                }.svg`} className="w-12 h-12 rounded-full shadow-lg bg-gray-400 dark:bg-gray-400" alt="avatar" />
            <div>
                <span className='hover:cursor-pointer hover:underline'>{name}</span>
                <small className="text-gray-500 ml-2">{timeStamp}</small>
                <p>{text}</p>
            </div>
        </div>
    );
};

const MessageBox = () => {
    return (
        <div className="fixed flex items-center w-full bottom-3">
            <PlusIcon />
            <div className="search h-12">
                <input type="text" placeholder="type a message..." className="pl-4 dark:text-gray-400 search-input" />
            </div>
        </div>
    );
};

const PlusIcon = () => {
    return (
        <BsPlusCircleFill size={24} className="text-green-500 mx-2 cursor-pointer" />
    );
};

export default Content;