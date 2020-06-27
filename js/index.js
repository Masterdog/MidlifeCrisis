var testText = "newChoise";
var json;

window.onload = function() {
    var url = 'js/wholeStory.json'/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            json = JSON.parse(request.responseText);
            // for(var i=0;i<json.length;i++){
            //     console.log(json[i].name);
            // }
            console.log(json);
        }
    }
}


function afterLeftChoise() {
    var left = document.getElementById("left");
    console.log(left.firstChild.nodeValue);
    changeChoise();
}

function afterRightChoise() {
    var right = document.getElementById("right");
    console.log(right.firstChild.nodeValue);
    changeChoise();
}

function changeChoise() {
    var InfoTemp = getNewText(1);
    var story = document.getElementById("story");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    story.firstChild.nodeValue = InfoTemp["NewStory"];
    left.firstChild.nodeValue = InfoTemp["NewLeft"];
    right.firstChild.nodeValue = InfoTemp["NewRight"];
}

function getNewText(i){
    var getNewStory = json.storyRep[i].story;
    var getNewLeft = json.storyRep[i].sleft;;
    var getNewRight = json.storyRep[i].sright;;
    var getNewInfo = {"NewStory":getNewStory,"NewLeft":getNewLeft,"NewRight":getNewRight};
    return getNewInfo;
}

