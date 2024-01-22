const express = require('express');
const app = express(); 
const mysql = require('mysql');
const cors = require('cors');
const { Elderly } = require('@mui/icons-material');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection( {
    user: "root" ,
    host: "localhost" ,
    password: "" ,
    database: "cpwsac",
    port: 3306
})



app.get('/faq' , (req , res) => {
    db.query("SELECT * FROM `cpw_faq`" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});



// หน่วยงานที่ 1 วิชาการ

app.get('/faq1' , (req , res) => {
    db.query("SELECT * FROM `cpw_faq` WHERE agency_id = 1" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

  app.post('/create1' , (req , res) => {
    const Question = req.body.Question;
    const Answer = req.body.Answer;

    db.query("INSERT INTO faq(Question , Answer) VALUES(?,?) WHERE agency_id = 1" ,
    [ Question , Answer ] ,
    (err , result) => {
        if(err) {
            console.log(err)
        }else {
            res.send("Value inserted")
        }
    });
    
  });

  app.delete('/delete1/:faq_id', (req, res) => {
    const faq_id = req.params.faq_id;
    db.query("DELETE FROM `cpw_faq` WHERE faq_id = ?", faq_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.get('/member01' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 1" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember1/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});






  // หน่วยงานที่ 2 โภชนาการ และสหกรณ์

  app.get('/faq2' , (req , res) => {
    db.query("SELECT * FROM `cpw_faq` WHERE agency_id = 2" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

  app.post('/create2' , (req , res) => {
    const Question = req.body.Question;
    const Answer = req.body.Answer;
    // INSERT INTO `cpw_faq` (`faq_id`, `faq_question`, `faq_answer`, `agency_id`) VALUES (NULL, 'สวัสดีฉันชื่อดอลล่า', 'สวัสดีดอลล่า', '2');
    // db.query("INSERT INTO faq(Question , Answer) VALUES(?,?) WHERE agency_id = 2" ,
    db.query("INSERT INTO `cpw_faq` (`faq_question`, `faq_answer`, `agency_id`) VALUES (?, ? , 2) " ,
    [ Question , Answer ] ,
    (err , result) => {
        if(err) {
            console.log(err)
        }else {
            res.send("Value inserted")
        }
    });
    
  });

app.put('/update2'  , (req , res) => {
    const faq_id = req.body.faq_id;
    const faq_answer = req.body.faq_answer;
    db.query("UPDATE `cpw_faq` SET `faq_answer` = ?" , [faq_answer , faq_id] , (err , result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    }); 
})

app.delete('/delete2/:faq_id', (req, res) => {
    const faq_id = req.params.faq_id;
    db.query("DELETE FROM `cpw_faq` WHERE faq_id = ?", faq_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.get('/member02' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 2" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember2/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});









// หน่วยงานที่ 3 ฝ่ายปกครองและกิจการนักเรียน

app.get('/faq3' , (req , res) => {
    db.query("SELECT * FROM `cpw_faq` WHERE agency_id = 3" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

  app.post('/create3' , (req , res) => {
    const Question = req.body.Question;
    const Answer = req.body.Answer;
    // INSERT INTO `cpw_faq` (`faq_id`, `faq_question`, `faq_answer`, `agency_id`) VALUES (NULL, 'สวัสดีฉันชื่อดอลล่า', 'สวัสดีดอลล่า', '2');
    // db.query("INSERT INTO faq(Question , Answer) VALUES(?,?) WHERE agency_id = 2" ,
    db.query("INSERT INTO `cpw_faq` (`faq_question`, `faq_answer`, `agency_id`) VALUES (?, ? , 2) " ,
    [ Question , Answer ] ,
    (err , result) => {
        if(err) {
            console.log(err)
        }else {
            res.send("Value inserted")
        }
    });
    
  });

app.put('/update3'  , (req , res) => {
    const faq_id = req.body.faq_id;
    const faq_answer = req.body.faq_answer;
    db.query("UPDATE `cpw_faq` SET `faq_answer` = ?" , [faq_answer , faq_id] , (err , result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    }); 
})

app.delete('/delete3/:faq_id', (req, res) => {
    const faq_id = req.params.faq_id;
    db.query("DELETE FROM `cpw_faq` WHERE faq_id = ?", faq_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.get('/member03' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 3" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember3/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});









// หน่วยงานที่ 4 ธุรการและบัญชี

app.get('/faq4' , (req , res) => {
    db.query("SELECT * FROM `cpw_faq` WHERE agency_id = 4" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

  app.post('/create4' , (req , res) => {
    const Question = req.body.Question;
    const Answer = req.body.Answer;
    // INSERT INTO `cpw_faq` (`faq_id`, `faq_question`, `faq_answer`, `agency_id`) VALUES (NULL, 'สวัสดีฉันชื่อดอลล่า', 'สวัสดีดอลล่า', '2');
    // db.query("INSERT INTO faq(Question , Answer) VALUES(?,?) WHERE agency_id = 2" ,
    db.query("INSERT INTO `cpw_faq` (`faq_question`, `faq_answer`, `agency_id`) VALUES (?, ? , 2) " ,
    [ Question , Answer ] ,
    (err , result) => {
        if(err) {
            console.log(err)
        }else {
            res.send("Value inserted")
        }
    });
    
  });

app.put('/update4'  , (req , res) => {
    const faq_id = req.body.faq_id;
    const faq_answer = req.body.faq_answer;
    db.query("UPDATE `cpw_faq` SET `faq_answer` = ?" , [faq_answer , faq_id] , (err , result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    }); 
})

app.delete('/delete4/:faq_id', (req, res) => {
    const faq_id = req.params.faq_id;
    db.query("DELETE FROM `cpw_faq` WHERE faq_id = ?", faq_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.get('/member04' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 4" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember4/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});








// หน่วยงานที่ 5 บริการและสารสนเทศ

app.get('/faq5' , (req , res) => {
    db.query("SELECT * FROM `cpw_faq` WHERE agency_id = 5" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

  app.post('/create5' , (req , res) => {
    const Question = req.body.Question;
    const Answer = req.body.Answer;
    // INSERT INTO `cpw_faq` (`faq_id`, `faq_question`, `faq_answer`, `agency_id`) VALUES (NULL, 'สวัสดีฉันชื่อดอลล่า', 'สวัสดีดอลล่า', '2');
    // db.query("INSERT INTO faq(Question , Answer) VALUES(?,?) WHERE agency_id = 2" ,
    db.query("INSERT INTO `cpw_faq` (`faq_question`, `faq_answer`, `agency_id`) VALUES (?, ? , 2) " ,
    [ Question , Answer ] ,
    (err , result) => {
        if(err) {
            console.log(err)
        }else {
            res.send("Value inserted")
        }
    });
    
  });

app.put('/update5'  , (req , res) => {
    const faq_id = req.body.faq_id;
    const faq_answer = req.body.faq_answer;
    db.query("UPDATE `cpw_faq` SET `faq_answer` = ?" , [faq_answer , faq_id] , (err , result) => {
        if(err) {
            console.log(err);
        }else {
            res.send(result);
        }
    }); 
})

app.delete('/delete5/:faq_id', (req, res) => {
    const faq_id = req.params.faq_id;
    db.query("DELETE FROM `cpw_faq` WHERE faq_id = ?", faq_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.get('/member05' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 5" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember5/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.get('/member05' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 5" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});









// กลุ่มผู้ดูแลระบบ (admin)

app.get('/member06' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 6" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember6/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});






// กลุ่มผู้บริหารโรงเรียน (Managers)

app.get('/member07' , (req , res) => {
    db.query("SELECT * FROM `cpw_user` WHERE agency_id = 7" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

app.delete('/deleteMember7/:userID', (req, res) => {
    const userID = req.params.userID;
    db.query("DELETE FROM `cpw_user` WHERE userID = ?", userID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});




// Login + Register


app.get('/user' , (req , res) => {
    db.query("SELECT * FROM `cpw_user`" , (err , result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});


app.post('/register' , (req , res) => {
    const name = req.body.name;
    const username = req.body.username;

    db.query(
        'SELECT INTO `cpw_user` (user_name , username) VALUES (? , ?)',
        [name , username] ,
        (err , result) => {
            console.log(err);
        } 
    );
} )

app.post('/login' , (req , res) => {
    const name = req.body.name;
    const username = req.body.username;
    
    db.query(
        'SELECT * FROM `cpw_user` WHERE `user_name` = ? AND `username` = ?',
        [name , username] , 
        (err , result) => {
            if (err) {
                res.send({err:err});
            }       
                if (result > 0) {
                    res.send(result);
                } else {
                    res.send({message: "Wrong username or username code!!?" });
                }
        }
    );
} )








//Set permission

app.post('/addmember', (req, res) => {
    const usercodeid = req.body.username; // Assuming your request body has a property 'username'
    const name = req.body.user_name; // Assuming your request body has a property 'user_name'
    const addagency = req.body.agency_id; // Assuming your request body has a property 'agency_name'
  
    db.query(
      "INSERT INTO `cpw_user` (`username`, `user_name`, `agency_id`) VALUES (?, ?, ?)",
      [usercodeid, name, addagency],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).send("Value inserted");
        }
      }
    );
  });











app.listen('3001' , ()=> {
    console.log('Server is running on port 3001')
} )