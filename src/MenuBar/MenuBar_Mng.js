import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Dashboard from '../Dashboard/Dashboard';
import FAQcrud from '../FAQ/FAQcrud';
import Account from '../Account/Account';

import PieChartIcon from '@mui/icons-material/PieChart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { grey } from '@mui/material/colors';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



export default function Menubar02() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  


  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "full" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' , bgcolor: '#272626'}}
        // , bgcolor: '#272626'
      >
        
        
        {/* <Tab label="กล่องข้อความ" icon={<ChatBubbleIcon fontSize='large'/>}   
        sx={{color:grey[50] , p:2 , mt:10 }} {...a11yProps(0)} />
         */}
        <Tab label="ข้อมูลสถิติ" icon={<PieChartIcon fontSize='large'/>}   
        sx={{color:grey[50] , p:2 , mt:1 }} {...a11yProps(1)} /> 

        {/* <Tab label="กำหนดสิทธิ" icon={<ManageAccountsIcon fontSize='large'/>}   
        sx={{color:grey[50] , p:2 , mt:1 }} {...a11yProps(2)} />    */}

        <Tab label="คำถามพบบ่อย" icon={<LiveHelpIcon fontSize='large'/>}   
        sx={{color:grey[50] , p:2 , mt:1 }} {...a11yProps(3)} />      

        <Tab label="บัญชีผู้ใช้" icon={<AccountCircleIcon fontSize='large'/>}   
        sx={{color:grey[50] , p:2 , mt:10 }} {...a11yProps(4)} /> 
        
      </Tabs>
      <TabPanel value={value} index={0}>
      < Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
                <FAQcrud />
      </TabPanel>
      <TabPanel value={value} index={2}>
                <Account />
      </TabPanel>
    </Box>
  );
}