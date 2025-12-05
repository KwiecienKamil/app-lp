import { AiOutlineOrderedList } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa";
import appVideo1 from "../assets/AppVideo1.mp4"

export const appVideos = [
    {
        id: 1,
        title: "Porządek",
        desc: "Przechowuj swoje egzaminy w jednym miejscu",
        icon: <AiOutlineOrderedList />,
        video: appVideo1
    },
    {
        id: 2,
        title: "Dostęp",
        desc: "Przechowuj swoje egzaminy w jednym miejscu",
        icon: <FaClipboardCheck />,
        video: appVideo1,
    },
    {
        id: 3,
        title: "AI",
        desc: "Przechowuj swoje egzaminy w jednym miejscu",
        icon: <BsRobot />,
        video: appVideo1,
    },
]