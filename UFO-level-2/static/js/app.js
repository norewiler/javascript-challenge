// from data.js
var tableData = data;

// Create variables for the Input, Button, and Table elements
var dateElem = d3.select("#datetime")
var cityElem = d3.select("#cityFilt")
var stateElem = d3.select("#stateFilt")
var countryElem = d3.select("#countryFilt")
var shapeElem = d3.select("#shapeFilt")
var buttonElem = d3.select("#filter-btn")
var tbodyElem = d3.select("tbody")



// Handler for button Click
buttonElem.on("click", function() {
    // Clear the table body
    tbodyElem.html("")
    // Get the value of the inputs
    var dateVal = dateElem.property("value");
    var cityVal = cityElem.property("value");
    var stateVal = stateElem.property("value");
    var countryVal = countryElem.property("value");
    var shapeVal = shapeElem.property("value");
    
    // Initialize a variable for the filtered data
    var filtData = data;
    // Filter the data based on the inputs
    if (dateVal.length > 0){
        filtData = filtData.filter(sighting =>sighting.datetime == dateVal)
    }
    if (cityVal.length > 0){
        filtData = filtData.filter(sighting =>sighting.city == cityVal)
    }
    if (stateVal.length > 0){
        filtData = filtData.filter(sighting =>sighting.state == stateVal)
    }
    if (countryVal.length > 0){
        filtData = filtData.filter(sighting =>sighting.country == countryVal)
    }
    if (shapeVal.length > 0){
        filtData = filtData.filter(sighting =>sighting.shape == shapeVal)
    }

    // Add a row to the table with the info for eachsighting in the filtered data
    filtData.forEach(entry =>{
        // Get the info for each sighting
        var dateTD = entry.datetime;
        var cityTD = entry.city;
        var stateTD = entry.state;
        var countryTD = entry.country;
        var shapeTD = entry.shape;
        var durationTD = entry.durationMinutes;
        var commentsTD = entry.comments;
        
        // Add a new row with the data
        var newRow = tbodyElem.append("tr");
        newRow.append("td").text(dateTD);
        newRow.append("td").text(cityTD);
        newRow.append("td").text(stateTD);
        newRow.append("td").text(countryTD);
        newRow.append("td").text(shapeTD);
        newRow.append("td").text(durationTD);
        newRow.append("td").text(commentsTD);
    });

})