import { ResponsiveContainer ,
    BarChart ,
    Bar ,
    XAxis ,
    YAxis ,
    Tooltip ,
    CartesianGrid ,
    Legend
    } from 'recharts'

    const Array = [
    {
    month: "January",
    ตอบกลับได้: 35 ,
    ตอบกลับไม่ได้: 25,
    },
    {
    month: "Febuary",
    ตอบกลับได้: 90,
    ตอบกลับไม่ได้: 30,
    },
    {
    month: "March",
    ตอบกลับได้: 23,
    ตอบกลับไม่ได้: 35,
    },
    {
    month: "April",
    ตอบกลับได้: 60,
    ตอบกลับไม่ได้: 45,
    },
    {
    month: "May",
    ตอบกลับได้: 68,
    ตอบกลับไม่ได้: 50,
    },
    {
    month: "June",
    ตอบกลับได้: 40,
    ตอบกลับไม่ได้: 25,
    },
    {
    month: "July",
    ตอบกลับได้: 34,
    ตอบกลับไม่ได้: 20,
    },
    {
    month: "August",
    ตอบกลับได้: 20,
    ตอบกลับไม่ได้: 60,
    },
    {
    month: "September",
    ตอบกลับได้: 30,
    ตอบกลับไม่ได้: 65,
    },
    {
    month: "October",
    ตอบกลับได้: 80,
    ตอบกลับไม่ได้: 55,
    },
    {
    month: "November",
    ตอบกลับได้: 40,
    ตอบกลับไม่ได้: 35,
    },
    {
    month: "December",
    ตอบกลับได้: 50,
    ตอบกลับไม่ได้: 44,
    }
    ]
    
    export default function ChartYear(){
    return(
    <div>
    <ResponsiveContainer width="80%" aspect = {1.5}>
    <BarChart data= {Array}width={300} height={400} >
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 20, right: -100, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 4, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis datakey = "month" fill="#8884d8" barSize={50}/>
    <YAxis />
    <Bar dataKey="ตอบกลับได้" fill="#00C49F" />
    <Bar dataKey="ตอบกลับไม่ได้" fill="#ff7f6e" />
    </BarChart>
    </ResponsiveContainer>
    </div>
    )
    }