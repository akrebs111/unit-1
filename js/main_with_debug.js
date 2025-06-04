//Alex Krebs 6/4/2025
//Lesson 2 Debugging Activity

//initialize function called when the script loads
function initialize(){
    let cityPop = cities();
    addColumns(cityPop);
    addEvents();
};

//function to create a table with cities and their populations
function cities(){
    //cityPop var to store city and population array
       var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

//create the table with header and array data
    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
     for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; 
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; 
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv =  document.getElementById("mydiv");
    myDiv.appendChild(table);
//return the cityPop data for any potential  changes
return cityPop;
};

//addColumn function to expand on cityPop data
function addColumns(cityPop){
    //each row of the table is included for the loop
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
            //inserts the new column that will contain the new data
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
            //create a variable to store the data for the new column
    		var citySize;
            //loop to assign any population values less than 100000 as Small
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
            //else if to assign any population values greater thanb 500000 as Medium
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
            //else to assign the remaining values as Large
    		} else {
    			citySize = 'Large';
    		};
            //inserts the correspodning citySize value to each row in the table
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};
//function to create mouse over and click events for webapage
function addEvents(){
    //selects the table variable we created earlier and adds the mouse over afffect with a built in function for the affect.
	document.querySelector("table").addEventListener("mouseover", function(){
		//creates a color variable that will store rgb values
		var color = "rgb(";
        //for loop to assign random color scheme using rbg values
		for (var i=0; i<3; i++){
            //random assigned 3 random integers between 0 and 255
			var random = Math.round(Math.random() * 255);
            //adds the 3 random numbers 
			color += random;
            //adds commas to seperate the 3 rbg values that were randomly created
			if (i<2){
				color += ",";
			// adds closing parathesis to rbg(" 
			} else {
				color += ")";
		};
        //random color style is applied to the table
		document.querySelector("table").style.color = color;
        
	}});
    //function to display a pop when the table is clicked
	function clickme(){
        //pop up text
		alert('Hey, you clicked me!');
	};
    //create  the eventlistner type click for the table variable
	document.querySelector("table").addEventListener("click", clickme)
};

//call the initialize function when the window has loaded
window.onload = initialize;