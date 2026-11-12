var textLinesNodeList = document.querySelectorAll("#card-text p");

var pageParagraphs = document.querySelectorAll("body > p");
var attributeText = pageParagraphs[0] ? pageParagraphs[0].textContent : "";
var levelText = pageParagraphs[1] ? pageParagraphs[1].textContent : "";
var typeText = pageParagraphs[2] ? pageParagraphs[2].textContent : "";

var isNormalMonster = typeText.includes("Normal");
var isWaterAttribute = attributeText.includes("WATER");
var isHighLevel = parseInt(levelText.replace("Level: ", ""), 10) >= 8;

for (var i = 0; i < textLinesNodeList.length; i++) {
    var currentParagraph = textLinesNodeList[i];
    var lineText = currentParagraph.textContent;

    if (isNormalMonster && isHighLevel) {
        currentParagraph.style.color = "#8a5a00";
        currentParagraph.style.fontWeight = "normal";
    } else if (isWaterAttribute && lineText.includes("[Requirement]")) {
        currentParagraph.style.color = "#005b96";
        currentParagraph.style.fontWeight = "bold";
    } else if (isWaterAttribute && isHighLevel && lineText.includes("[Effect]")) {
        currentParagraph.style.color = "#a61c1c";
        currentParagraph.style.fontWeight = "bold";
    } else {
        currentParagraph.style.color = "black";
        currentParagraph.style.fontWeight = "normal";
    }
}
