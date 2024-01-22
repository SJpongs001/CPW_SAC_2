import * as React from 'react';

import Menubar from "../MenuBar/MenuBar_Admin"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import FAQ02 from './FAQ02';



export default function FAQcrudA2() {


    const ContainerStyle = {
        display : 'flex',
        flexDirect : 'row'
      }

      const [value, setValue] = React.useState('1');

      const handleChange = (event, newValue) => {
            setValue(newValue);
      };




    return(
        <div className="bg">
            <span class = "main" style={ContainerStyle}>
            {/* <Menubar />  */}
        <aside>
          <div>
            <Typography gutterBottom variant="h5" component="div" sx={{p:5}}>
            Frequently Asked Questions: FAQ
            <Typography variant="body2" color="text.secondary" sx={{ mt:3}}>
            ข้อความที่พบบ่อยในเเต่ละหน่วยงาน
            </Typography>
            </Typography>


            <Box sx={{ width: '80%', typography: 'body1'  }}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="โภชนาการ / สกรณ์" value="2" />
                    </TabList>
                        <TabPanel value="2"><FAQ02 /></TabPanel>
                </TabContext>
            </Box>
          </div>
             
    </aside>    
    </span>
            
        </div>
    )
}