import React from 'react'
import CanvasJS from 'canvasjs'
import formattedOverviewData from '../helpers/chartHelpers'

class Overview extends React.Component {
  render(){
    const chart = new CanvasJS.Chart("chartContainer",
    {
      zoomEnabled: true,
      title:{
      text: "qPCR Overview Chart"  
      },
      data: {formattedOverviewData}
    });

    return chart;
  }
}

export default Overview
