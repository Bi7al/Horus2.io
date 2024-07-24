import React, { useState } from 'react';
import { TopSideCharts } from "./TopSideCharts"
import BottomCharts from './BottomCharts';
import "./Dashboard.css"
function DashboardComponent() {




    return (

        <>
            <TopSideCharts />
            <BottomCharts />
        </>
    )
}

export default DashboardComponent;



// For more Info on how to configure the Charts visit Charts / Material UI



