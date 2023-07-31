
import HomePage from '@/components/pages/homePage'
import {
    FiUmbrella,
    FiRewind,
    FiMoreHorizontal,
    FiAtSign,
    FiActivity,
    FiPocket,
    FiCalendar,
    FiCamera
} from 'react-icons/fi'

export const menuItems = [
    {
        title: "Beach",
        category: "beach",
        icon: <FiUmbrella/>,
        page: <HomePage />
    },
    {
        title: "Windmill",
        category: "windmill",
        page: <HomePage/>,
        icon: <FiRewind/>
    },
    {
        title: "Country Side",
        category: "country-side",
        page: <HomePage/>,
        icon: <FiMoreHorizontal/>
    },
    {
        title: "Pool",
        category: "pool",
        page: <HomePage/>,
        icon: <FiAtSign/>
    },
    {
        title: "Activity",
        category: "activity",
        page: <HomePage/>,
        icon: <FiActivity/>
    },
    {
        title: "Rocket",
        category: "rocket",
        page: <HomePage/>,
        icon: <FiPocket/>
    },
    {
        title: "Calendar",
        category: "calender",
        page: <HomePage/>,
        icon: <FiCalendar/>
    }
    ,
    {
        title: "Camera",
        category: "camera",
        page: <HomePage/>,
        icon: <FiCamera/>
    }
]