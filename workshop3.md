# EnGRID
workshop#3: intro tp leaflet

leafletjs เป็น opensource web mapping library สามารถเข้าไปอ่านได้ที่นี่ https://leafletjs.com

1. เรียก Leaflet CSS ที่ <head>
```html
<head>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
</head>
```
2. เพิ่ม Leaflet JS ก่อน </body>
```html
<body>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>
</body>
```
3. สร้าง <div> ใน <body> และกำหนด id="map" เพื่อให้แผนที่ที่เราต้องการสร้างแสดงใน <div> นี้
```html
    <div id="map"></div>
```
4. สร้าง style เพื่อกำหนดขนาดของแผนที่ที่เราต้องการแสดงผล
```html
<style>
    #map {
        height: 400px;
        background-color: lightgray;
    }
</style>
```
5. การใช้ JavaScript object 
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
6. สร้างtag <script> ก่อน </body> เพื่อเขียน javascript สำหรับสร้างแผนที่ของเรา (ให้แน่ในว่าสร้างหลังการเรียก Leaflet) และประกาศตัวแปร map ให้มีค่าเป็น L.map()
```html
    <script>
        var map = L.map('map').setView([98.950014,18.803273], 13);
    </script>
```
ึ7. เรียก basemap มาแสดงผลด้วย L.tileLayer
```js
        var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        osm.addTo(map);
```

