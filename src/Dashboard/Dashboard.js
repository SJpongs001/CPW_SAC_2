import * as React from 'react';

import Menubar from "../MenuBar/MenuBar_Admin"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import ChartYear from './ChartYear';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, Grid } from '@mui/material';

export default function Dashboard() {

    const ContainerStyle = {
        display : 'flex',
        flexDirect : 'row'
      }

      const [value, setValue] = React.useState('1');

      const handleChange = (event, newValue) => {
            setValue(newValue);
      };

      const [year, setYear] = React.useState('');

    return(
        <div className="bg">
            <span class = "main" style={ContainerStyle}>
            {/* <Menubar />  */}
        <aside>
          <div>
            
            <Grid container spacing={2}>
                <Typography gutterBottom variant="h5" component="div" sx={{p:5}}>
                    Dashboard
                <Typography variant="body2" color="text.secondary" sx={{ mt:2}}>
                        ข้อมูลสถิติแสดงข้อความที่เข้ามาในระบบ
                    </Typography>
                    </Typography>
                </Grid>
                <Card sx={{p:5 , m:2 , ml:8 , width:"100%" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={7} sx={{p:2}}>
                        <FormControl sx={{width:490}}>
                        <Typography sx={{p:2}} >
                            เลือกปีที่ต้องการแสดงข้อมูลทางสถิติ
                        </Typography>
                    {/* <InputLabel id="demo-simple-select-label">Select Year</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="Select Year"
                        onChange={handleChange}>
    
                        <MenuItem value={2020}>ข้อมูลปี 2020</MenuItem>
                        <MenuItem value={2021}>ข้อมูลปี 2021</MenuItem>
                        <MenuItem value={2022}>ข้อมูลปี 2022</MenuItem>
                    </Select>
                        </FormControl>
                        </Grid>
                <Grid item xs={6} md={4}>
                    <Card variant="outlined" color="##03a9f4" sx={{p:3,  pt:1, pb:4, mt:3, borderRadius:2, borderColor:"#2979ff"
                        , maxWidth:450 , maxHeight:280,
                          width:440 , height:50 }}>
                    <Box sx={{p:1}}>
                    <InputLabel sx={{fontSize:14}}> ข้อความทั้งหมดที่เข้ามาในระบบ</InputLabel>
                    <Typography variant="h4" color="#2979ff"
                        placement="right-end">
                        5000
                    </Typography>
                </Box>
            </Card>

                </Grid>  
                    </Grid>
                    


          

                </Card>
            
           
          </div>

          <Box sx={{p:3,pt:1}} >
              <ChartYear />
            </Box>


        
    </aside>    
    </span>
            
        </div>
    )
}