import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import Paper from '@mui/material/Paper';
import React , { useState } from 'react';
import { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';



export default function UserBox() {
  const [items, setItems] = useState([]);

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
  //---------------------------------------------------//

  useEffect(() => {
    UserGet()
      } , [])

      const UserGet = () => {
        fetch("https://www.melivecode.com/api/users")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
        }
    

      const UserDelete = id => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "id": id
        });
        
        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://www.melivecode.com/api/users/delete", requestOptions)
          .then(response => response.json())
          .then(result => {
              alert(result['message'])
              if (result['status'] === 'ok') {
                  UserGet()
              }
          })
          .catch(error => console.log('error', error));


      }

        
   return (
    <React.Fragment>
      <CssBaseline />
      <h1 align = "center">
        จัดการสิทธิ์เข้าถึง / Set Permisstion
      </h1>
      <fieldset>
      <h1>
        จัดการสิทธิ์ผู้ดูแลระบบ / Set Admin
      </h1>
      
      <div>
        <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element1") &
                    toggleActive("element1")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                > 
                <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                administer 
            </Button>
            </Grid>
                </div>
              </div>

<div style={{ paddingBottom: "0.75%" }}>
                {visibility.element1 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1"> </div>
                    <div className="col-sm-10">
{/**----------CPW System-------------*/}
                    <Container maxWidth="lg" sx={{p: 2}}>
                    <Paper sx = {{p: 2}}>
                    <Box display= 'flex'>
                    <Box sx={ {flexGrow: 1 }} >
                    <Typography variant="h6" gutterBottom>
                        ผู้ดูแล / Admin
                    </Typography>
                  </Box>
                 <Box>
                  <Link href='create'>
                    <Button variant='contained'>Create</Button>
                  </Link>    
                    </Box>
                  </Box>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Avata&nbsp;</TableCell>
            <TableCell>ID (100g serving)</TableCell>
            <TableCell align="right">Fname</TableCell>
            <TableCell align="right">Lname&nbsp;</TableCell>
            <TableCell align="right">Username&nbsp;</TableCell>
            
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                <Avatar alt={row.username} src= {row.avatar} />
                </Box>
              
                </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              
              <TableCell align="right">
                <ButtonGroup variant="outlined" aria-label = "outline button group">
                    <Button>Edit</Button>
                    <Button onClick={() => UserDelete(row.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
              </TableRow>
            ))}
                </TableBody>
                </Table>
                </TableContainer>

                 </Paper>

                </Container>       
          </div>
            </div>
              )}
    </div>
    <hr />
    </div>
      
      <h1>
        จัดการสิทธิ์ผู้บริหาร / Set Managers
      </h1>  
      <div>
        <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element2") &
                    toggleActive("element2")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                > 
                <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Managers
            </Button>
            </Grid>
                </div>

              </div>

<div style={{ paddingBottom: "0.75%" }}>
                {visibility.element2 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1"> </div>
                    <div className="col-sm-10">
{/**----------CPW System-------------*/}
                    <Container maxWidth="lg" sx={{p: 2}}>
                    <Paper sx = {{p: 2}}>
                    <Box display= 'flex'>
                    <Box sx={ {flexGrow: 1 }} >
                    <Typography variant="h6" gutterBottom>
                        ผู้บริหาร / Managers
                    </Typography>
                  </Box>
                 <Box>
                  <Link href='create'>
                    <Button variant='contained'>Create</Button>
                  </Link>    
                    </Box>
                  </Box>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Avata&nbsp;</TableCell>
            <TableCell>ID (100g serving)</TableCell>
            <TableCell align="right">Fname</TableCell>
            <TableCell align="right">Lname&nbsp;</TableCell>
            <TableCell align="right">Username&nbsp;</TableCell>
            
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                <Avatar alt={row.username} src= {row.avatar} />
                </Box>
              
                </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              
              <TableCell align="right">
                <ButtonGroup variant="outlined" aria-label = "outline button group">
                    <Button>Edit</Button>
                    <Button onClick={() => UserDelete(row.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
              </TableRow>
            ))}
                </TableBody>
                </Table>
                </TableContainer>

                 </Paper>

                </Container>       
          </div>
            </div>
              )}
    </div>
    <hr />
    </div>

      <h1>
        จัดการสิทธิ์ผู้ใช้หน่วยงาน / Set User Agency
      </h1>
      
      <div>
        <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element3") &
                    toggleActive("element3")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                > 
                <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                User Agency
            </Button>
            </Grid>
                </div>

              </div>

<div style={{ paddingBottom: "0.75%" }}>
                {visibility.element3 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1"> </div>
                    <div className="col-sm-10">
{/**----------CPW System-------------*/}
                    <Container maxWidth="lg" sx={{p: 2}}>
                    <Paper sx = {{p: 2}}>
                    <Box display= 'flex'>
                    <Box sx={ {flexGrow: 1 }} >
                    <Typography variant="h6" gutterBottom>
                        ผู้ดูแล / Admin
                    </Typography>
                  </Box>
                 <Box>
                  <Link href='create'>
                    <Button variant='contained'>Create</Button>
                  </Link>    
                    </Box>
                  </Box>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">Avata&nbsp;</TableCell>
            <TableCell>ID (100g serving)</TableCell>
            <TableCell align="right">Fname</TableCell>
            <TableCell align="right">Lname&nbsp;</TableCell>
            <TableCell align="right">Username&nbsp;</TableCell>
            
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                <Avatar alt={row.username} src= {row.avatar} />
                </Box>
              
                </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              
              <TableCell align="right">
                <ButtonGroup variant="outlined" aria-label = "outline button group">
                    <Button>Edit</Button>
                    <Button onClick={() => UserDelete(row.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
              </TableRow>
            ))}
                </TableBody>
                </Table>
                </TableContainer>

                 </Paper>

                </Container>       
          </div>
            </div>
              )}
    </div>
    <hr />
    </div>
      </fieldset>



    </React.Fragment>
  );
}

