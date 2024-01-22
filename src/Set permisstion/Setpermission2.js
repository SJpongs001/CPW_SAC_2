import Card from "@mui/material/Card"
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";

import QuizIcon from '@mui/icons-material/Quiz';
import { Button, CardContent, CardActions, Grid, TextField } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


export default function Setpermission2() {
    return(
        <div>
        

{/* ฝ่ายวิชาการ */}
        <Card sx={{ width: 1650 , height: 650}}> 
        
        <Typography gutterBottom variant="h6" component="div" sx={{p:2}}>
        FAQ / ฝ่ายวิชาการ โครงการพิเศษ English Program
        </Typography>
        <Typography component="div" sx={{p:2}} >
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="ค้นหาคำถามที่พบบ่อยของฝ่ายวิชาการ" id="fullWidth" />
    </Box>
        </Typography>

<div class = "scroll-bg">
        <div class = "scroll-div">
          <div class = "scroll-object">
          <TableContainer component={Paper} sx={{p:2, backgroundColor: '#eeeeee'}}>
          
          <TableContainer component={Paper} sx={{m:2 ,mb:3 , width:'95%'}} >
          <Box sx={{ width: '100%'}}>
          <CardContent>
          <CardActions variant="h1" component="h2" >
          <QuizIcon fontSize="large" sx={{p:2, mb:1}} />
          <h3>คำถาม</h3>
            </CardActions>
          
          
          <Typography sx={{pl:8}} >
                ได้แต่ตั้งคำถาม แต่ไม่กล้าถามเลยสักครั้ง ได้เเต่ตั้งความหวังข้างในหัวใจ
                ที่จริงแค่อยากรู้ ว่าเธอยังคิดถึงฉันไหม อยากเเค่จะมองตา เเละตอบคำถามหัวใจ
                ไม่รู้เมื่อไหร่ เธอจะได้ตอบมันสักที
            </Typography>

            <CardActions>
                <QuestionAnswerIcon fontSize="large" sx={{p:2, mb:2}} />
                <h3>คำตอบ</h3>
            </CardActions>
          <Card sx={{   borderRadius: 8,
                        backgroundColor: '#fafafa',
                        p:2 , ml:3
            }} >
          <Typography sx={{pl:5}} >
                คำตอบ
            </Typography>
          </Card>
          
          <Grid container justifyContent="right" >
            <Button variant="contained" color="success" sx={{m:2}} >
            Edited
              <EditIcon fontSize="large" />
            </Button>
            <Button variant="contained" color="error" sx={{m:2}}>
            Delete
            <DeleteForeverIcon fontSize="large" />
            </Button>
          </Grid>
            </CardContent>
            </Box> 
          
          </TableContainer>

          <TableContainer component={Paper} sx={{m:2 ,mb:3 , width:'95%'}} >
          <Box sx={{ width: '100%'}}>
          <CardContent>
          <CardActions variant="h1" component="h2" >
          <QuizIcon fontSize="large" sx={{p:2, mb:1}} />
          <h3>คำถาม:</h3>
            </CardActions>
          
          
          <Typography sx={{pl:8}} >
                ได้แต่ตั้งคำถาม แต่ไม่กล้าถามเลยสักครั้ง ได้เเต่ตั้งความหวังข้างในหัวใจ
                ที่จริงแค่อยากรู้ ว่าเธอยังคิดถึงฉันไหม อยากเเค่จะมองตา เเละตอบคำถามหัวใจ
                ไม่รู้เมื่อไหร่ เธอจะได้ตอบมันสักที
            </Typography>

            <CardActions>
                <QuestionAnswerIcon fontSize="large" sx={{p:2, mb:2}} />
                <h3>คำตอบ:</h3>
            </CardActions>
          <Card sx={{   borderRadius: 8,
                        backgroundColor: '#fafafa',
                        p:2 , ml:3
            }} >
          <Typography sx={{pl:5}} >
                คำตอบ
            </Typography>
          </Card>
          
          <Grid container justifyContent="right" >
            <Button variant="contained" color="success" sx={{m:2}} >
            Edited
              <EditIcon fontSize="large" />
            </Button>
            <Button variant="contained" color="error" sx={{m:2}}>
            Delete
            <DeleteForeverIcon fontSize="large" />
            </Button>
          </Grid>
            </CardContent>
            </Box> 
          
          </TableContainer>

          

        </TableContainer>
            </div>
            </div>
          </div>  
        </Card>

        </div>
    )
}