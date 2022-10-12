import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ChartDetails = ({data}) => {
    const total = data.total;
    const name = data.name;
    console.log(data)
    return (
        <div>
            <LineChart width={500} height={400} data={total}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey={name} />
            <YAxis />
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default ChartDetails;