import Data from '../App.dataset'

//formatt the data for use in the solo chart
var wellData = function(wellName){
  var dataPoints = [];

  Data[wellName].forEach(function(cycle){
    dataPoints.push({x: cycle.cycle, y: cycle.fluorescence});
  });
  var result = {
    type: "line", 
    toolTipContent: "{well}  cycle: {x}, fluorescence: {y}",
    dataPoints: dataPoints
  };  

  return result;
}

//formatt the data for use in the overview chart
var overviewData = function(){
  var reformattedData = [];

  for(var well in Data){
    reformattedData.push(wellData(well));
  }

  return reformattedData;
}

const formattedOverviewData = overviewData();

export default formattedOverviewData
