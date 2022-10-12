import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';
import ChartDetails from '../ChartDetails/ChartDetails';

const Chart = () => {
    const alldata = useLoaderData()
    // console.log(alldata)
    const datas = alldata.data;

    // console.log(datas)
    return (
        <div>
                <div>

                <h1 className='text-5xl mt-8'>Quiz summary in chart  </h1>
                </div>
            <div className='md:flex justify-center mt-10'>

                <ResponsiveContainer width={350} height={400} >

                    <LineChart data={datas}>
                        <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"></XAxis>
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </div>
    );
};

export default Chart;