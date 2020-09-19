var Eng = ["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots"];
var Hin = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];

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
		for(i=0;i<selectedSent.length;i++){row+="<tr><td>"+selectedSent[i]+"</td><td><select><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adverb</option><option>Adjective</option><option>Preposition</option><option>Conjunction</option><option>Determiner</option><option>Interjection</option></select></td><td></td><td></td></tr>"};
			document.getElementById('lexTable').innerHTML ="";
			document.getElementById('lexTable').innerHTML = "<table><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr>"+
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
		for(i=0;i<selectedSent.length;i++){row+="<tr><td>"+selectedSent[i]+"</td><td><select><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adverb</option><option>Adjective</option><option>Postposition</option><option>Conjunction</option><option>Determiner</option><option>Interjection</option></select></td><td></td><td></td></tr>"};
			document.getElementById('lexTable').innerHTML ="";
			document.getElementById('lexTable').innerHTML = "<table><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr>"+
		row
		+"</table>"
		document.getElementById('sub').style.display = "block";
		}
	}
}
