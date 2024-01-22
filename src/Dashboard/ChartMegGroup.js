import { ResponsiveContainer ,
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


    const MessagesGroup = [
    {
        Group:"คำถาม" ,
        Value: 48
    },
    {
        Group:"แสดงความคิดเห็น" ,
        Value: 52
    },
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
        
        export default function ChartMegGroup() {
        
            return(
        <div>
        <ResponsiveContainer width="100%" aspect = {2}>
        <PieChart width= "100%" height="100%"> {/**width={830} height={350} */}
        <Pie data={MessagesGroup} dataKey="Value" nameKey="Group" cx="50%" cy="50%" outerRadius={90} fill='#00C49F'>
            {MessagesGroup.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        </PieChart>
        </ResponsiveContainer>
    
    </div>
            )
        }
    