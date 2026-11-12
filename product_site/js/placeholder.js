// All current card arrays
var cardNames = ["Dimension Linker", "Priestess of Wise Salvation", "Magicial Weapoknight Xeno One"];
var cardTexts = [
    [7, "Duel Dimension System activated", "Born in the Sea of Neuron, a proud swordswoman who journeyed", "across nine dimensions.", "Her blade, wielded alongside countless Duelists, is not meant to", "sever, but to unite.", "People's hope link beyond time and space."],
    [5, '[Requirement] Shuffle 1 "Fusion" from your Graveyard', 'into the Deck.',  '[Effect] Draw 1 card. If you have a face-up Level 9', 'monster on your field, all face-up monsters on your field', 'gain 400 ATK until the end of this turn.'],
    [7, '"Magical Weapon Tract" + 1 Level 8 or lower WATER Attribute Effect', 'Monster', '[Requirement] You have "Magical Weapon Tract" in your Graveyard.', "[Effect] Destroy 1 card on your opponent's field. Give control of this", 'card to your opponent during the End Phase of this turn (when', 'control of this card is changed, if there is no Monster Zone to place in,', 'send it to the Graveyard).']
];
var cardStats = [
    ["Attribute: LIGHT", "Level: 8", "[Cyberse/Normal]"],
    ["Attribute: WATER", "Level: 4", "[Wyrm/Effect]"], 
    ["Attribute: WATER", "Level: 9", "[Magical Knight/Fusion/Effect]"]
];
var ATKDEF = [
    ["<b>ATK</b>/ 2500 <b>DEF</b>/ 2000"],
    ["<b>ATK</b>/ 1200 <b>DEF</b>/ 0"],
    ["<b>ATK</b>/ 3000 <b>DEF</b>/ 2600"]
];

var cardImagePaths = ["images/DimensionLinker.jpg",
    "images/starProtection1.jpg",
    "images/starProtection2.jpg"
];

var yugipediaLinks = [
    "https://yugipedia.com/wiki/Dimension_Linker",
    "https://yugipedia.com/wiki/Priestess_of_Wise_Salvation",
    "https://yugipedia.com/wiki/Magical_Weapoknight_Xeno_One"
];

var officialDatabase = [
    "https://www.db.yugioh-card.com/rushdb/card_search.action?ope=2&cid=22619&iid=1",
    "https://www.db.yugioh-card.com/rushdb/card_search.action?ope=2&cid=16928&iid=1",
    "https://www.db.yugioh-card.com/rushdb/card_search.action?ope=2&cid=23750&iid=1"
]

//Dynamically changes card text
//Used AI to easily know which text in the array to change.
var currentIndex = 0;

var titleHeading = document.getElementsByTagName("h1")[0].getElementsByTagName("b")[0];
var cardImageElement = document.querySelector("img[alt*='Yugioh Rush Duel card']"); 
var cardTextContainer = document.getElementById("card-text");
var nextButton = document.getElementById("next-btn");

var allParagraphs = document.querySelectorAll("body > p"); 
var attributeParagraph = allParagraphs[0];
var levelParagraph = allParagraphs[1];
var typeParagraph = allParagraphs[2];
var combatStatsParagraph = allParagraphs[3];

var yugipediaAnchor = document.querySelector("ul li:nth-child(1) a");
var officialDatabaseAnchor = document.querySelector("ul li:nth-child(2) a");

function updatePageContent(index) {
    titleHeading.textContent = cardNames[index];
    attributeParagraph.textContent = cardStats[index][0];
    levelParagraph.textContent = cardStats[index][1];
    typeParagraph.textContent = cardStats[index][2];
    
    combatStatsParagraph.innerHTML = ATKDEF[index];

    var textLines = cardTexts[index].slice(1);
    var formattedTextHTML = "";
    
    textLines.forEach(function(line) {
        if (index === 0) {
            formattedTextHTML += `<p><i>${line}</i></p>`;
        } else {
            formattedTextHTML += `<p>${line}</p>`;
        }
    });
    cardTextContainer.innerHTML = formattedTextHTML;

    cardImageElement.src = cardImagePaths[index]; 
    cardImageElement.alt = "Image of the Yugioh Rush Duel card, " + cardNames[index];

    yugipediaAnchor.href = yugipediaLinks[index];
    officialDatabaseAnchor.href = officialDatabase[index]
}


// Go through cards
nextButton.addEventListener("click", function() {
    if (currentIndex < cardNames.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updatePageContent(currentIndex);
});

if (prevButton) {
    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cardNames.length - 1; 
        }
        updatePageContent(currentIndex);
    });
}