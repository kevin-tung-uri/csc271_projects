var zodiac = 'Pisces';

var birthMonth = "March";

var birthdayNum = 18;

var lucky = 0.75;

var description = "A description";

var believe = false;


var sign = document.getElementById('sign');
sign.innerHTML = zodiac;

var birth = document.getElementsByClassName('birthday');
birth[0].innerHTML += birthMonth + ' ' + birthdayNum;

var luckyNum = document.getElementsByClassName('luckyNum');
luckyNum[0].innerHTML += lucky; 

var desc = document.getElementsByTagName('p');
desc[0].innerHTML = description;
desc[1].innerHTML += believe;


var mood = 3.0;
var mood1 = 3.0;
var mood2 = 4.0;

var mood3 = (mood + mood1 + mood2) / 3;

desc[2].innerHTML = "Today's mood rating for Pisces: " + mood + ' out of 5. The average mood rating of Pisces, Capricorn and Libra is: ' + mood3;

var listOfSigns = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var randomSign = listOfSigns[2];
var randomSign1 = listOfSigns[0];
var randomSign2 = listOfSigns[9];

desc[3].innerHTML = "My zodiac sign is: " + randomSign;
desc[4].innerHTML = "Ryan zodiac sign is: " + randomSign1;
desc[5].innerHTML = "Saurab zodiac sign is: " + randomSign2;


var unnecessarilyLongDescriptionForSigns = ["Today is a day for new beginnings. Embrace change and seize opportunities.", "Your determination will lead to success today. Stay focused on your goals.", "Communication is key today. Express yourself clearly and listen to others.", "Trust your intuition. It will guide you in making the right decisions.", "Your creativity shines today. Use it to inspire and lead others.", "Pay attention to the details. Your meticulous work will pay off.", "Balance is essential. Find harmony in all aspects of your life.", "Embrace transformation. Let go of what no longer serves you.", "Adventure awaits. Explore new horizons and expand your horizons.", "Hard work leads to success. Keep pushing toward your goals.", "Your unique perspective is an asset. Share your ideas with others.", "Trust your emotions. They will guide you in making the right choices."];

var signDesc = unnecessarilyLongDescriptionForSigns[2];
var signDesc1 = unnecessarilyLongDescriptionForSigns[0];
var signDesc2 = unnecessarilyLongDescriptionForSigns[9];

desc[6].innerHTML = "Pisces Horoscope: " + signDesc;
desc[7].innerHTML = "Capicorn Horoscope: " + signDesc1;
desc[8].innerHTML = "Libra Horoscope: " + signDesc2;
