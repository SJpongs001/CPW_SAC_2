import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import { Card, Grid, Stack, Typography ,Box, CardContent, TableHead} from '@mui/material';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490 , 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300 ,2400, 1398, 9800];

const xLabels = [
  'JAN', 'FEB', 'MAR', 'MAY', 'JUNE', 
  'JULY', 'AUG', 'SEPT', 'NOV', 'DEC',
];



export default function ChartYear() {

  function createData(  AgencyID, AgencyName , Total) {
    return { AgencyID ,AgencyName, Total };
  }

  const rows = [
    createData( 1 ,'ฝ่ายวิชาการ / โครงการพิเศษ', 159),
    createData( 2 ,'ฝ่ายโภชนาการ / พัสดุ สหกรณ์', 159),
    createData( 3 ,'ฝ่ายปกครอง / กิจการนักเรียน', 159),
    createData( 4 ,'ฝ่ายธุรการ / ฝ่ายบัญชี ', 159),
    createData( 5 ,'สารสนเทศ / บริการ', 159),
  ];
  

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


   return(
   <div>

  <Grid container spacing={2}> 

  <Grid item xs={7}  sm={8.5} >
  <Card sx={{m:5, p:4 , width:"90%"}} >
  <BarChart
      width={780}
      height={500}
      series={[
        {
          data: pData,
          label: 'ตอบกลับได้',
          id: 'pvId',
          yAxisKey: 'leftAxisId',
          color: '#69f0ae'
        },
        {
          data: uData,
          label: 'ตอบกลับไม่ได้',
          id: 'uvId',
          yAxisKey: 'rightAxisId',
          color: '#e53935'
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />

  </Card>
  </Grid>

  <Grid xs={3} sx={{p:2 , m:2}}>
    <Stack>
      <Card sx={{p:3,  pt:1,pb:4, mt:3, width:"160%"}}>
        <CardContent>
        3 อันดับข้อความที่ติดต่อถึงหน่วยงาน
        </CardContent>
        
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'ฝ่ายวิชาการ' },
            { id: 1, value: 15, label: 'ฝ่ายโภชนาการ' },
            { id: 2, value: 20, label: 'ฝ่ายธุรการ' },
          ],
        },
      ]}
      
      width={380}
      height={180}
    />
        </Card>

        <Card sx={{p:3,  pt:1,pb:4, mt:3, width:"160%"}}>
        <CardContent>
        ประเภทของข้อความในระบบ
        </CardContent>
        
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'ตอบกลับได้' },
            { id: 1, value: 15, label: 'ตอบกลับไม่ได้' },
          ],
        },
      ]}
      width={360}
      height={170}
    />
        </Card>
        
    </Stack>
  </Grid>

{/*   
  <Grid xs={2} sx={{p:2, m:3}}>
    <Stack>
    <Card sx={{p:3 , m:2 , width:500 }}>
    <FormControl sx={{width:490}}>
  <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Select Year"
    onChange={handleChange}
  >
    <MenuItem value={2020}>ข้อมูลปี 2020</MenuItem>
    <MenuItem value={2021}>ข้อมูลปี 2021</MenuItem>
    <MenuItem value={2022}>ข้อมูลปี 2022</MenuItem>
  </Select>
</FormControl>


  <Card variant="outlined" color="##03a9f4" sx={{p:3,  pt:1,pb:4, mt:3, borderRadius:2, borderColor:"#2979ff"
      , maxWidth:450 , maxHeight:280,
        width:440 , height:50
    }}>
      <Box sx={{p:1}}>
      <InputLabel sx={{fontSize:14}}> ข้อความทั้งหมดที่เข้ามาในระบบ</InputLabel>
      <Typography variant="h4" color="#2979ff"
        placement="right-end"
      >
        5000
      </Typography>
      </Box>
      </Card>

    </Card>

    <Card sx={{p:3 , m:2 , width:500 , height:410 }}>
    <CardContent>
      จำนวนคำถามที่พบบ่อย
    </CardContent>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="simple table">
    <TableHead>
    <TableRow>
      <TableCell align="right">รหัส</TableCell>
      <TableCell align="center" >ชื่อหน่วยงาน</TableCell>
      <TableCell align="right" >จำนวนข้อความ</TableCell>
    </TableRow>
    </TableHead>

    <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.AgencyID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.AgencyID}
              </TableCell>
              <TableCell align="right">{row.AgencyName}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    
    </Table>
    </TableContainer>
      

    </Card>
    </Stack>
    

  </Grid> */}
  </Grid>    
   </div>
   )
}