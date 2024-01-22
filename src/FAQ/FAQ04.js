import React from "react";
import { useState } from "react";
import Axios from "axios";

import { Card , Typography ,Box , TextField ,
         TableContainer , Paper , CardContent , CardActions ,
         Grid , Button , Modal
        } from "@mui/material";

import QuizIcon from '@mui/icons-material/Quiz';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { response } from "express";
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

export default function FAQ04() {
    
        const [faq , setFaq] = useState([]);
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false); 
        
        const [Question , setQuestion] = useState([""]);
        const [Answer , setAnswer] = useState([""]);
    
              Axios.get('http://localhost:3001/faq4').then((response) => {
                setFaq(response.data);
              });

            
              const addFAQ4 = () => {
                Axios.post('http://localhost:3001/create4', {
                  Question: Question,
                  Answer: Answer
                })
                  .then(() => {
                    setFaq([
                      ...faq ,
                      {
                        Question: Question,
                        Answer: Answer
                      },
                    ]);
                  })
                  .catch((error) => {
                    console.error('Error adding FAQ:', error);
                  });
              };

        const deleteFAQ = (faq_id) => {
          Axios.delete(`http://localhost:3001/delete4/${faq_id}`).then((response) => {
            setFaq(
              faq.filter((val) => {
                return val.faq_id !== faq_id;
              })
            );
          });
        };


    return(
        <div>
            <Card sx={{width: 1550 , height: 650}}  >
            
            <Grid container spacing={1} sx={{p:2}} >
                <Grid xs={10} >
                <Typography gutterBottom variant="h6" component="div" sx={{pl:5 , pt:5}}>
                    FAQ / ธุรการและบัญชี
                </Typography>
                </Grid>
                <Grid sx={{p:2 , pt:4}} >
                <Button onClick={handleOpen} variant="contained" > Add FAQ 
                    <Grid sx={{pl:1 , pt:1}} >
                        <QuestionAnswerIcon /> 
                    </Grid>
                </Button>
                </Grid>        
            </Grid>
            
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                เพิ่มคำถามที่พบบ่อย
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          <TableContainer component={Paper} sx={{m:2 ,mb:3 , width:'95%'}} >
          <Box sx={{ width: '100%'}}>
          <CardContent>
          <CardActions variant="h1" component="h2" >
          <QuizIcon fontSize="large" sx={{p:2, mb:1}} />
          <h3>คำถาม:</h3>
            </CardActions>
          
          <Typography sx={{pl:5}} >
                <TextField type="text" placeholder="ใส่ข้อความคำถาม" 
                           sx={{width : 300}}
                           onChange={(event) => {
                            setQuestion(event.target.value)
                           }}
                           />
            </Typography>

            <CardActions>
                <QuestionAnswerIcon fontSize="large" sx={{p:2, mb:2}} />
                <h3>คำตอบ:</h3>
            </CardActions>
          
            <Typography sx={{pl:5 , mb:3 }} >
                <TextField type="text" placeholder="ใส่ข้อความคำตอบ" 
                           sx={{width : 300}}  
                           onChange={(event) => {
                            setAnswer(event.target.value)
                           }}
                           />
            </Typography>
          
          <Grid container justifyContent="center" >
            <Button variant="contained" color="success" sx={{m:3}} onClick={addFAQ4} >
            Add FAQ
              <AddCircleIcon fontSize="large" />
            </Button>
          </Grid>
            </CardContent>
            </Box> 
          
          </TableContainer>
          </Typography>
        </Box>
      </Modal>
       


    <div class = "scroll-bg">
        <div class = "scroll-div">
          <div class = "scroll-object">
          <TableContainer component={Paper} sx={{p:2, backgroundColor: '#eeeeee'} } >
       
            
          {faq.map((val , key) => {
                return(
                    
                    <div className="Faq-card">
                        <TableContainer component={Paper} sx={{m:2 ,mb:3 , width:'100%' ,
                        padding: { xs: 2, sm: 3, md: 4 }
                      }} >
                            <Box sx={{ width: '90%' , 
                                 padding: { xs: 2, sm: 3, md: 4 }
                            }}>
                              <CardContent sx={{padding: { xs: 2, sm: 3, md: 4 }}} >
                        <CardActions>
                        <QuizIcon fontSize="large" sx={{p:2, mb:1}} />
                        <h3>คำถาม</h3>
                        </CardActions>
                            <Typography sx={{pl:8}}>
                            <Card sx={{   borderRadius: 8,
                                          backgroundColor: '#fafafa',
                                          p:2 , ml:3  }} >
                
                                            {val.faq_question}
                            </Card>
                            
                            </Typography>

                            <CardActions>
                        <QuizIcon fontSize="large" sx={{p:2, mb:1}} />
                        <h3>คำตอบ</h3>
                        </CardActions>
                            <Typography sx={{pl:8}}>
                            <Card sx={{   borderRadius: 8,
                                          backgroundColor: '#fafafa',
                                          p:2 , ml:3  }} >
                
                                            {val.faq_answer}
                            </Card>
                            <Grid container justifyContent="right" >
                                
                                <Button variant="contained" color="error" sx={{m:2}}
                                onClick={() => {deleteFAQ(val.faq_id)}}
                                >
                                Delete
                                <DeleteForeverIcon fontSize="large" />
                                </Button>
                            </Grid>
                            </Typography>
                            </CardContent>

                          </Box>
                        </TableContainer>
                        
                        </div>
                )
            })}

            </TableContainer>  
            </div>
            </div>
            </div>

            
     </Card>
            
        </div>
    )
}