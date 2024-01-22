export default function Search() {
    return(
        <div className="search">
            <div className="searchForm">
                <input className="input" type="text" placeholder="ค้นหารายขื่อผู้ติดต่อ"/>
            </div>

            <div className="userChat">
                <img class="ProfilePicture" alt="inbox" src="./Picture/SJprofile.jpg"/>
            <div className="userChatInfo"></div>
                <span>Apple Smooth</span>
            </div>
            
        </div>
    )
}