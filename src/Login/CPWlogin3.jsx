import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid , Stack , Modal , Typography} from "@mui/material";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function CPWlogin03() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const[nameREG , setNameREG] = useState("");
    const[usernameREG , setUsernameREG] = useState("");
    
    const[name , setName] = useState("");
    const[username , setUsername] = useState("");

    const [loginStatus , setLoginStatus] = useState("");

    const register = () => {
        axios.post('http://localhost:3001/register' , 
        { user_name : nameREG ,
          username : usernameREG
        }).then((response) => {
            console.log(response);
        })
    }

    // const login = () => {
    //     axios.post('http://localhost:3001/login' , 
    //     { user_name : name ,
    //       username : username
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };
    
    const login = () => {
        axios.post("http://localhost:3001/login" , {
            user_name: name ,
            username: username ,
        } ).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].user_name)
            }
        })
    }
 
  return (
    <div>
      <div align="center">
        <Card
          sx={{
            maxWidth: 700,
            m: 15, mb:5 ,
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              bgcolor: "rgb(203, 4 , 112)",
              color: "success.contrastText",
              maxWidth: 1000,
              maxHeight: 100,
              width: 650,
              fontSize: 20,
              p: 5,
              pb: 3,
            }}
          >
            <Box>
            <b>CPW ALL CONTACT</b>
            </Box>
            
          </Box>
          <Box sx={{ bgcolor: "rgb(35, 0 , 133)", height: 15 }} />
          <Stack direction="row" spacing={2} >
            <Grid sx={{p:5}} >
            <img src="./Picture/Dfpic.png" alt="Default Profile" width={150} />
                <Box sx={{p:3}} >
                {loginStatus}
                </Box>
            </Grid>
            <Grid>
            <CardContent>
            <form >
              <TextField
                id="outlined-basic"
                label="Username / รหัสพนักงาน "
                variant="outlined"
                type="text"
                name="user_name"
                onChange={(e) => {
                    setName(e.target.value)
                }}

                sx={{ width: "100%", mb: 3, mt: 4 }}
              ></TextField>

              <TextField
                id="outlined-basic"
                label="ชื่อ-นามสกุล บุคลากร "
                variant="outlined"
                type="text"
                name="username"
                onChange={(e) => {
                    setUsername(e.target.value)
                }}

                sx={{ width: "100%", mb: 3, mt: 1 }}
              ></TextField>
              <br />
              <Grid container justifyContent={"right"}>
              <Button
                id="action-button"
                variant="contained"
                sx={{ mt: 2, width: 150 }}
                onClick={login}
              >
                เข้าสู่ระบบ
              </Button>

              <Button
                id="action-button"
                
                sx={{ mt: 2, width: 150 }}
                onClick={handleOpen}
              >
                ติดต่อลงทะเบียน
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <Grid container justifyContent={"center"} >
                            ลงทะเบียน
                        </Grid>
                    <TextField
                        id="outlined-basic"
                        label="Username / รหัสพนักงาน "
                        variant="outlined"
                        type="text"
                        name="user_name"
                        onChange={(e) => {
                        setName(e.target.value)
                        }}

                    sx={{ width: "100%", mb: 3, mt: 4 }}>     
                    </TextField>

                    <TextField
                    id="outlined-basic"
                    label="ชื่อ-นามสกุล บุคลากร "
                    variant="outlined"
                    type="text"
                    name="username"
                    onChange={(e) => {
                    setUsername(e.target.value)
                }}

                sx={{ width: "100%", mb: 3, mt: 1 }} />

                <Grid container justifyContent={"center"}> 
                <Button
                id="action-button"
                variant="outlined"
                type="submit"
                sx={{ mt: 2, width: 200 }}
                onClick={register}
                color="warning"
              >
                ยืนยันการลงทะเบียน
              </Button>
                </Grid>
                 </Box>     
      </Modal>
                </Grid>
              
            </form>
          </CardContent>
            </Grid>
          </Stack>
          
        </Card>
      </div>
      <Grid container justifyContent={'center'} >
      <Card sx={{borderRadius:5 , p:2 , m:3 }} >
        <Grid container justifyContent={'center'} >
        Express access for Demo.
        </Grid>
        <Box>
          <Grid container justifyContent={'center'} sx={{p:2}}  >
          <Stack direction="row" spacing={2} >
          <Button variant="contained" href="/MainAdmin"color="error" >MainAdmin</Button>
          <Button variant="contained" href="/MainManager">MainManager</Button>
          </Stack>
          </Grid>
          
          <Grid container justifyContent={'center'} >
          <Stack direction="row" spacing={2} >
          <Button variant="contained" href="/MainAgency1"color="success" >Agency1</Button>
          <Button variant="contained" href="/MainAgency2"color="success" >Agency2</Button>
          <Button variant="contained" href="/MainAgency3"color="success" >Agency3</Button>
          <Button variant="contained" href="/MainAgency4"color="success" >Agency4</Button>
          <Button variant="contained" href="/MainAgency5"color="success" >Agency5</Button>
          </Stack>
          </Grid>
        </Box>
      </Card>
      </Grid>
    </div>
  );
}
