# enGRID
enGRID workshop
1. install vscode
2. visit: https://covid19.ddc.moph.go.th/en/api
3. สร้างตาราง
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
ตัวอย่างการ append element
```js
function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
```
ต้นฉบับ http://github.com - automatic!
[GitHub](http://github.com)
4. js: fetch(), arrow function, map()