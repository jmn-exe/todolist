var index = 0;
function buttonClick(){
    if(document.getElementById("name").value!=""){
        var listDivision = document.createElement("DIV");
        var listBlock = document.createElement("DIV");
        var nameToDisplay = document.createElement("DIV");
        var deleteButton = document.getElementById("deletebtn").cloneNode(true);
        nameToDisplay.innerHTML = document.getElementById("name").value;
        listBlock.id = "list" + JSON.stringify(index);
        listBlock.className = "listblock";
        listDivision.className = "listdivision";
        deleteButton.id = "button" + JSON.stringify(index);
        nameToDisplay.className = "todo";
        deleteButton.style.display = "inline-block";
        listDivision.appendChild(nameToDisplay);
        listDivision.appendChild(deleteButton);
        listBlock.appendChild(listDivision);
        document.body.appendChild(listBlock);
        index++;
    }
}

function deleteFunction(buttonId){
    var getId = "";
    for(var i = 0; i < buttonId.length ; i++){
        if(isNaN(buttonId[i])==false){
            getId +=buttonId[i];
        }
    }
    var deleteElement = document.getElementById("list"+getId);
    deleteElement.parentNode.removeChild(deleteElement);

}