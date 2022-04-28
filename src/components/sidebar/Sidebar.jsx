import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

    const{dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>
                            Dashboard
                        </span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>
                                Users
                            </span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StorefrontOutlinedIcon className="icon" />
                            <span>
                                Product
                            </span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className="icon"/>
                        <span>
                            Order
                        </span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon"/>
                        <span>
                            Delivery
                        </span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartOutlinedIcon className="icon"/>
                        <span>
                            Stats
                        </span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <span>
                            Notifications
                        </span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                       <CloudCircleOutlinedIcon className="icon"/> 
                        <span>
                            System Health
                        </span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>
                            Settings
                        </span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>
                            Profile
                        </span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
                
            </div>
        </div>
    )
}
export default Sidebar