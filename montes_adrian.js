function colorRed() {
    this.style.color="red";
}

function colorBlack() {
    this.style.color="black";
}

function dashedBorder() {
    if (this.style.borderStyle == "dashed") {
        this.style.border="";
    } else {
        this.style.border="black dashed 1px";
    }
}

function disableDisplay() {
    this.style.display="none"
    //alert("hi");
}

function disableNHL() {
    if(this.href.indexOf("nhl") > -1) {
        return false;
    }
}

window.onload = function() {
    if(document.getElementsByClassName) {
        var changeDivs = document.getElementsByClassName("change");
    }
    for (let i = 0; i < changeDivs.length; i++) {
        changeParagraphs = changeDivs[i].getElementsByTagName("p");
        for (let j = 0; j < changeParagraphs.length; j++) {
            changeParagraphs[j].onmouseover=colorRed;
            changeParagraphs[j].onmouseout=colorBlack;
        }
    }
    
    var paragraphs = document.getElementsByTagName("p");
    
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].onclick=dashedBorder;
    }
    
    var topImgs = document.getElementById("top").getElementsByTagName("img");
    var midImgs = document.getElementById("middle").getElementsByTagName("img");
    

    for (let i = 0; i < topImgs.length; i++) {
        topImgs[i].ondblclick=disableDisplay;
    }
    
    for (let i = 0; i < midImgs.length; i++) {
        midImgs[i].ondblclick=disableDisplay;
    }
    
    var bottomLinks = document.getElementById("bottom").getElementsByTagName("a");
    
    for (let i = 0; i < bottomLinks.length; i++) {
        bottomLinks[i].onclick=disableNHL;
    }
}