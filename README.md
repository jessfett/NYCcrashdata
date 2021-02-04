# NYC Crash Data: An Analysis

## Task
Analyze the NYC Motor Vehicle Crashes for April of 2020. After completing the ETL portion, create visualizations that show analysis of the data and produce an output web deployment via Heroku. 

## Dependencies
- Python
  - Jupyter Notebook/Lab
- SQL
  - PostgresQL
- HTML/CSS/BootStrap
  - VS Code
- Heroku
  - Deployment

## Libraries
- Pandas
- Numpy
- Seaborn
- MatPlotLib
- SkLearn
  - Linear Regression
  - MSE, R2
  - Tree
  - RandomForestClassifier
  - DecisionTreeClassifier
  - PlotTree
  - Train_Test_Split
  - StandardScaler
- Flask
- Flask Cors
- Javascript Libraries
  - JQuery
  - Chart.js
  - AmCharts.js
  - D3
  - Mapbox
  - Leaflet

## DataSource
[NYC OpenData - Motor Vehicle Crashes](https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95)
  - Downloaded as a CSV File
  - 4,122 rows of data, 25 Columns
  
## Process
- ETL
  - Download CSV
  - Clean via Python/Pandas
  - Load in PostGresQL
- Visualizations
 - Create a visualization comparing the crash totals/injury totals by borough, with additional breakdown of normalized data by 100,000 residents per borough. 
    - Used Chart.js
  - Create a double pie chart that shows the percentage of crashes by borough, that when selected opens a second smaller pie chart with the breakdown of injury categories by borough.
    - Used AmCharts.js
  - Create a bar chart of the categorical data, Contributing Factors (top 10 factors)
    - Used AmCharts.js
  - Create a map output of location of crashes with designated boroughs.
    - Used MapBox GL
- Deployment
  - Host the Web Output via Heroku Deployment

## Heroku Deployment
[NYC Motor Vehicle Data: An Analysis](https://nyc-crashdata-2020.herokuapp.com/)

## Presentation
[Presentation](https://docs.google.com/presentation/d/1bIiPudrN-VoYUcMg5MpSYgBYjmHrwSVUWzxv0OJRc5o/edit?usp=sharing)
