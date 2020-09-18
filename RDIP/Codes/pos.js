var Eng = ["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots"];
var Hin = ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];

function theory() {
	document.getElementsByClassName('theory')[0].style.display = "block";
	document.getElementsByClassName('introduction')[0].style.display = "none";
	document.getElementsByClassName('experiment')[0].style.display = "none";
	document.getElementById('heading').innerHTML = "Theory";
}
function intro(){
	document.getElementsByClassName('theory')[0].style.display = "none";
	document.getElementsByClassName('experiment')[0].style.display = "none";
	document.getElementsByClassName('introduction')[0].style.display = "block";
	document.getElementById('heading').innerHTML = "Introduction";
}
function experiment(){
	document.getElementsByClassName('theory')[0].style.display = "none";
	document.getElementsByClassName('introduction')[0].style.display = "none";
	document.getElementsByClassName('experiment')[0].style.display = "block";
	document.getElementById('heading').innerHTML = "Experiment";	
}
function showLan(){
	var lan = document.getElementById("lan").value;
	if(lan==="select language"){
		alert("Select Language");
		return false;
	}
	else if(lan==="english"){
		document.getElementById('selectedLan').innerHTML = "<select><option>---Select a sentence---</option><option>"+Eng[0]+"</option><option>"+Eng[1]+"</option><option>"+Eng[2]+"</option><option>"+Eng[3]+"</option><option>"+Eng[4]+"</option></select>"
	}
	else if(lan==="hindi"){
		document.getElementById('selectedLan').innerHTML = "<select><option>---Select a sentence---</option><option>"+Hin[0]+"</option><option>"+Hin[1]+"</option><option>"+Hin[2]+"</option><option>"+Hin[3]+"</option><option>"+Hin[4]+"</option></select>"
	}	
}