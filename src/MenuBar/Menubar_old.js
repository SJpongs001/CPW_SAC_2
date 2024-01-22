import * as React from 'react';
import { Link } from 'react-router-dom';
function MenubarOld() {
    return(
        <div>
        <span>
            <span class="Menu">
            <ul>
                <Link to="/">
                <a id="MenuLogo">
                <img class="icon" alt="inbox" src="./Picture/Logo-inbox.png"/>
                <br/>กล่องข้อความ<br/>
                </a></Link>
                
                <Link to="/dashboard">
                <a id="MenuLogo">
                <img class="icon" alt="inbox" src="./Picture/Logo-dashboard.png"/>
                <br/>ข้อมูลสถิติ<br/></a></Link>

                <Link to="/setpermisstion">
                <a id="MenuLogo">
                <img class="icon" alt="inbox" src="./Picture/Logo-setpermisstion.png"/>
                <br/>จัดการผู้ใช้</a></Link>

                <Link to="/FAQcrud">
                <a id="MenuLogo">
                <img class="icon" alt="inbox" src="./Picture/Logo-FAQ.png"/>
                <br/>
                คำถามพบบ่อย</a></Link>

                <Link to="/account">
                <a id="MenuLogo">
                <img class="icon" alt="inbox" src="./Picture/Logo-people.png"/>
                <br/>
                บัญชีผู้ใช้</a></Link>
                
            </ul>
            </span>     
        </span>
       </div>
        )
    }
    
    export default MenubarOld;


