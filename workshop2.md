# EnGRID
workshop#2: แสดงกราฟผู้ป่วย COVID 
1. ใช้ fetch สำหรับเรียก api 
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
ที่มา https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

2. การใช้งาน map กับข้อมูล array
```js
const map1 = array1.map(x => x * 2);
```
ที่มา https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

3. ใช้ amChart สำหรับสร้างกราฟ  https://www.amcharts.com/demos/

```html
    <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
```
```js
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    // Add data
    chart.data = [{
    "year": "1950",
    "value": -0.307
    }, {
    "year": "1951",
    "value": -0.168
    }, {
    "year": "1952",
    "value": -0.073
    }, {
    "year": "1953",
    "value": -0.027
    }, {
    "year": "1954",
    "value": -0.251
    }, {
    "year": "1955",
    "value": -0.281
    }, {
    "year": "1956",
    "value": -0.348
    }, {
    "year": "1957",
    "value": -0.074
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    var bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.valueY < 0){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    var range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();

}); // end am4core.ready()
```
ที่มา https://www.amcharts.com/demos/



ตัวอย่างโค้ดที่สำเร็จ
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>workshop1</title>
    <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        #chartdiv {
            width: 100%;
            height: 500px;
        }
    </style>
</head>

<body>
    <div id="chartdiv"></div>
</body>
```
```js
var url = "https://covid19.th-stat.com/api/open/timeline";

fetch(url).then(res => res.json()).then(json => {
    var dat = json.Data;
    let a = []
    dat.map(d => {
        let b = { 'date': d.Date, 'value': d.Confirmed }
        a.push(b)

    })
    console.log(a)

    chart(a)
})


function chart(data) {

    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.paddingRight = 20;

        // Add data
        chart.data = data;

        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;

        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.baseValue = 0;

        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "date";
        series.strokeWidth = 2;
        series.tensionX = 0.77;

        // bullet is added because we add tooltip to a bullet for it to change color
        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.tooltipText = "{valueY}";

        bullet.adapter.add("fill", function (fill, target) {
            if (target.dataItem.valueY < 0) {
                return am4core.color("#FF0000");
            }
            return fill;
        })
        var range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = -1000;
        range.contents.stroke = am4core.color("#FF0000");
        range.contents.fill = range.contents.stroke;

        // Add scrollbar
        var scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        chart.cursor = new am4charts.XYCursor();

    }); // end am4core.ready()
}
```