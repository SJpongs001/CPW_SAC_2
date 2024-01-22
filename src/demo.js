import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Paper, TextField, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Axios } from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SPcard() {
  const [selectAgency, setSelectAgency] = useState(false);
  const [usercodeid, setUsercodeid] = useState("");
  const [name, setName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedAgency, setSelectedAgency] = useState([]);

  const [Member, setMember] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleAgencyChange = (event) => {
    setSelectedAgency(event.target.value);
  };

  const getAgency = () => {
    setSelectAgency(!selectAgency);
  }

  const addMember = () => {
    Axios.post('http://localhost:3001/addmember', {
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
        }
      ]);
    })
  }

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          padding: { xs: 2, sm: 3, md: 4 },
          textAlign: 'center',
        }}>

        <Grid >

          <Card sx={{
            borderRadius: 2,
            backgroundColor: '#fafafa',
            p: 2, pr: 8
          }} >
            <Typography sx={{ pl: 5, m: 3 }} >
              <TextField label="รหัสพนักงาน" type="text"
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
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <FormControlLabel value="6" control={<Radio />} label="ผู้ดูแลระบบ(administers)" />
                  <FormControlLabel value="7" control={<Radio />} label="ผู้บริหาร(Managers)" />
                

                <Button variant='text' onClick={getAgency} sx={{ backgroundColor: 'none', color: 'black', fontSize: "16" }}>
                  {selectAgency ? <ArrowCircleLeftOutlinedIcon /> : <ArrowCircleRightOutlinedIcon />} <Typography
                  sx={{ ml: 1 }} >หน่วยงาน(Agency)</Typography>
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
                        <FormControlLabel value="1" control={<Radio />} label="ฝ่ายวิชาการ และ โครงการพิเศษ"
                                          onChange={handleAgencyChange}/>
                        <FormControlLabel value="2" control={<Radio />} label="ฝ่ายโภชนาการ / สหกรณ์"
                                          onChange={handleAgencyChange}/>
                        <FormControlLabel value="3" control={<Radio />} label="ฝ่ายปกครอง และ กิจการนักเรียน"
                                          onChange={handleAgencyChange}/>
                        <FormControlLabel value="4" control={<Radio />} label="ฝ่ายธุรการและบัญชี"
                                          onChange={handleAgencyChange}/>
                        <FormControlLabel value="5" control={<Radio />} label="บริการ / ศูนย์ดิจิตอลฯ และ สารสนเทศ"
                                          onChange={handleAgencyChange}/>
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
