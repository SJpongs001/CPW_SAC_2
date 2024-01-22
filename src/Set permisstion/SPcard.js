import React, { useState } from 'react';
import { Box, Button, Card, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material"
import { styled } from '@mui/material/styles';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import { Axios } from 'axios';
import axios from 'axios'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SPcard() {
  const [selectAgency, setSelectAgency] = useState(false);

  const getAgency = () => {
    setSelectAgency(!selectAgency);
  }

  const [Member , setMember] = useState([""]);
  const [usercodeid , setUsercodeid] = useState([""]);
  const [name , setName] = useState([""]);

  const [addagency , setAddagency] = useState([""]);
 
  const [addmember01, setMember01] = useState([1]);
  const [addmember02, setMember02] = useState([2]);
  const [addmember03, setMember03] = useState([3]);
  const [addmember04, setMember04] = useState([4]);
  const [addmember05, setMember05] = useState([5]);
  const [addmember06, setMember06] = useState([6]);
  const [addmember07, setMember07] = useState([7]);
 
  const [selectedAgency, setSelectedAgency] = useState(1);

  const addMember = () => {
    axios.post('http://localhost:3001/addmember', {
      username: usercodeid,
      user_name: name,
      agency_id: selectedAgency,
    }).then(() => {
      setMember([
        ...Member,
        {
          username: usercodeid,
          user_name: name,
          agency_id: selectedAgency,
        },
      ]);
    });
  };
  

  return (
    <div>
      <Box
        sx={{
          width: '100%', // 100% width
          padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          textAlign: 'center', // Center text
        }}>

        <Grid >
          <Card sx={{
            borderRadius: 2,
            backgroundColor: '#fafafa',
            p: 2 , pr:8
          }} >
            <Typography sx={{ pl: 5, m: 3 }} >
              <TextField  label="รหัสพนักงาน" type="text" 
                          sx={{ m: 1, width: 300, maxWidth: "100%" }} 
                          onChange={(event) => {
                            setUsercodeid(event.target.value)
                           }}
                          />
              <TextField label="ชื่อ/first name" type="text" 
                         sx={{ m: 1, width: 700, maxWidth: "100%" }} 
                         onChange={(event) => {
                          setName(event.target.value)
                         }}
                         />
            </Typography>
            
            <Card sx={{
              borderRadius: 2,
              backgroundColor: '#eeeeee',
              p: 4, m: 4, ml: 9
            }} >
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">บทบาท / role</FormLabel>
                
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedAgency}
                onChange={(event) => setSelectedAgency(event.target.value)}
                  >
                  <FormControlLabel value={6} control={<Radio />} label="ผู้ดูแลระบบ(administers)" 
                    onChange={(event) => { setMember06(event.target.value) }}                
                  />
                  <FormControlLabel value={7} control={<Radio />} label="ผู้บริหาร(Managers)" 
                    onChange={(event) => { setMember07(event.target.value) }}          
                  />
                  <Button onClick={getAgency} variant='text' sx={{ backgroundColor: 'none', color: 'black', fontSize: "16" }}>
                    {selectAgency ? <ArrowCircleLeftOutlinedIcon /> : <ArrowCircleRightOutlinedIcon />} <Typography sx={{ ml: 1 }} >หน่วยงาน(Agency)</Typography>
                  </Button>
                  <br />
                  {selectAgency && (
                    <div>
                      <Card sx={{
                        borderRadius: 2,
                        backgroundColor: '#fafafa',
                        p: 3, m: 4, ml: 2,
                        width: 300
                      }} >
                        <Grid container justifyContent="left" >
                            <FormControlLabel value={1} control={<Radio />} label="ฝ่ายวิชาการ และ โครงการพิเศษ" 
                                              onChange={(event) => { setMember01(event.target.value) }}          
                                             />
                            <FormControlLabel value={2} control={<Radio />} label="ฝ่ายโภชนาการ / สหกรณ์" 
                                              onChange={(event) => { setMember02(event.target.value) }}
                                             />
                            <FormControlLabel value={3} control={<Radio />} label="ฝ่ายปกครอง และ กิจการนักเรียน"
                                             onChange={(event) => { setMember03(event.target.value) }}
                                             />
                            <FormControlLabel value={4} control={<Radio />} label="ฝ่ายธุรการและบัญชี" 
                                              onChange={(event) => { setMember04(event.target.value) }}
                                             />
                            <FormControlLabel value={5} control={<Radio />} label="บริการ / ศูนย์ดิจิตอลฯ และ สารสนเทศ" 
                                             onChange={(event) => { setMember05(event.target.value) }}
                                             />
                        </Grid>
                      </Card>
                    </div>
                  )}
                </RadioGroup>


              </FormControl>
            </Card>
            <Button onClick={addMember} variant="contained" sx={{ p: 2 }} >
              เพิ่มสิทธิ์ผู้ใช้งานระบบ
            </Button>
          </Card>
        </Grid>
      </Box>
    </div>
  )
}