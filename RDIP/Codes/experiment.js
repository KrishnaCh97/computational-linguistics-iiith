var eng =[ ["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
 ["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
 ["John went to church after eating","after eating John went to church","John after eating went to church"],
 ["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
 ["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]]

var hin = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
 ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]]

function show(){
var text = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
var lan = document.getElementById('language').value;
if((lan==="English")||(lan==="Hindi")){
	document.getElementById('obj').innerHTML = text;
	var sent = randomSent();
	var randWord = randomWord2(sent);
	document.getElementById('randText').innerHTML = "";
	document.getElementById('answerArea').innerHTML = "";
	for(i=0;i<randWord.length;i++){
	document.getElementById('randText').innerHTML += ("<button id='btn"+i+"' value='"+randWord[i]+"' onclick='addWord("+i+")'>"+randWord[i]+"</button>")
	}
}
else{
	alert("Select language");
}
}
function randomSent(){
	var lan = document.getElementById('language').value;
	if(lan==="English"){
		var sent = Math.floor(Math.random()*eng.length);
		return  eng[sent][0];
	}
	else if(lan==="Hindi"){
		var sent = Math.floor(Math.random()*hin.length);
		return  hin[sent][0];
	}
}
function randomWord(sent){
	var arr = sent.split(" ");
	var len = arr.length;
	console.log(len);
	var temp = "";
	while(len>0){
		var ran = Math.floor(Math.random()*(len));
		console.log(ran);
		if(temp.length===0)
		temp += arr[ran];
		else
			temp += " "+arr[ran];
		var delarr = arr.splice(ran,1);
		len--;
	}
	temp = temp.trim();
	return temp;
}
function randomWord2(sent){
	var arr = sent.split(" ");
	var temp = [];
	while(arr.length>0){
		var ran = Math.floor(Math.random()*(arr.length));
		temp.push(arr[ran]);
		arr.splice(ran,1);
	}
	return temp;
}
function addWord(x){
	var word = document.getElementById("btn"+x).value;
	if(document.getElementById('answerArea').value==="")
	document.getElementById('answerArea').innerHTML += word;
	else
		document.getElementById('answerArea').innerHTML += " "+ word;
}
