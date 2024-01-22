import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary,
  }));


function CPWlogin() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    
    const [inputs , setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values ,  [name]: value}))
        }
    
    const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "username": inputs.username,
        "password": inputs.password,
        "expiresIn": 600000
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

  
    fetch("https://www.melivecode.com/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log(result)
          /*---------------*/
/*
        fetch("https://center.cpw.ac.th/cpw_contact/login/", requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log(result)
*/
    /**"{
   "{
    ""method"": ""login"",
    ""Username"":""20010"",
    ""Password"":""02072535""
}"
 */
            
        if (result.status === 'ok') {
            MySwal.fire({
                html: <i>{result.message}</i>,
                icon: 'success'
            }).then((value) => {
                localStorage.setItem('token',result.accessToken)
                navigate('/Account')})
            }else {
            MySwal.fire ({
                html: <i>{result.message}</i> ,
                icon: "error"
            })
        }
    })
        .catch(error => console.log('error', error));
        console.log(inputs);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "username": inputs.username,
            "password": inputs.password,
            "expiresIn": 600000

        });

        var requestOptions = {

            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'

        };

    fetch("https://www.melivecode.com/api/login", requestOptions)
    fetch("", requestOptions)
        .then(response => response.json())
        .then(result => {

            console.log(result)

        })

        .catch(error => console.log('error', error));
        console.log(inputs);

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));

    }

    return (
        <div >
        <fieldset id ="LoginBG">
        <Box sx={{flexGrow: 1 , p : 30 }} >
            <Grid container >
            <Grid sx={{ mx: 'auto', width: 400 }}  >

                <Item>
                    <Box sx={{ bgcolor: 'rgb(203, 4 , 112)', color: 'success.contrastText', 
                    p: 2,
                    mb: 2
                
                }}>
                        CPW ALL CONTACT
                    </Box>
            <table id='LoginBox' align='center'> 
            <tr><td>

           
            <form onSubmit={handleSubmit} align = "center">
                    <TextField id="outlined-basic" label="Username / บัญชีผู้ใช้ " 
                    variant="outlined" 
                    type = "text"
                    name = "username"
                    value={inputs.username || ""}
                    onChange={handleChange}

                    sx={ {width: "350px" , mb : 2}}
                    >   
                        </TextField>


                        <TextField id="outlined-basic" label="Password / รหัสผ่าน " 
                    variant="outlined" 
                    type = "password"
                    name = "password"
                    value={inputs.password || ""}
                    onChange={handleChange}

                    sx={ {width: "350px"}}
                    >   
                        </TextField> 
             
        
                <script src='https://code.jquery.com/jquery-3.7.1.min.js' ></script>
                <script src='script.js'></script>

                <Button id='action-button' variant="contained" disableElevation type='submit'sx={{mt:2}}> 
                    เข้าสู่ระบบ
                </Button>
                    
                    </form>
                    
                </td>
            </tr>
            
        </table>

            </Item>
            </Grid>
            </Grid>


        </Box>
        
        </fieldset> 
        <footer>
            <p id="HeadLogin">
                This Website made by CIS.KMUTNB Student @2023
                Login By API mockup 
                UserName: karn.yong@melivecode.com
                Password: melivecode
            </p>
        </footer>

        </div>    
                )
            }

export default CPWlogin;