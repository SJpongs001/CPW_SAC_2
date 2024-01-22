import { Button, Card, Grid , Stack } from "@mui/material"
import axios from "axios";
import { useState } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function SP04() {
    
    const [showmember4 , setShowmember4] = useState([]);
    axios.get('http://localhost:3001/member04').then((response) => {
        setShowmember4(response.data);
    });


    const deleteMember4 = (userID) => {
        axios.delete(`http://localhost:3001/deleteMember4/${userID}`).then((response) => {
            setShowmember4(
            showmember4.filter((val) => {
              return val.userID !== userID;
            })
          );
        });
      };
    
    return(
        <div>
            <div class = "scroll-div-2">
            <div class = "scroll-object">
            {showmember4.map((val , key) => {
                    return(
                        <div>
                            <Card sx={{p:3}} >
                            <Stack direction="row" spacing={5}>
                                {val.profilepic ? (
                                <img src={val.profilepic} alt="Profile" />
                                ) : (
                                <img src="./Picture/Dfpic.png" alt="Default Profile" width={100} />
                            )}
                                
                           
                                <Grid>
                                <p>รหัสพนักงาน: {val.username}</p>
                                <p>ชื่อ-นามสกุล: {val.user_name}</p>
                                </Grid>
                                </Stack>
                                <Grid container justifyContent="right">
                                <Button variant="contained" color="error" sx={{m:2}}
                                onClick={() => {deleteMember4(val.userID)}}>
                                Delete
                                <DeleteForeverIcon fontSize="large" />
                                </Button>
                                </Grid>   
                            </Card>  
                        </div>
                    )
                })}
            </div>
            </div>
                
        </div>
    )
}