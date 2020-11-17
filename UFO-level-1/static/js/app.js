// from data.js
var tableData = data;

// Create variables for the Input, Button, and Table elements
var inputElem = d3.select(".form-control")
var buttonElem = d3.select("#filter-btn")
var tbodyElem = d3.select("tbody")


// Handler for button Click
buttonElem.on("click", function() {
    // Clear the table body
    tbodyElem.html("")
    // Get the value of the input
    var inputVal = inputElem.property("value");
    // Filter the data based on the input
    var filtData = data.filter(sighting =>sighting.datetime == inputVal)

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
    // var newRow = tbodyElem.append("tr");
    // newRow.append("td").text("New Data");
    // newRow.append("td").text("New Data 2 ");

    // newRow = tbodyElem.append("tr");
    // newRow.append("td").text("New ROW Data");
    // newRow.append("td").text("New ROW Data 2 ");

})