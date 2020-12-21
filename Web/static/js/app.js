// Use D3 read the Json file
//d3.json("../data/samples.json").then((givenData) => {


//-------LOADING IN CSV DATA TO TEST DASHBOARD--------//
// Load data from hours-of-tv-watched.csv
d3.csv("/Data/NYC2020crashes.csv").then(function(crashData) {

    //console.log(crashData);


var collisionID = crashData.map(data => data.CollisionID);
//console.log("collisionID", collisionID);
  
var borough = crashData.map(data => data.Borough);
console.log("borough", borough);


 var data = crashData;
  var crash = data.name;


  borough.forEach((Borough) => {
      d3.select("#selDataset").append("option").text(borough);
  })



  // Initializes original plots
  function init() {

      // Select Bronx to Start
      starterData = data.crashData.filter(data => data.Borough === "Bronx")[0];
      console.log(starterData);


      




      
  }

  init();


  //  Update Bar Chart
  d3.selectAll("#selDataset").on("change", updatePlot);

  // INSTRUCTIONS PART 2:  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  // This function is called when a dropdown menu item is selected
  function updatePlot() {

          // Dropdown Menu Selection
          var inputElement = d3.select("#selDataset");
          var inputValue = inputElement.property("value");
          console.log(inputValue);

      // Filter Selection
          dataset = data.samples.filter(sample => sample.id === inputValue)[0];
          console.log(dataset);

      // Selected Subject Data
          allSampleValues = dataset.sample_values;
          allOtuIds = dataset.otu_ids;
          allOtuLabels = dataset.otu_labels;

      // Select the top 10s
      top10Values = allSampleValues.slice(0, 10).reverse();
      top10Ids = allOtuIds.slice(0, 10).reverse();
      top10Labels = allOtuLabels.slice(0, 10).reverse();

      // Upate Bar Chart
      Plotly.restyle("bar", "x", [top10Values]);
      Plotly.restyle("bar", "y", [top10Ids.map(outId => `OTU ${outId}`)]);
      Plotly.restyle("bar", "text", [top10Labels]);

      // Update Bubble Chart
      Plotly.restyle('bubble', "x", [allOtuIds]);
      Plotly.restyle('bubble', "y", [allSampleValues]);
      Plotly.restyle('bubble', "text", [allOtuLabels]);
      Plotly.restyle('bubble', "marker.color", [allOtuIds]);
      Plotly.restyle('bubble', "marker.size", [allSampleValues]);

      // Subject Information
      metainfo = data.metadata.filter(sample => sample.id == inputValue)[0];

      // Refresh & Clear Out Filter
      d3.select("#sample-metadata").html("");

      // Display key-value pairs
      Object.entries(metainfo).forEach(([key, value]) => d3.select("#sample-metadata").append("p").text(`${key.toUpperCase()}: ${value}`));

  
  }
});
