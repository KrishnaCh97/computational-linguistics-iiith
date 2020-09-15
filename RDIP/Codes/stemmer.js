//var Snowball = require(['Snowball']);
var stemmer = new Snowball('english');


var corp1 = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. " How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."';
var corp2 = "A wolf carried off a lamb. The lamb said,'I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.";
var corp3 = "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field.'I only did what the dog does,' said the donkey, 'and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'";
var corp = "";
var tokens = 0;
var types = 0;
var selected;
var temp;
var sys;
function show(){
	corp = document.getElementById('corpus').value;
	document.getElementById('selectedCorp').style.display = "block";
	if(corp==="Select a corpus"){
		alert("Select a corpus");
		return false;
	}
	else if(corp==="corpus1"){
		selected = corp1;
		set("selectedCorp",corp1);
		document.getElementById('introImg').style.display = "none";
		document.getElementById('obj').style.display = "none";
		set('answer',"");
		hideElem('newTypes');
		hideElem('sub2');
	}
	else if(corp==="corpus2"){
		selected = corp2;
		set("selectedCorp",corp2);
		document.getElementById('introImg').style.display = "none";
		document.getElementById('obj').style.display = "none";
		set('answer',"");
		hideElem('newTypes');
		hideElem('sub2');
	}
	else if(corp==="corpus3"){
		selected = corp3;
		set("selectedCorp",corp3);
		document.getElementById('introImg').style.display = "none";
		document.getElementById('obj').style.display = "none";
		set('answer',"");
		hideElem('newTypes');
		hideElem('sub2');
	}
	showElem('tableInput');
	showElem('sub');
	set("instr","Enter the number of tokens and types for the above corpus:");
	set("tableInput","<table><tr><td>\#tokens:</td><td><input id='tok' type='text'</td></tr><tr><td>\#types:</td><td><input id='typ' type='text'</td></tr>")
}
function set(elem,to){
	document.getElementById(elem).innerHTML = to;
}
function hideElem(elem){
	document.getElementById(elem).style.display = "none";
}
function showElem(elem){
	document.getElementById(elem).style.display = "block";
}

function experiment(){
	hideElem('obj');
	hideElem('introImg');
	showElem('corpus');
	set('heading',"Experiment");
	document.getElementsByClassName('exp')[0].style.display = "block";
	document.getElementsByClassName('objective')[0].style.display = "none";
	document.getElementsByClassName('theory')[0].style.display = "none";
	document.getElementsByClassName('quiz')[0].style.display = "none";
	document.getElementsByClassName('procedure')[0].style.display = "none";
}
function intro(){
	showElem('obj');
	showElem('introImg');
	hideElem('corpus');
	set('heading',"Introduction");
	document.getElementsByClassName('exp')[0].style.display = "none";
	document.getElementsByClassName('objective')[0].style.display = "none";
	document.getElementsByClassName('theory')[0].style.display = "none";
	document.getElementsByClassName('quiz')[0].style.display = "none";
	document.getElementsByClassName('procedure')[0].style.display = "none";
}

function tokenCount(){
	var reg = /\w+/gi;
	temp = selected.match(reg);
	tokens = temp.length;
	return tokens;
}
function typeCount(){
	sys = [temp[0].toLowerCase()];
	for(x=1;x<temp.length;x++){
		temp[x] = temp[x].toLowerCase();
		if(!sys.includes(temp[x])){
			sys.push(temp[x]);
		}
	}
	
	types = sys.length;
	return types;
}
function firstCheck(){
	var tokenInput = document.getElementById('tok').value;
	var typeInput = document.getElementById('typ').value;
	var tokenC = tokenCount();
	var typeC = typeCount();
	if((tokenC==tokenInput)&&(typeC==typeInput)){
		document.getElementById('tok').style.background = "green";
		document.getElementById('typ').style.background = "green";
		set('answer',"Right answer");
		showElem('cont');
	}
	else if((tokenC==tokenInput)){
		document.getElementById('tok').style.background = "green";
		document.getElementById('typ').style.background = "red";
		set('answer',"Wrong answer");
		hideElem('cont');
	}
	else if((typeC==typeInput)){
		document.getElementById('tok').style.background = "red";
		document.getElementById('typ').style.background = "green";
		set('answer',"Wrong answer");
		hideElem('cont');
	}
	else{
		document.getElementById('tok').style.background = "red";
		document.getElementById('typ').style.background = "red";
		set('answer',"Wrong answer");
		hideElem('cont');
	}
}
function proceed(){
	var sysNew=[];
	set('answer',"Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.");
	hideElem("cont");
	hideElem("sub");
	showElem("newTypes");
	showElem("sub2");
	var newTypeInput = document.getElementById('newTypes').value;
	for(i=0;i<sys.length;i++){
		stemmer.setCurrent(sys[i]);
		stemmer.stem();
		var x = stemmer.getCurrent();
		console.log(x);
		if(!sysNew.includes(x)){
			sysNew.push(x);
		}
	}
	console.log(sysNew.length);
}

function theory(){
	set('heading',"Theory");
	document.getElementsByClassName('theory')[0].style.display = "block";
	document.getElementsByClassName('objective')[0].style.display = "none";
	document.getElementsByClassName('quiz')[0].style.display = "none";
	document.getElementsByClassName('procedure')[0].style.display = "none";
	document.getElementsByClassName('exp')[0].style.display = "none";
	hideElem('obj');
	hideElem('introImg');
	hideElem('corpus');
}
function objective(){
	set('heading',"Objective");
	document.getElementsByClassName('theory')[0].style.display = "none";
	hideElem('obj');
	hideElem('introImg');
	hideElem('corpus');
	document.getElementsByClassName('exp')[0].style.display = "none";
	document.getElementsByClassName('objective')[0].style.display = "block";
	document.getElementsByClassName('quiz')[0].style.display = "none";
	document.getElementsByClassName('procedure')[0].style.display = "none";
}
function quiz(){
	set('heading',"Quiz");
	document.getElementsByClassName('theory')[0].style.display = "none";
	hideElem('obj');
	hideElem('introImg');
	hideElem('corpus');
	document.getElementsByClassName('exp')[0].style.display = "none";
	document.getElementsByClassName('objective')[0].style.display = "none";	
	document.getElementsByClassName('quiz')[0].style.display = "block";
	document.getElementsByClassName('procedure')[0].style.display = "none";
}
function procedure(){
	set('heading',"Procedure");
	document.getElementsByClassName('theory')[0].style.display = "none";
	hideElem('obj');
	hideElem('introImg');
	hideElem('corpus');
	document.getElementsByClassName('exp')[0].style.display = "none";
	document.getElementsByClassName('objective')[0].style.display = "none";	
	document.getElementsByClassName('quiz')[0].style.display = "none";
	document.getElementsByClassName('procedure')[0].style.display = "block"
}