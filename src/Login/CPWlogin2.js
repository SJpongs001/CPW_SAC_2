import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { json, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid , Stack , Link} from "@mui/material";

export default function CPWlogin02() {

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [username, setUserName] = useState({});
  const [password, setPassword] = useState({})

  // var islogin = false

 

  const handleSubmit = (event) => {
     event.preventDefault();
    
     
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = {
      "method": "login",
      "Username": username,
      "Password":password
    };
     var requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow'
    };
    
    fetch("https://center.cpw.ac.th/cpw_contact/login/", requestOptions)
      .then((response) => response.json())
      .then((result) => {

        if (result.status === "ok") {
          MySwal.fire({
            title: <strong>Good Job!</strong>,
            html: <i>{result.message}</i>,
            icon: "success",
          }).then((value) => {
            navigate("/MainAdmin");
          });
        } else {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "error",
          });
        }
     
          // result.map((keepdata) => {
          //   console.log(keepdata.Username);
          //   if(inputs.username === keepdata.Username && inputs.password === keepdata.Password) {
          //     islogin = true

          //     MySwal.fire({
          //       title: <strong>Good Job!</strong>,
          //       html: <i>{result.message}</i>,
          //       icon: "success",
          //     }).then((value) => {
          //       navigate("/");
          //     });
          //   }
          // })
            // if( !islogin ) {
            //   MySwal.fire({
            //     html: <i>{result.message}</i>,
            //     icon: "error",
            //   });
            // }
            
     
        
      })
      .catch((error) => console.log("error", error));
      ;
  };


  return (
    <div>
      <div align="center">
        <Card
          sx={{
            maxWidth: 700,
            height: 500,

            m:10 , mb:5 ,
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
            <b>CPW ALL CONTACT</b>
          </Box>
          <Box sx={{ bgcolor: "rgb(35, 0 , 133)", height: 15 }} />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Username / บัญชีผู้ใช้ "
                variant="outlined"
                type="text"
                name="username"
                  
                onChange={e => setUserName(e.target.value)}
                sx={{ width: "550px", mb: 3, mt: 4 }}
              ></TextField>

              <TextField
                id="outlined-basic"
                label="Password / รหัสผ่าน "
                variant="outlined"
                type="password"
                name="password"
               
                onChange={e => setPassword(e.target.value)}
                sx={{ width: "550px", mb: 3, mt: 1 }}
              />
              <Box>
                <Grid container justifyContent={"left"} sx={{pl:8}}  >
                  <Link href="ติตต่อศูนย์สารสนเทศจ้าาา" underline="none" >
                  ลืมระหัสผ่าน / foget a password
                  </Link>
                </Grid>
              </Box>

              <br />

              <Button
                id="action-button"
                variant="contained"
                // disableElevation
                type="submit"
                sx={{ mt: 5, width: 150 }}
              >
                เข้าสู่ระบบ
              </Button>

              <Typography variant="body2" color="text.secondary" sx={{ m: 3 }}>
                ผู้ที่สามารถเข้าใช้ระบบนี้ได้จะต้องเป็นพนักงาน
                หรือผู้ที่มีส่วนเกี่ยวข้องในระบบของโรงเรียนชลประทานวิทยา
                ที่ได้ทำการขึ้นทะเบียนเเล้วเท่านั้น
              </Typography>
            </form>
          </CardContent>
        </Card>
      </div>
      <Grid container justifyContent={'center'} >
      <Card sx={{borderRadius:5 , p:2 , mb:2}} >
        <Grid container justifyContent={'center'} >
        Express access for Demo.
        </Grid>
        <Box sx={{pb:3}} >
          <Grid container justifyContent={'center'} sx={{p:2}}  >
          <Stack direction="row" spacing={2} >
          <Button variant="contained" href="/MainAdmin"color="error" >MainAdmin</Button>
          <Button variant="contained" href="/MainManager">MainManager</Button>
          </Stack>
          </Grid>
          
          <Grid container justifyContent={'center'} >
          <Stack direction="row" spacing={2} >
        
            <Button variant="contained" href="/MainAgency1"color="success" >Agency2</Button>
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
