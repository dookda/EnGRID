# enGRID
enGRID workshop
1. install vscode
2. visit: https://covid19.ddc.moph.go.th/en/api
3. html: table
การสร้างตาราง
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
การใช้คำสั่ง append ใน 
```js
function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
```

4. js: fetch(), arrow function, map()