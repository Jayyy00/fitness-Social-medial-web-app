import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import NotificationIcon from "@mui/icons-material/Notifications"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
import MessageIcon from '@mui/icons-material/Message';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home"

    },
    {
        title:"Explore",
        icon:<ExploreIcon/>,
        path:"/explore"

    },
    {
        title:"Workout",
        icon:<FitnessCenterIcon/>,
        path:"/workout"

    },
    {
        title:"Meal Plans",
        icon:<MenuBookIcon/>,
        path:"/Recipes"

    },
    {
        title:"Notifications",
        icon:<NotificationIcon/>,
        path:"/notification"

    },
    {
        title:"Messages",
        icon:<MessageIcon/>,
        path:"/messages"

    },
    {
        title:"Lists",
        icon:<ListAltIcon/>,
        path:"/list"

    },
    {
        title:"Commiuninities",
        icon:<GroupIcon/>,
        path:"/communities"

    },
  
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"

    },
    {
        title:"More",
        icon:<PendingIcon/>,
        path:"/more"

    },
    
    

]

