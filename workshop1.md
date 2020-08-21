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

การเขียนฟังก์ชั่นของ javascript แบบปกติต้องขึ้นต้นด้วยคำสั่ง function ซึ่งสามารถเขียนได้หลายรูปแบบ 
```js
//แบบที่ 1
function hello(){
    return "Hello World!";
}
//แบบที่ 2
hello = function() {
  return "Hello World!";
}
```
หากต้องการเพิ่มพารามิเตอร์เข้าไปในฟังก์ชั่นใ้ห่ใส่ลงไปในวงเล็บหลังชื่อของฟังก์แล้วนำไปดำเนินการในฟังก์ชั่นต่อไป
```js
//แบบที่ 1
function plus(a, b) {
  return a + b;
}
//แบบที่ 2
plus = function(a, b) {
  return a + b;
}
```
เมื่อต้องการใช้งานฟังก์ชั่นให้เรียกใช้ชื่อของฟังก์ชั่น
```js
hello()
// Hello World!
plus(2,3)
// 5
```
ใน es6 เป็นต้นมาสามารถเขียนฟังก์แบบ arrow function ได้
```js
// arrow function
hello = () => {
  return "Hello World!";
}
```
ที่มา https://www.w3schools.com/js/js_arrow_function.asp

5. การใช้ fetch 
fetch เป็น method ที่ใช้สำหรับ get และ request ค่ากับ server 
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

ตัวอย่างโค้ดที่สำเร็จ
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COVID-19 case</title>
    <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet">
    <style>
        table {
            font-family: Prompt, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        th {
            font-size: 18px;
            color: white;
            background-color: orangered;
            text-align: center !important;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>

<body>
    <button id="btnExport" onclick="exportXls()">export to excel</button>
    <p></p>
    <table id="covid-case">
        <tr>
            <th>ConfirmDate</th>
            <th>Case No.</th>
            <th>เพศ</th>
            <th>อำเภอ</th>
            <th>จังหวัด</th>
        </tr>
        <!-- <tr>
            <td>xx</td>
            <td>xxx</td>
            <td>xxxx</td>
            <td>xxxxx</td>
        </tr> -->
    </table>

</body>
<script src="https://cdn.jsdelivr.net/gh/linways/table-to-excel@v1.0.4/dist/tableToExcel.js"></script>
```
```js
var url = 'https://covid19.th-stat.com/api/open/cases';

fetch(url)
    .then(res => res.json())
    .then(json => {
        json.Data.map((c, id) => {
            // console.log(c)
            var tr = document.createElement("tr");

            var td_confirm = document.createElement("td");
            var txtNode_confirm = document.createTextNode(c.ConfirmDate);
            td_confirm.append(txtNode_confirm);
            tr.append(td_confirm)

            var td_no = document.createElement("td");
            var txtNode_no = document.createTextNode(c.No);
            td_no.append(txtNode_no);
            tr.append(td_no)

            var td_Gender = document.createElement("td");
            var txtNode_Gender = document.createTextNode(c.Gender);
            td_Gender.append(txtNode_Gender);
            tr.append(td_Gender)

            var td_dist = document.createElement("td");
            var txtNode_dist = document.createTextNode(c.District);
            td_dist.append(txtNode_dist);
            tr.append(td_dist)

            var td_prov = document.createElement("td");
            var txtNode_prov = document.createTextNode(c.Province);
            td_prov.append(txtNode_prov);
            tr.append(td_prov)

            document.getElementById("covid-case").appendChild(tr);

        })
    });


function exportXls() {
    var tab = document.getElementsByTagName("table");
    TableToExcel.convert(tab[0], {
        name: "export.xlsx",
        sheet: {
            name: 'Sheet 1'
        }
    })
}
```