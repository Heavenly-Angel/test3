  	

  	var xml1 = new XMLHttpRequest();
        xml1.open("GET", "Device2189.json", false); // Crescent Heights Elementary School
        xml1.send(null);
        var json1 = JSON.parse(xml1.responseText);
                
        //make a copy of obj so that I can check if its empty or not in order to continue the logic
	
	//const obj = ["2022-05-10 17:24:13", "2022-05-10 17:04:01", "2022-05-10 16:43:49", "2022-05-10 16:23:37", "2022-05-10 16:03:25"];
	//it is in descending order
	var timeArray1 = [];
	var yearArray1 = [];
	var monthArray1 = [];
	var dayArray1 = [];
	var hourArray1 = [];
	var minuteArray1 = [];
	
	var arrayLength = json1.length;
	

	for (let i = 0; i < arrayLength; i++) {
		timeArray1[i] = json1[i].readingDateTimeLocal;
	}
	console.log("The array length: " + arrayLength);
	for (let j = 0; j < arrayLength; j++) {
		tempString = timeArray1[j];
		yearArray1[j] = tempString.substring(0, 4);
		monthArray1[j] = (String) (parseInt(tempString.substring(5, 7)) - 1);
		dayArray1[j] = tempString.substring(8, 10);
		hourArray1[j] = tempString.substring(11, 13);
		minuteArray1[j] = tempString.substring(14, 16);



	}
	/*
	console.log(yearArray);
	console.log(monthArray);
	console.log(dayArray);
	console.log(hourArray);
	console.log(minuteArray);
	*/

	var dataPointsArray1 = [];//array, 2022-05-10 17:24:13

	for (k = 0; k < arrayLength; k++) {
		dataPointsArray1[k] = {x: new Date( yearArray1[k], monthArray1[k], dayArray1[k], hourArray1[k], minuteArray1[k] ), y: json1[k].aqi};
	}

		
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Crescent Heights Elementary School"
      },

      axisX:{
        //title: "time",
        //gridThickness: 2,
        interval:6, 
        intervalType: "hour",        
        valueFormatString: "hh TT", 
        //labelAngle: -20
      },
      axisY:{
        title: "Hourly Air Quality Index"
      },
      data: [
      {        
        type: "line",
        dataPoints: dataPointsArray1 //Array I made so make sure to change!!
      }
      ]
    });

chart.render();
}