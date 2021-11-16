import { Link } from "react-router-dom";

// Nav files for respective rooms should display clickable link buttons to the other rooms that the user is not currently in so they may 'navigate' to those other rooms from current room

export default function MainRoomNavigation (props) {
    return(
        <div id = "main-room-navigation-wrapper">
            <ul id = "navigational-links">
                <h4>Click to enter another chat room</h4>
                <li>
                    <Link to = "/blight-town-room">Blight Town Chat Room</Link>
                </li>
                <li>
                    <Link to = "/christmas-room">Christmas Chat Room</Link>
                </li>
                <li>
                    <Link to = "/rainy-day-room">Rainy Day Room</Link>
                </li>
            </ul>

        </div>
    );
};