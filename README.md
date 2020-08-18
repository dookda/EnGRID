# enGRID
enGRID workshop
1. install vscode
2. เข้าไปดู API: https://covid19.ddc.moph.go.th/en/api
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
การใช้งาน map กับข้อมูล array
```js
const map1 = array1.map(x => x * 2);
```
ที่มา https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

6. การ append element
```js
function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
```
ที่มา https://www.w3schools.com/jsref/met_node_appendchild.asp

7. การใช้งาน library TableToExcel
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