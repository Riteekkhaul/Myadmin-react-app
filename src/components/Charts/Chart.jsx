import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


 const Chart =({title,data,dataKey,grid}) => {
               
            
    return (

        <div className="chart">
            <h3 className="charttitle">{title} </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
              { grid &&      <CartesianGrid stroke="#o0dfdf"  strokeDasharray="5 5"/>    }
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;