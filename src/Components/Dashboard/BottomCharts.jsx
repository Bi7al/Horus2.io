import React, { useState } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
function BottomCharts() {
    //For Pie 1
    const data = [
        { id: 0, value: 15, label: 'Consumption A', color: "rgba(150, 45, 255, 1)", },
        { id: 1, value: 65, label: 'Consumption B', color: "rgba(74, 58, 255, 1)" },
        { id: 2, value: 20, label: 'Consumption C', color: "rgba(224, 198, 253, 1)" },
    ];
    const avg = (data[0].value + data[1].value + data[2].value) / 3
    //For Pie 2
    const data2 = [
        { id: 0, value: 25, color: "rgba(150, 45, 255, 1)", },
        { id: 2, value: 15, color: "rgba(224, 198, 253, 1)" },// total pie = 25+ 15 =50
    ];
    const [heatingtemp, setTemp] = useState(25)
    // For Bar Chart
    const xValues = [{ scaleType: 'band', data: ['Lamp', 'Heater', 'Vent'] }]  //Increase Width in case of increasing Values Same goes for Height
    const yValues = [{ data: [18, 30, 25] }]






    return (
        <div className="other">
            <div className="pie">
                <h6>Consumption Statistics(KWs)</h6>
                <Pie1 data={data} centraltext={`Avg : ${avg.toFixed(2)}kW`} />
            </div>
            <div className="average-temp">
                <h6>Average Heating Temperature  </h6>
                <AvgTemp centraltext={heatingtemp} data={data2} />
            </div>
            <div className="bar">
                <h6>Statistics</h6>
                <b>Active Devices</b>
                <BarChart
                    xAxis={xValues}
                    series={yValues}
                    width={300}
                    height={280}
                    grid={{ vertical: true }}
                    margin={{
                        left: 30,
                        right: 30,
                        top: 20,
                        bottom: 30,
                    }}
                />
            </div>
        </div>
    )
}

export default BottomCharts






// PIE Chart for Consumption Data

export function Pie1({ data, centraltext }) {
    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 12,
        fontWeight: "bold"
    }));
    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left - 65 + width / 2} y={top - 10 + height / 2}>
                {children}
            </StyledText>
        );
    }
    return (
        <PieChart
            colors={['rgba(224, 198, 253, 1)', 'rgba(74, 58, 255, 1)', 'rgba(150, 45, 255, 1)']}

            series={[
                {
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    data,
                    innerRadius: 50,
                    outerRadius: 120,
                    paddingAngle: 0,
                    cornerRadius: 5,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 100,
                    cy: 90,
                },
            ]}
            margin={{
                left: 40,
                right: 80,
                top: 40,
                bottom: 0,
            }}
            width={450}
            height={250}
        ><PieCenterLabel>{centraltext}</PieCenterLabel></PieChart>
    );
}



// PIE Chart For Average Temprature
export function AvgTemp({ centraltext, data }) {

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 22,
        fontWeight: "bold"
    }));
    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width + 10 / 2} y={top + height / 2}>
                {children}
            </StyledText>
        );
    }
    return (
        <PieChart
            colors={['rgba(224, 198, 253, 1)', 'rgba(74, 58, 255, 1)', 'rgba(150, 45, 255, 1)']}

            series={[
                {
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    data,
                    innerRadius: 50,
                    outerRadius: 65,
                    paddingAngle: 0,
                    cornerRadius: 5,
                    startAngle: -150,
                    endAngle: 150,
                    cx: 100,
                    cy: 90,
                },
            ]}

            width={200}
            height={200}
        >
            <PieCenterLabel>{centraltext}°C ­     </PieCenterLabel>
        </PieChart >
    );
}
