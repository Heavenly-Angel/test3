  	

  	var xml = new XMLHttpRequest();
        xml.open("GET", "Device2204.json", false); // Crescent Heights Elementary School
        xml.send(null);
        var json = JSON.parse(xml.responseText);
                
        //make a copy of obj so that I can check if its empty or not in order to continue the logic
	
	//const obj = ["2022-05-10 17:24:13", "2022-05-10 17:04:01", "2022-05-10 16:43:49", "2022-05-10 16:23:37", "2022-05-10 16:03:25"];
	//it is in descending order
	var timeArray = [];
	var yearArray = [];
	var monthArray = [];
	var dayArray = [];
	var hourArray = [];
	var minuteArray = [];
	
	var arrayLength = json.length;
	

	for (let i = 0; i < arrayLength; i++) {
		timeArray[i] = json[i].readingDateTimeLocal;
	}
	console.log(arrayLength);
	for (let j = 0; j < arrayLength; j++) {
		tempString = timeArray[j];
		yearArray[j] = tempString.substring(0, 4);
		monthArray[j] = (String) (parseInt(tempString.substring(5, 7)) - 1);
		dayArray[j] = tempString.substring(8, 10);
		hourArray[j] = tempString.substring(11, 13);
		minuteArray[j] = tempString.substring(14, 16);



	}
	/*
	console.log(yearArray);
	console.log(monthArray);
	console.log(dayArray);
	console.log(hourArray);
	console.log(minuteArray);
	*/

	dataPointsArray = [];//array, 2022-05-10 17:24:13

	for (k = 0; k < arrayLength; k++) {
		dataPointsArray[k] = {x: new Date( yearArray[k], monthArray[k], dayArray[k], hourArray[k], minuteArray[k] ), y: json[k].aqi};
	}

		
window.onload = function () {
    var chart = new CanvasJS.Chart("device2204",
    {
      title:{
        text: "Larchmont Elementary School"
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
        dataPoints: dataPointsArray //Array I made so make sure to change!!
      }
      ]
    });

chart.render();
}