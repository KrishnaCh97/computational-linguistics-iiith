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


var randWord;
var sentence = [];
var sent;
var lan;
var array;

function randomSentence(){
	lan = document.getElementById('language').value;
	if(lan==="English"){
		sent = Math.floor(Math.random()*eng.length);
		return  eng[sent][0];
	}
	else if(lan==="Hindi"){
		sent = Math.floor(Math.random()*hin.length);
		return  hin[sent][0];
	}
}
function randomWord(sent){
	var arr = sent.split(" ");
	var temp = [];
	while(arr.length>0){
		var ran = Math.floor(Math.random()*(arr.length));
		temp.push(arr[ran]);
		arr.splice(ran,1);
	}
	return temp;
}
function intro(){
	reset('heading',"Introduction");
	document.getElementById('language').style.display = "none";
	document.getElementById('obj').style.textAlign = "left";
	resetAll();
	reset('obj',"A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods.<br><br>In this experiment also, you will make more difficult sentences using the given words.");
}
function theory(){
	reset('obj',"");
	reset('heading',"Theory");
	document.getElementById('language').style.display = "none";
	document.getElementById('obj').style.textAlign = "left";
	resetAll();
	reset('quiz1',"<u>Clause</u><br>A clause typically contains a subject noun phrase and a finite verb. Some languages allow subjects to be omitted. There are two types of subclauses:<ul><li>independent clause</li><li>subordinate clause</li></ul>Independent clause shows the complete meaning in it. For example: Ram eats. A subordinate clause is not a complete sentence. For example: because I am sick. Sentences can also be classified on the basis of clauses.");
	reset('quiz2',"Classification on the basis of clauses are:<ol><li>A <b>simple sentence</b> consists of only one independent clause. There are no subordinate clauses.</li><li>A <b>compound sentence</b> consists of more than one independent clauses joined ny conjunctions or punctuations. There are no subordinate clauses.</li><li>A <b>complex sentence</b> consists of atleast one indpendent clause and a single subordinate clause</li><li>A <b>complex-compound sentence</b> consists of more than one independent clauses and atleast one of the independent clauses has one or more than one subordinate clauses</li></ol>")

}
function objective(){
		reset('obj',"");
	resetAll();
	document.getElementById('language').style.display = "none";
	document.getElementById('obj').style.textAlign = "left";
	reset('heading',"Objective");
	reset('obj',"<hr><br><br>The objective of this experiment is to know how to form logically correct sentences from the given words.<br><br><br><hr>")

}
function experiment(){
	resetAll();
	reset('heading',"Experiment");
	reset('obj',"");
	document.getElementById('language').style.display = "block";
	document.getElementById('language').style.margin = "0 40%";	
	document.getElementById('obj').style.textAlign = "center";
}

function quiz(){
	resetAll();
		reset('obj',"");
	reset('heading',"Quizzes");
	document.getElementById('language').style.display = "none";
	document.getElementById('obj').style.textAlign = "left";
	reset('quiz1',"Which of these is a valid sentence?<ol><li>Ram came after lunch.</li><li>Ram came after having lunch.</li><li>Sleeping I saw a tiger.</li><li>I saw a sleeping tiger.</li><li>No Parking is allowed.</li></ol>");
	reset('quiz2',"<ol><li>खाते खाते राम सो गया</li><li>राम खाते खाते सो गया</li><li>राम खाता खाते सो गया</li><li>राम खाकर सो गया</li><li>राम और श्याम ने भी खाना खाया</li><li>राम ने और श्याम भी खाना खाया</li>")	
}

function procedure(){
	resetAll();
	reset('obj',"");
	reset('heading',"Procedure");
	document.getElementById('language').style.display = "none";
	document.getElementById('obj').style.textAlign = "left";
	reset('quiz1',"<u><b>STEP 1:</b></u> Select a language which you know better<br><u><b>STEP 2:</b></u> Select the buttons which has words written on it, in a proper order<br><u><b>OUTPUT:</b></u> Group of words in a selected order will be shown<br>");
	reset('quiz2',"<u><b>NOTE:</b></u><ol><li>If a wrong sentence is formed,<button>Re-form the sentence</button>is available for re-setting.<li>You can check whether the formed sentence is a valid or not by clicking<button>Check the correctness of this sentence</button></li><li>For a wrong sentence, you can get the correct sentence by clicking<button>Get correct sentence</button></li>")
}
function show(){
var text = "<span style='color:darkblue;'><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b></span><br><span style='color:blue'>(select the buttons in proper order)</span>";
var lan = document.getElementById('language').value;
if((lan==="English")||(lan==="Hindi")){
	reset('obj',text);
	var sent = randomSentence();
	randWord = randomWord(sent);
	var set = formSent(randWord);
}
else{
	alert("Select language");
}
}
function formSent(){
	resetAll();
	for(i=0;i<randWord.length;i++){
	document.getElementById('randText').innerHTML += ("<button id='btn"+i+"' value='"+randWord[i]+"' onclick='addWord("+i+")'>"+randWord[i]+"</button>")
	}
}
function resetAll(){
	reset('getCorrect',"Get Correct Sentence");
	reset('rightResult',"");
	reset('wrongResult',"");
	reset('correctSentence',"");
	reset('ansHead',"");
	reset('randText',"");
	reset("answerArea","");
	reset('quiz1',"");
	reset('quiz2',"");
	document.getElementById('reformbut').style.display = "none";
	document.getElementById('checkbut').style.display = "none";
	document.getElementById('getCorrect').style.display = "none";
	sentence = [];	
}
function reset(elem,to){
	document.getElementById(elem).innerHTML = to;
}

function addWord(x){
	var word = document.getElementById("btn"+x).value;
	reset('ansHead',"<span style='color:darkblue'>Formed Sentence </span><span style='color:blue'>(after selecting words):</span>");

	if(document.getElementById('answerArea').value==="")
	document.getElementById('answerArea').innerHTML = word;
	else
		document.getElementById('answerArea').innerHTML += " "+ word;

	sentence.push(word);
	if(sentence.length===randWord.length){ 
		document.getElementById('checkbut').style.display = "block";
	}
	else{
		document.getElementById('checkbut').style.display = "none";
	}
	document.getElementById('btn'+x).style.display = "none";
	document.getElementById('reformbut').style.display = "block";
	
}

function checkCorrect(){
	var formedSentence = sentence.join(" ");
	formedSentence = formedSentence.trim();
	if(lan==="English"){
		array = eng[sent];
	}else if(lan==="Hindi"){
		array = hin[sent];
	}
		for(i=0;i<array.length;i++){
			if(array[i]===formedSentence){
				reset('rightResult',"Right Answer!!!");
				reset('wrongResult',"");
				return true;
			}
		}
		reset('wrongResult',"Wrong Answer!!!");
		reset('rightResult',"");
		document.getElementById("getCorrect").style.display = "block";
	}



function getCorrect(){
	if((document.getElementById('getCorrect').innerHTML==="Get Correct Sentence")||(document.getElementById('getCorrect').innerHTML === "Get Answers")){
	for (i = 0; i < array.length; i++) {
	document.getElementById('correctSentence').innerHTML += array[i]+"<br>";
	}
	reset('getCorrect',"Hide the Correct Sentence");
}else if(document.getElementById('getCorrect').innerHTML === "Hide the Correct Sentence"){
	reset('correctSentence',"");
	reset('getCorrect',"Get Answers");
}
}