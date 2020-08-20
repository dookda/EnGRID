# EnGRID
workshop#1: เรียกข้อมูลผู้ป่วย COVID-19 มาแสดงผลในรูปแบบตาราง และ export เป็น .xlsx 
1. install vscode จาก https://code.visualstudio.com/
2. เข้าไปดู API ใน https://covid19.ddc.moph.go.th/en/api
3. ตาราง html
```html
<table id="table">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```
ที่มา https://www.w3schools.com/html/html_tables.asp

4. การเขียน function
```js
//แบบปกติ
hello = function() {
  return "Hello World!";
}
// arrow function
hello = () => {
  return "Hello World!";
}
```
ที่มา https://www.w3schools.com/js/js_arrow_function.asp

5. การใช้ fetch สำหรับเรียก api 
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
ที่มา https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

6. การใช้งาน map กับข้อมูล array
```js
const map1 = array1.map(x => x * 2);
```
ที่มา https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

7. การ append element
```js
function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
```
ที่มา https://www.w3schools.com/jsref/met_node_appendchild.asp

8. การใช้งาน library TableToExcel
```js
//เพิ่ม <script src="https://cdn.jsdelivr.net/gh/linways/table-to-excel@v1.0.4/dist/tableToExcel.js"></script>
var tab = document.getElementsByTagName("table");
        TableToExcel.convert(tab[0], {
            name: "export.xlsx",
            sheet: {
                name: 'Sheet 1'
            }
        })
```
ที่มา https://github.com/linways/table-to-excel

โค้ดตัวอย่าง
```html
  <table id="table">
        <tr>
            <th>ConfirmDate</th>
            <th>No</th>
            <th>Age</th>
            <th>Gender</th>
            <th>District</th>
            <th>Province</th>
        </tr>
    </table>
```
```js
var url = "https://covid19.th-stat.com/api/open/cases";

fetch(url)
    .then(res => res.json())
    .then(json => {
        var c = json.Data;
        console.log(c)

        var node_ConfirmDate = document.createElement("td");
        var textnode_ConfirmDate = document.createTextNode("xxx");
        node_ConfirmDate.appendChild(textnode_ConfirmDate);
        document.getElementById("table").appendChild(node_ConfirmDate);

        var node_No = document.createElement("td");
        var textnode_No = document.createTextNode("xxx");
        node_No.appendChild(textnode_No);
        document.getElementById("table").appendChild(node_No);

        var node_Age = document.createElement("td");
        var textnode_Age = document.createTextNode("xxx");
        node_Age.appendChild(textnode_Age);
        document.getElementById("table").appendChild(node_Age);

        var node_Gender = document.createElement("td");
        var textnode_Gender = document.createTextNode("xxx");
        node_Gender.appendChild(textnode_Gender);
        document.getElementById("table").appendChild(node_Gender);

        var node_District = document.createElement("td");
        var textnode_District = document.createTextNode("xxx");
        node_District.appendChild(textnode_District);
        document.getElementById("table").appendChild(node_District);

        var node_Province = document.createElement("td");
        var textnode_Province = document.createTextNode("xxx");
        node_Province.appendChild(textnode_Province);
        document.getElementById("table").appendChild(node_Province);
    })
```