import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './ChatStyle.css'
import Menubar from "../MenuBar/MenuBar_Admin";

const ContainerStyle = {
    display : 'flex',
    flexDirect : 'row'
  }

export default function HomeChat () {
    return(
        <div>
            <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
        </div>
        
    )
}