am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chart-div", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "factor";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "factor";
    series.dataFields.valueX = "crashes";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    
    var labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text = "{values.valueX.workingValue.formatNumber'#.0as')}";
    labelBullet.locationX = 1;
    
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target){
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    categoryAxis.sortBySeries = series;
    chart.data = [
        {
          "factor": "Driver Distraction",
          "crashes": 583
        },
        {
          "factor": "Failure To Yield",
          "crashes": 148
        },
        {
          "factor": "Backing Unsafely",
          "crashes": 121
        },
        {
          "factor": "Traffic Control Disregard",
          "crashes": 92
        },
        {
          "factor": "Unsafe Speed",
          "crashes": 80
        },
        {
          "factor": "Passing or Lane Usage Improper",
          "crashes": 80
        },
        {
          "factor": "Other Vehicular",
          "crashes": 73
        },
        {
          "factor": "Passing Too Closely",
          "crashes": 73
        },
        {
          "factor": "Following Too Closely",
          "crashes": 60
        },
        {
          "factor": "Alcohol Involvement",
          "crashes": 46
        },
        {
          "factor": "Other",
          "crashes": 327
        }
      ]
    
    
    
    });

