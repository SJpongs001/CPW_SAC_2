import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";


function Account() {

    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [isLoaded , setIsLoaded] = useState(true);
    const [user , setUser] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token')
        var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
};

    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/Login3') 
    }

    const ContainerStyle = {
        display : 'flex',
        flexDirect : 'row'
      }

    return(
        <div>
        <span class = "main" style={ContainerStyle}>
            {/* <Menubar />  */}
        <aside>
        <Typography gutterBottom variant="h5" component="div" sx={{pl:5 , 
        mt: 4 }}>
            <div> <b>Profile / ข้อมูลผู้ใช้</b> </div>
        </Typography>


        <Card sx={{ maxWidth: 850 ,
            mt : 2 ,
            ml : 3 ,
            pt : 2 ,
            pl : 2 , 
          }}>

      <CardContent sx={{p:2, ml:2 , mr:2}}>
        <Typography gutterBottom variant="h5" component="div" sx={{p:2}}>
        <span class = "main" style={ContainerStyle}>
        <div><img src = {user.avatar} alt={user.id} width={100}/></div>
        </span>
        <aside style={ContainerStyle}>
        <div>{user.fname}</div>
        <div>{user.lname}</div>  
        </aside>
        </Typography>


        <Typography variant="body2" color="text.secondary">
        <div>{user.username}</div>
            <div>{user.email}</div>
        </Typography>
      </CardContent>
      <Button  sx={{ 
            p:2 ,
            m:2 , 
            ml: 90
          }}

       variant="contained"  disableElevation  
       color="error" 
       onClick={logout} >
     
      
      LOG OUT!!
    </Button>

    </Card>

    </aside>    
    </span>
    </div>
    )

    
} 

export default Account