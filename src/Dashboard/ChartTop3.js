import { ResponsiveContainer ,
    BarChart ,
    Bar ,
    XAxis ,
    YAxis ,
    Tooltip ,
    CartesianGrid ,
    Legend ,
    Pie ,
    PieChart ,
    Cell
    } from 'recharts'
    const TopAgency = [
    {
    AgencyName : "ศูนย์สารสนเทศ",
    message : 50,
    } ,
    {
    AgencyName : "ฝ่ายการเงิน",
    message : 30,
    } ,
    {
    AgencyName : "โภชนาการ",
    message : 20,
    } ,
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    {`${(percent * 100).toFixed(0)}%`}
    </text>
    );
    };
    export default function ChartYop3() {
    return(
    <div>
    <ResponsiveContainer width="100%" aspect = {2}>
    <PieChart width= "100%" height="100%"> {/**width={830} height={350} */}
    <Pie data={TopAgency} dataKey="message" nameKey="AgencyName" cx="50%" cy="50%" outerRadius={80} fill='#00C49F'>
    {TopAgency.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))} </Pie>
    </PieChart>
    </ResponsiveContainer>
    </div>
    );
    }