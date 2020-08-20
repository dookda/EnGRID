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