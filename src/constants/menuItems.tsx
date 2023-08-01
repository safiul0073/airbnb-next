
import HomePage from '@/components/pages/homePage'
import {
    FiUmbrella,
    FiRewind,
    FiMoreHorizontal,
    FiAtSign,
    FiActivity,
    FiPocket,
    FiCalendar,
    FiCamera,
    FiBluetooth,
    FiBold,
    FiChrome,
    FiCodepen,
    FiFilm,
    FiFramer,
    FiGift,
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
        title: "CountrySide",
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
    },
    {
        title: "Camera",
        category: "camera",
        page: <HomePage/>,
        icon: <FiCamera/>
    },
    {
        title: "Lake",
        category: "lake",
        page: <HomePage/>,
        icon: <FiBluetooth/>
    },
    {
        title: "Skiing",
        category: "skiing",
        page: <HomePage/>,
        icon: <FiBold/>
    },
    {
        title: "Castles",
        category: "castles",
        page: <HomePage/>,
        icon: <FiChrome/>
    },
    {
        title: "Camping",
        category: "camping",
        page: <HomePage/>,
        icon: <FiCodepen/>
    },
    {
        title: "Caves",
        category: "caves",
        page: <HomePage/>,
        icon: <FiFilm/>
    },
    {
        title: "Camping",
        category: "camping",
        page: <HomePage/>,
        icon: <FiFramer/>
    },
    {
        title: "Arctic",
        category: "arctic",
        page: <HomePage/>,
        icon: <FiGift/>
    }
]