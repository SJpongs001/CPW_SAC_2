import Typography from '@mui/material/Typography';

import SPmember from "./SPmember";
import SPcard from './SPcard';
import { Grid } from '@mui/material';

export default function Setpermission() {

    const ContainerStyle = {
        display : 'flex',
        flexDirect : 'row'
      }

    
    return(
      <Grid container justifyContent={'center'} >
        <div className="bg" >
          <span className="main" style={ContainerStyle}>
          <aside>
            <div>
            <Typography gutterBottom variant="h5" component="div" sx={{p:5}}>
                Set Permission
            <Typography variant="body2" color="text.secondary" sx={{ mt:2}}>
                ตั้งค่าสิทธิ์การใช้งานระบบ
            </Typography>
            </Typography>

          <SPcard />
          <SPmember />

            </div>

          </aside>
          
        

          </span>
       
        </div>

      </Grid>
        
    )
}