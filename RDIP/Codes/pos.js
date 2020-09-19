var Eng = ["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots"];
var Hin = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];
var EngAns = [["determiner","noun","verb","determiner","noun"],["pronoun","verb","verb","preposition","determiner","adjective","noun"],["noun","verb","determiner","noun","preposition","determiner","noun"],["pronoun","verb","determiner","noun","adverb"],["noun","verb","determiner","noun","preposition","noun","noun"]];

var HinAns = [["noun","postposition","noun","postposition","postposition","noun","verb"],["adjective","noun","noun","adverb","verb"],["noun","postposition","noun","adjective","verb","verb"],["interjection","pronoun","adjective","verb"],["noun","postposition","noun","verb","verb"]];

var pos1 = require(['pos']);
var words = new pos1.Lexer().lex('This is some sample text. This text can contain multiple sentences.'); //You have to enter the sentences here
var tagger = new pos1.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}


function hideClass(cl){
	document.getElementsByClassName(cl)[0].style.display = "none";
}
function showClass(cl){
	document.getElementsByClassName(cl)[0].style.display = "block";
}
function hideAllClass(){
	hideClass('introduction');
	hideClass('theory');
	hideClass('objective');
	hideClass('experiment');
	hideClass('quiz');
	hideClass('procedure');
	hideClass('readings');
}
function showElem(elem){
	document.getElementById(elem).style.display="block";
}
function hideElem(elem){
	document.getElementById(elem).style.display="none";
}

function intro(){
	hideAllClass();
	showClass('introduction');
	document.getElementById('heading').innerHTML = "Introduction";
}

function theory() {
	hideAllClass();
	showClass('theory');
	document.getElementById('heading').innerHTML = "Theory";
}
function objective(){
	hideAllClass();
	showClass('objective');
	document.getElementById('heading').innerHTML = "Objective";	
}
function experiment(){
	hideAllClass();
	showClass('experiment');
	document.getElementById('heading').innerHTML = "Experiment";
	hideElem("getAns");	
}

function quiz(){
	hideAllClass();
	showClass('quiz');
	document.getElementById('heading').innerHTML = "Quizzes";	
}
function procedure(){
	hideAllClass();
	showClass('procedure');
	document.getElementById('heading').innerHTML = "Procedure";	
}
function readings(){
	hideAllClass();
	showClass('readings');
	document.getElementById('heading').innerHTML = "Further Readings";	
}


var lan = "";
function showLan(){
	lan = document.getElementById("lan").value;
	document.getElementById('instr').innerHTML="";
	document.getElementById('lexTable').innerHTML ="";
	document.getElementById('sub').style.display = "none";
	if(lan==="select language"){
		alert("Select Language");
		return false;
	}
	else if(lan==="hindi"){
		document.getElementById('selectedLan').innerHTML = "<select id='sent' name='sent' onclick='showTable()'><option value='select sentence'>---Select a sentence---</option><option value='hin0'>"+Hin[0]+"</option><option value='hin1'>"+Hin[1]+"</option><option value='hin2'>"+Hin[2]+"</option><option value='hin3'>"+Hin[3]+"</option><option value='hin4'>"+Hin[4]+"</option></select>"
	}
	else if(lan==="english"){
		document.getElementById('selectedLan').innerHTML = "<select id='sent' name='sent' onclick='showTable()'><option value='select sentence'>---Select a sentence---</option><option value='eng0'>"+Eng[0]+"</option><option value='eng1'>"+Eng[1]+"</option><option value='eng2'>"+Eng[2]+"</option><option value='eng3'>"+Eng[3]+"</option><option value='eng4'>"+Eng[4]+"</option></select>"
	}
		
}
var sent ="";
var selectedSent = [];

function showTable(){

	sent = document.getElementById('sent').value;
	if(sent==="select sentence"){
		alert("Select sentence");
		return false;
	}
	else{
		var row="";
		document.getElementById('instr').innerHTML="Select the POS tag for corresponding words";
		if(lan==="english"){
		if(sent==="eng0"){
			selectedSent = Eng[0].split(" ");
		}
		if(sent==="eng1"){
			selectedSent = Eng[1].split(" ");
		}
		if(sent==="eng2"){
			selectedSent = Eng[2].split(" ");
		}
		if(sent==="eng3"){
			selectedSent = Eng[3].split(" ");
		}
		if(sent==="eng4"){
			selectedSent = Eng[4].split(" ");
		}
		for(i=0;i<selectedSent.length;i++){row+="<tr><td>"+selectedSent[i]+"</td><td><select id='selectedPOS["+i+"]'><option value='noun'>Noun</option><option value='pronoun'>Pronoun</option><option value='verb'>Verb</option><option value='adverb'>Adverb</option><option value='adjective'>Adjective</option><option value='preposition'>Preposition</option><option value='conjunction'>Conjunction</option><option value='determiner'>Determiner</option><option value='interjection'>Interjection</option></select></td><td id='ans["+i+"]'></td><td id='actual["+i+"]'></td></tr>"};
			document.getElementById('lexTable').innerHTML ="";
			document.getElementById('lexTable').innerHTML = "<table id='myTable'><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr>"+
		row
		+"</table>"
		document.getElementById('sub').style.display = "block";
		}
		else if(lan==="hindi"){
		if(sent==="hin0"){
			selectedSent = Hin[0].split(" ");
		}
		if(sent==="hin1"){
			selectedSent = Hin[1].split(" ");
		}
		if(sent==="hin2"){
			selectedSent = Hin[2].split(" ");
		}
		if(sent==="hin3"){
			selectedSent = Hin[3].split(" ");
		}
		if(sent==="hin4"){
			selectedSent = Hin[4].split(" ");
		}
		for(i=0;i<selectedSent.length;i++){row+="<tr><td>"+selectedSent[i]+"</td><td><select id='selectedPOS["+i+"]'><option value='noun'>Noun</option><option value='pronoun'>Pronoun</option><option value='verb'>Verb</option><option value='adverb'>Adverb</option><option value='adjective'>Adjective</option><option value='postposition'>Postposition</option><option value='conjunction'>Conjunction</option><option value='determiner'>Determiner</option><option value='interjection'>Interjection</option></select></td><td id='ans["+i+"]'></td><td id='actual["+i+"]'></td></tr>"};
			document.getElementById('lexTable').innerHTML ="";
			document.getElementById('lexTable').innerHTML = "<table id='myTable'><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr>"+
		row
		+"</table>"
		document.getElementById('sub').style.display = "block";
		}
	}
}
function set(elem,to){
	 document.getElementById(elem).innerHTML = to;
}
var selectedPOS = [];
var actual = [];
function checkAnswer(){
	hideElem("getAns");
	hideElem("hideAns");
	for(i=0;i<selectedSent.length;i++){
		set("actual["+i+"]","");
	}
	var flag=0;
	if(lan)
	for(i=0;i<selectedSent.length;i++){
		if(lan==="english"){
			if(sent==="eng0"){
				actual = EngAns[0];
			}
			if(sent==="eng1"){
				actual = EngAns[1];
			}
			if(sent==="eng2"){
				actual = EngAns[2];
			}
			if(sent==="eng3"){
				actual = EngAns[3];
			}
			if(sent==="eng4"){
				actual = EngAns[4];
			}
		}
		if(lan==="hindi"){
			if(sent==="hin0"){
				actual = HinAns[0];
			}
			if(sent==="hin1"){
				actual = HinAns[1];
			}
			if(sent==="hin2"){
				actual = HinAns[2];
			}
			if(sent==="hin3"){
				actual = HinAns[3];
			}
			if(sent==="hin4"){
				actual = HinAns[4];
			}
		}
		if(document.getElementById("selectedPOS["+i+"]").value==actual[i]){
			/*document.getElementById('ans['+i+']').innerHTML = "<img src='right.png'>";*/
			set("ans["+i+"]","<img src='right.png' width='30px' height='30px'>");
	}
		else{
			set("ans["+i+"]","<img src='wrong.png' width='30px' height='30px'>");
			flag=1;
		}
	}
	if(flag===1){
		showElem("getAns");
	}
}
function getAnswers(){
	for(i=0;i<selectedSent.length;i++){
		set("actual["+i+"]",actual[i]);
	}
	hideElem("getAns");
	showElem("hideAns");
}
function hideAnswers(){
	for(i=0;i<selectedSent.length;i++){
		set("actual["+i+"]","");
	}
	hideElem("hideAns");
	showElem("getAns");
}