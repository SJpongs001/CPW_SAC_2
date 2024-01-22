import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';


export default function MenuList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section>
    <List class = "Menu"
      sx={{ width: '100%', height: '100%',
      maxWidth: 160 , 
      bgcolor: 'rgb(39, 38, 38)' , 
       mr:1 , pl: 1 , pr:3 , pt:1    
    }} 
    >
       <div>
       <ListItemButton sx={{ pt:1 , ml:1 , mr:2 }}>
          <a id="MenuLogo">
            <img class="icon" alt="inbox" src="./Picture/Logo-inbox.png"/>
          <br/>กล่องข้อความ<br/></a>
       </ListItemButton>

       <ListItemButton sx={{ pt:1 , ml:1 , mr:2 }}>
          <a id="MenuLogo">
            <img class="icon" alt="inbox" src="./Picture/Logo-dashboard.png"/>
          <br/>ข้อมูลสถิติ<br/></a>
       </ListItemButton>


       <ListItemButton sx={{ pt:1 , ml:1 , mr:2 }}>
          <a id="MenuLogo">
            <img class="icon" alt="inbox" src="./Picture/Logo-setpermisstion.png"/>
          <br/>จัดการผู้ใช้</a>
       </ListItemButton>


       <ListItemButton sx={{ pt:1 , ml:1 , mr:2 }}>
          <a id="MenuLogo">
            <img class="icon" alt="inbox" src="./Picture/Logo-editUI.png"/>
            <br/>แก้ไขส่วน UI</a>
       </ListItemButton>

       <ListItemButton sx={{ pt:1 , ml:1 , mr:2 }}>
            <a id="ActLogo">
              <img class="acticon" alt="inbox" src="./Picture/Logo-people.png"/>
            <p align = "center">บัญชีผู้ใช้</p>
            </a>
       </ListItemButton>
       </div>
    </List>
    </section>
  );
}



