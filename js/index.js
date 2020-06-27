var testText = "newChoise";

function afterLeftChoise() {
    var left = document.getElementById("left");
    alert(left.firstChild.nodeValue);
    changeChoise;
}

function afterRightChoise() {
    var right = document.getElementById("right");
    alert(right.firstChild.nodeValue);
    changeChoise;
}

function changeChoise() {
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    left.firstChild.nodeValue = NewLeft;
    right.firstChild.nodeValue = NewRight;
}

function getNewText(){

}