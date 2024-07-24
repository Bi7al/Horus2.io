import React, { useState } from 'react'
import { LineChart } from '@mui/x-charts';

export function TopSideCharts() {
    const [result, setResult] = useState({
        value: '182%',
        profit: true,
    })
    const [consumption, setConsumption] = useState({
        value: '2%',
        increase: false,
    })
    const xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //values for x-axis
    const yValues = [1, 5.5, 2, 8.5, 1.5, 6, 3, 4, 7, 1, 5, 6]; //values for y-axis
    const [lineValue, setLineValues] = useState({
        xValues: xValues,
        yValues: yValues,
    })
    let finalVerdict; //for line Chart
    if (result.profit) {
        finalVerdict = <><div className='profit d-flex align-items-center' style={{ color: 'green' }}>Profit : +{result.value}</div></>
    } else {
        finalVerdict = <div className='loss d-flex align-items-center' style={{ color: 'red' }}>Loss : -{result.value}</div>
    }
    //For Statistical Purpose
    let finalConsumption;
    if (consumption.increase) {
        finalConsumption = <div className='increase d-flex align-items-center' style={{ color: 'green' }}>Consumption : -{consumption.value}</div>
    } else {
        finalConsumption = <div className='decrease d-flex align-items-center' style={{ color: 'red' }}>Consumption : +{consumption.value}</div>
    }
    return (< div className="lines " >
        <div className="line1">
            <h5>Line Chart</h5>
            <p>Month: Along X-axis <br />Corresponding Value: Along Y-axis</p>
            {finalVerdict}
            <LineChart
                xAxis={[{ data: lineValue.xValues }]}
                series={[
                    {
                        data: lineValue.yValues,
                        color: 'rgba(74, 58, 255, 1)',
                        area: true
                    },
                ]}
                margin={{
                    left: 30,
                    top: 20,
                }}
                height={200}
                width={600}
                grid={{ vertical: false, horizontal: true }}

            />
        </div>
        <div className="line2">
            <div><p className='text-muted m-0'>Statistics</p>
                <h6>Consumption Evolution</h6>
                {finalConsumption}
            </div>
        </div>
    </div >);
}

export default TopSideCharts
