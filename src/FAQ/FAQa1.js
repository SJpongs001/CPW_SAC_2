import * as React from 'react';

import Menubar from "../MenuBar/MenuBar_Admin"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import FAQ01 from "./FAQ01";
import FAQ02 from './FAQ02';
import FAQ03 from './FAQ03';
import FAQ04 from './FAQ04';
import FAQ05 from './FAQ05';


export default function FAQcrudA1() {


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
                  {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="วิชาการและโครงการพิเศษ" value="1" />
                        <Tab label="โภชนาการ / สกรณ์" value="2" />
                        <Tab label="ฝ่ายปกครองและกิจการนักเรียน" value="3" />
                        <Tab label="ธุรการและบัญชี" value="4" />
                        <Tab label="บริการ / สารสนเทศ" value="5" />
                    </TabList>
                  </Box> */}
                        <TabPanel value="1"><FAQ01 /></TabPanel>    
                        {/* <TabPanel value="2"><FAQ02 /></TabPanel>
                        <TabPanel value="3"><FAQ03 /></TabPanel>
                        <TabPanel value="4"><FAQ04 /></TabPanel>
                        <TabPanel value="5"><FAQ05 /></TabPanel> */}
                </TabContext>
            </Box>
          </div>
             
    </aside>    
    </span>
            
        </div>
    )
}