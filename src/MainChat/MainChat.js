import Menubar from "../MenuBar/MenuBar_Admin";
import ChatArea from "./ChatArea";
import InboxArea from "./InboxArea";
import Card from '@mui/material/Card';
import HomeChat from "./HomeChat";


function MainChat() {

    const ContainerStyle = {
        display : 'flex',
        flexDirect : 'row'
      }

    return(
        <span class = "main" style={ContainerStyle}>
            <Menubar />
            

 {/** 
            <Card sx={{ maxWidth: 850 ,
            mt : 2 ,
            ml : 3 ,
            pt : 2 ,
            pl : 2 , 
          }}>
            <InboxArea />   
          </Card>

          <Card sx={{ maxWidth: 850 ,
            mt : 2 ,
            ml : 3 ,
            pt : 2 ,
            pl : 2 , 
          }}>
              <ChatArea />
          </Card>





          */} 

          <HomeChat />
        </span>
        
    )
}



export default MainChat;