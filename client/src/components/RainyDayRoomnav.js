import { Link } from "react-router-dom";
import '../styles/App.css'

// rainy day room chat room navigation

export default function RainyDayRoomNav(props) {
    return(
        <>
        <div id="nav-wrapper">
            <ul id="nav">
                <li>
                    <Link to="/blight-room-chat">
                        Blight Room Chat
                    </Link>
                </li>
                <li>
                    <Link to="/christmas-room-chat">
                        Christmas Room Chat
                    </Link>
                </li>
                <li>
                    <Link to="/rainy-day-room-chat">
                        Rainy Day Room Chat
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}