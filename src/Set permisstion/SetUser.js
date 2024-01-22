import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Card from "@mui/material/Card";
import Menubar from "../MenuBar/MenuBar_Admin";
import { styled } from '@mui/material/styles';

import './SP.css';



export default function SetUser() {
  const [ users, setUsers ] = useState([]);
  const [visibility, setVisibility] = useState({});
 //---------------------------------------------------//
  const handleToggleVisibility = (id) => {
    setVisibility({
      ...visibility,
      [id]: !visibility[id],
    });
  };

  const [active, setActive] = useState({});

  const toggleActive = (id) => {
    setActive({
      ...active,
      [id]: !active[id],
    });
  };

  const ContainerStyle = {
    display : 'flex',
    flexDirect : 'row'
  }

  
   //---------------------------------------------------//

   const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  useEffect(() => {
    UsersGet()
  }, [])

  
  const UsersGet = () => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
        }
      )
  }

  const UpdateUser = id => {
    window.location = '/update/'+id
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }

    fetch('https://www.melivecode.com/api/users', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          UsersGet();
        }
      }
    )
  }

  return (
    <React.Fragment>
      <span class = "main" style={ContainerStyle}>
        <Menubar/>
      <CssBaseline />
      
      <aside style={ContainerStyle}>
  
      <Container sx={{ p : 2 ,  ml : 2 }}>
     <div>
      <Typography sx={{ fontSize : 26 }} variant="h5" component = "div">
          Set Permission
      </Typography>

      <Typography sx={{ fontSize : 14 }} color = "text.secondary" gutterBottom >
        กำหนดสิทธิ์ผู้ใช้งานภานในระบบ
      </Typography>
      </div>
        <Box sx={{ bgcolor: '#cfe8fc', height: '200vh' , width: '170vh' , p:2}}>

        <Card sx={{ maxWidth: 950 ,
            mt : 2 ,
            ml : 3 ,
            pt : 2 ,
            pl : 2 , 
          }}>

      <h1>จัดการสิทธิ์ผู้ดูแลระบบ / Set Admin</h1>   
      <div>

{/*------------- CPW App Data --------------------*/} 
    <Container sx={{ p:2 }} maxWidth="lg">    
      <Paper sx={{ p:2 }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              administer / ผู้ดูแลระบบ
            </Typography>
          </Box>
          <Box>
            <Link to="/create">
              <Button variant="contained" color="primary">
                add Member
              </Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="left">First</TableCell>
              <TableCell align="left">Last</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.ID}>
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <Avatar src={user.avatar} />
                  </Box>
                </TableCell>
                <TableCell align="left">{user.fname}</TableCell>
                <TableCell align="left">{user.lname}</TableCell>
                <TableCell align="left">{user.username}</TableCell>
                <TableCell align="center">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                    <Button onClick={() => UserDelete(user.id)}>Del</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Container>
{/*------------- CPW App Data --------------------*/}

              </div>
            <hr />
          </Card>

              
      <div class = "scroll-bg">
        <div class = "scroll-div">
          <div class = "scroll-object">
          <Card sx={{ maxWidth: 950 ,
            mt : 2 ,
            ml : 3 ,
            pt : 2 ,
            pl : 2 , 
          }}>
            <h2> STAY WITH ME - Miki Matsubara</h2>
              私は私 貴方は貴方と
昨夜言ってた そんな気もするわ
グレイのジャケットに
見覚えがある コーヒーのしみ
相変らずなのね
ショーウィンドウに 二人映れば
Stay with me...
真夜中のドアをたたき
帰らないでと泣いた
あの季節が 今 目の前
Stay with me...
口ぐせを言いながら
二人の瞬間を抱いて
まだ忘れず 大事にしていた
恋と愛とは 違うものだよと
昨夜言われた そんな気もするわ
二度目の冬が来て
離れていった貴方の心
ふり返ればいつも
そこに 貴方を感じていたの
Stay with me...
真夜中のドアをたたき
心に穴があいた
あの季節が 今 目の前
Stay with me...
淋しさまぎらわして
置いたレコードの針
同じメロディ 繰り返していた...
Stay with me...
真夜中のドアをたたき
帰らないでと泣いた
あの季節が 今 目の前
Stay with me...
口ぐせを言いながら
二人の瞬間を抱いて
まだ忘れず 暖めてた
Stay with me...
真夜中のドアをたたき
帰らないでと泣いた
あの季節が 今 目の前
Stay with me...

----------------------------------
<h2>NIGHT DANCER
  </h2>

どうでもいいような 夜だけど
響めき 煌めきと君も
まだ止まった 刻む針も
入り浸った 散らかる部屋も
変わらないね 思い出しては
二人 歳を重ねてた ah
また止まった 落とす針を
よく流した 聞き飽きるほど
変わらないね 変わらないで
いられたのは 君だけか ah
無駄話で はぐらかして
触れた先を ためらうように
足踏みして ズレた針を余所に
揃い始めてた 息が
どうでもいいような 夜だけど
響めき 煌めきと君も "踊ろう"
どうでもいいような 夜だけど
Ah 二人刻もう
Tu-tu-lu-tu-lu
透き通った 白い肌も
その笑った 無邪気な顔も
変わらないね 変わらないで
いられるのは 今だけか ah ah ah
見つめるほどに
溢れる メモリー
浮つく心に コーヒーを
乱れた髪 ヘア に 掠れたメロディー
混ざりあってよう もう一度
どうでもいいような 夜だけど
ときめき 色めきと君も "踊ろう"
どうでもいいような 夜だけど
Ah 二人刻もう
Tu-tu-lu-tu-lu
夜は長い おぼつかない
今にも止まりそうな ミュージック
君といたい 溺れてたい
明日がこなくたって もういいの
どうでもいいような 夜だけど
響めき 煌めきと君も "踊ろう"
どうでもいいような 夜だけど ah
Ah 愛して
どうでもいいから 僕だけを
ふらつき よろめきながらも "踊ろう"
どうでもいいような 夜だけど
Ah 二人刻もう

              </Card>
          </div>
        </div>
        </div>  
        </Box>
      </Container>
      </aside> 
   
</span>
</React.Fragment>

  );
}