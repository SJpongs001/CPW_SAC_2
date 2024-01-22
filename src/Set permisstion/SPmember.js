import React from "react";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from "@mui/material/Tabs";
import tabsClasses from "@mui/material/Tabs";

import { Box, Card} from "@mui/material"


import SP01 from "./SP01";
import SP02 from "./SP02";
import SP03 from "./SP03";
import SP04 from "./SP04";
import SP05 from "./SP05";
import SP06 from "./SP06";
import SP07 from "./SP07";



export default function SPmember() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
          setValue(newValue);
    };

    return (
        <div>
          <Card sx={{p:2, m:5 , ml:15 , mt:2 }} >
              <Box sx={{ width: '90%', typography: 'body1' , m:5 , mt:2 }}>
              

                <TabContext value={value}>
                    <Box
                        sx={{
                          flexGrow: 1,
                          maxWidth: { xs: 320, sm: 480 , md: 800 , lg:1000 },     
                          bgcolor: 'background.paper',
                          }}>
                  <Tabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons
                      aria-label="visible arrows tabs example"
                        sx={{
                              [ `& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                              },
                            }}>
                                <Tab label="ผู้ดูแลระบบ" value="6" />
                                <Tab label="ผู้บริหาร" value="7"  />
                                <Tab label="วิชาการและโครงการพิเศษ" value="1" />
                                <Tab label="โภชนาการ / สกรณ์" value="2" />
                                <Tab label="ฝ่ายปกครองและกิจการนักศึกษา" value="3" />
                                <Tab label="ธุรการและบัญชี" value="4" />
                                <Tab label="สารสนเทศ / ศูนย์ดิจิตอล" value="5" />
                      </Tabs>
                            </Box>
                                <TabPanel value="1"><SP01/></TabPanel>    
                                <TabPanel value="2"><SP02/></TabPanel>    
                                <TabPanel value="3"><SP03/></TabPanel>    
                                <TabPanel value="4"><SP04/></TabPanel>    
                                <TabPanel value="5"><SP05/></TabPanel>
                                <TabPanel value="6"><SP06/></TabPanel>
                                <TabPanel value="7"><SP07/></TabPanel>    
                </TabContext>
                </Box>
          </Card>
        </div>
    )
}

