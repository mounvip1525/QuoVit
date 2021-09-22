import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import add from "./img/add.png";
import logout from "./img/Logout.png";
import notifications from "./img/notifications.png";
import profile from "./img/profile.png";
import save from "./img/save.png";
import "./css/Sidebar.css";
import { Add } from "@material-ui/icons";

export default function Sidebar() {
  const history = useHistory();
    const [selected,setSelected] = useState(0);
    const handleClick = (id,link) => {
        setSelected(id)
        history.push(link)
    }
    const buttons = [
        {
            id:1,
            name:"Saved Posts",
            img:save,
            link:"/Saved"
        },
        {
            id:2,
            name:"Notifications",
            img:notifications,
            link:"/Notifications"
        },
        {
            id:3,
            name:"Your Profile",
            img:profile,
            link:"/Profile"
        },
    ]
  return (
    <div className="sidebar-main">
      <button>
        Ask your Question <Add className="side-add"/>
      </button>
      <div>
        {buttons.map(btn=>(
            <button onClick={()=>handleClick(btn.id,btn.link)} className={btn.id === selected ? "side-selected" : ""}>
                <img src={btn.img} alt={btn.name} />
                {btn.name}
            </button>
        ))}
      </div>
      <button>
        Logout <img src={logout} alt="logout" />
      </button>
    </div>
  );
}
