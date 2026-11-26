const textInput = document.getElementById('text-input');
const numberInput = document.getElementById('number-input');
//let textOutput = document.querySelectorAll("td");
let textOutput2 = ""
const numberOutput = document.getElementsByClassName('number-output');
const submitBtn = document.getElementById('submit-btn');
const selectInput = document.getElementById('sel');
const dialog = document.getElementById('dialog-mod');
const dialogOkBtn = document.getElementById('dialog-ok');
const dialogAnnullaBtn = document.getElementById('dialog-annulla');
const dialogResetBtn = document.getElementById('dialog-reset');
const dialogInput = document.getElementById('dialog-input');
const mathP = document.getElementById('math-p');
const mathD = document.getElementById('math-d');
const mathC = document.getElementById('math-c');
const mathA = document.getElementById('math-a');
const creditiIniziali = document.getElementById('crediti-iniziali');
const creditiResidui = document.getElementById('crediti-residui');
const dialogData = document.getElementById('dialog-data');
const dialogNewSession = document.getElementById('dialog-new-session');
const dialogLoadData = document.getElementById('dialog-load-session');
const dialogSure = document.getElementById('dialog-sure');
const dialogSureYes = document.getElementById('dialog-sure-yes');
const dialogSureNo = document.getElementById('dialog-sure-no');
const dialogAlert = document.getElementById('dialog-alert');
const dialogAlertP = document.getElementById('dialog-alert-p');
const dialogAlertOk = document.getElementById('dialog-alert-ok');



let playerData = JSON.parse(localStorage.getItem("data")) || [];
let tableData = JSON.parse(localStorage.getItem("tableData")) || [];

/*textOutput.forEach((btn) => btn.addEventListener("click", (e) => {
id = e.currentTarget.id}));*/


console.log(tableData)

function clearTable(){
	
	for (let h=0; h<4; h++){
	 const ruoli = ["portieri","difensori","centrocampisti","attaccanti"]
       table = document.getElementById(`table-${ruoli[h]}`);
	   for (let i=table.rows.length; i>1; i--){
		table.rows[i-1].remove();
		   }
   }}

 function okTable(){
	       clearTable();
	       tableFunction();
		   ()=>dialogSure.close()};
		  


function dialogTable(){
	document.getElementById('dialog-data').innerHTML =`
	  <p>Definsci la tabella inserendo la quantità di giocatori per ruolo.</p>
	   Portieri:<input type:number id="p" class="dialog-table">
	   Difensori:<input type:number id="d" class="dialog-table"><br>
	   Centrocampisti:<input type:number id="c" class="dialog-table">
	   Attaccanti:<input type:number id="a" class="dialog-table"><br>
	   <button class="dialog-button" onclick="okTable()">Ok</button>
	   <button class="dialog-button" onclick="dialogData.close()">Annulla</button>`;
	   dialogData.showModal();
}

function dialogTableSure(){
	dialogSure.children[0].childNodes[1].innerText = "Modificando la tabella verranno cancellati tutti i dati. \n \n proseguire?";
	dialogSureYes.setAttribute("onclick",()=>okTable());
	dialogSureNo.setAttribute("onclick",()=>dialogSure.close());
	dialogSure.showModal();
	
	
}

function tableFunction(){
	const tableData = {
		Portieri: document.getElementById('p').value,
		Difensori:document.getElementById('d').value,
		Centrocampisti:document.getElementById('c').value,
		Attaccanti:document.getElementById('a').value,
	}
     let numeroRighe = ""		 
   
   for (let h=0; h<4; h++){
	 const ruoli = ["portieri","difensori","centrocampisti","attaccanti"]
       table = document.getElementById(`table-${ruoli[h]}`);
	    switch(table.id){
	   case "table-portieri":
	    numeroRighe = document.getElementById('p').value;
		break;
		
	   case "table-difensori":
	    numeroRighe = document.getElementById('d').value;
		break;
		
	   case "table-centrocampisti":
	    numeroRighe = document.getElementById('c').value;
		break;
		
	   case "table-attaccanti":
	    numeroRighe = document.getElementById('a').value;
		break;
   }
     
   for(let i=0; i<numeroRighe; i++){   
   const righe = document.createElement('tr');
   table.appendChild(righe)[i];
    for (let j=0; j<2; j++){
   const celle = document.createElement('td');	
   righe.appendChild(celle)[j];
   	
   
   
	 }}}
	 innerTextMath();crediti();
	 localStorage.setItem("tableData", JSON.stringify(tableData));
	 dialogData.close();
	 textOutput2 = document.querySelectorAll('td')
}

playerData.length || tableData.length !== 0? dialogData.showModal():dialogTable();







const getId = () => {id = event.target.id}


function creditTransform(){
	creditiIniziali.parentNode.innerHTML = `Crediti Iniziali:<div id="crediti-iniziali2" class=math-div onclick="getId();changeModify()">${creditiIniziali.value}</div>`;
}

function storageTable(){
	for (let h=0; h<4; h++){
	 const ruoli = ["portieri","difensori","centrocampisti","attaccanti"]
       table = document.getElementById(`table-${ruoli[h]}`);
	    switch(table.id){
	   case "table-portieri":
	    numeroRighe = tableData.Portieri;
		break;
		
	   case "table-difensori":
	    numeroRighe = tableData.Difensori;
		break;
		
	   case "table-centrocampisti":
	    numeroRighe = tableData.Centrocampisti;
		break;
		
	   case "table-attaccanti":
	    numeroRighe = tableData.Attaccanti;
		break;
}
   for(let i=0; i<numeroRighe; i++){   
   const righe = document.createElement('tr');
   table.appendChild(righe)[i];
    for (let j=0; j<2; j++){
   const celle = document.createElement('td');	
   righe.appendChild(celle)[j]  
}}}dialogData.close();textOutput2 = document.querySelectorAll('td')}

function storageData() {
    		
	   for(j=0; j<playerData.length; j++){ 
	   let data = playerData[j];
	   let selected = document.getElementById(`table-${data.position}`);
	 for(let i=1; i<100; i++){ 
        if(selected.rows[i].cells[0].innerText === ""){						
      selected.rows[i].cells[0].innerText = data.name;
      selected.rows[i].cells[1].innerText = data.price;
	  selected.rows[i].cells[0].id = data.nameId;
	  selected.rows[i].cells[1].id = data.priceId;	  
	  selected.rows[i].cells[0].setAttribute('onclick','changeModify()');
	  selected.rows[i].cells[1].setAttribute('onclick','changeModify()');
	  selected.rows[i].cells[0].onmouseover = () => selected.rows[i].cells[0].classList.add('mouse-over');
	  selected.rows[i].cells[1].onmouseover = () => selected.rows[i].cells[1].classList.add('mouse-over');
	  selected.rows[i].cells[0].onmouseout = () => selected.rows[i].cells[0].classList.remove('mouse-over');
	  selected.rows[i].cells[1].onmouseout = () => selected.rows[i].cells[1].classList.remove('mouse-over');
	  	  
	    switch (selected.id){
		  case  "table-portieri" :
		  selected.rows[i].cells[0].classList.add("td-border-p")
		  selected.rows[i].cells[1].classList.add("td-border-p")

		break;
		
		case "table-difensori" :
		  selected.rows[i].cells[0].classList.add("td-border-d")
		  selected.rows[i].cells[1].classList.add("td-border-d")
		  break;
		  
		  case "table-centrocampisti" :
		  selected.rows[i].cells[0].classList.add("td-border-c")
		  selected.rows[i].cells[1].classList.add("td-border-c")
		  break;
		  
		  case "table-attaccanti" :
		  selected.rows[i].cells[0].classList.add("td-border-a")
		  selected.rows[i].cells[1].classList.add("td-border-a")
		  break;
		  
	   }break}}}
	   creditiIniziali.value = playerData[0].creditiIniziali;
	   creditTransform();
       innerTextMath();
	   crediti();
	   dialogData.close();
	   

}

/*function automaticSelectRole() {
      let selected = document.getElementById(`table-${selectInput.value}`);
	  let count = 0;
	    for(let i=1; i<selected.rows.length ; i++){
			selected.rows[i].cells[0].innerText !=="" ? count++:null
			count === selected.rows.length -1? selectInput.value = "difensori": null;
	   }
	   
console.log(count,selected.rows[2].cells[0].innerText,selectInput.children[2].value)
}*/	


const submit = () =>{
	textInput.focus();
	
	if (textInput.value && numberInput.value && 
	selectInput.options[selectInput.selectedIndex].value && creditiIniziali.value !== ""){
		
		let port = document.getElementById(`table-${selectInput.options[selectInput.selectedIndex].value}`);
		let count=1;
		 for(let i=1; i<port.rows.length; i++){			 
			 port.rows[i].cells[0].innerText === ""? null:count++;
			 
		  }
		if(count === port.rows.length)
		{dialogAlert.showModal();
		port.id === "table-attaccanti"?
		dialogAlertP.innerHTML =`Il budget ci serve anche per gli altri ruoli!!<br><br> Hai finito gli slot per gli ${selectInput.options[selectInput.selectedIndex].value}`:		
		dialogAlertP.innerHTML =`Il budget ci serve anche per gli altri ruoli!!<br><br> Hai finito gli slot per i ${selectInput.options[selectInput.selectedIndex].value}`;
		dialogAlertOk.addEventListener('click',() => dialogAlert.close())} else {update()}	;
		console.log(count,port.rows.length)
	}
	 else{
		 if(creditiIniziali.value === ""){
	   dialogAlert.showModal();
	   dialogAlertP.innerHTML = 'Il presidente ci ha dato un budget, non usarlo solo per te!<br><br>Inserisci i crediti iniziali!';
	   dialogAlertOk.addEventListener('click',() => dialogAlert.close())}
	  else if(textInput.value === ""){
	   dialogAlert.showModal();
	   dialogAlertP.innerHTML = 'Se non prendiamo nessuno perderemo il campionato sicuro!<br><br>Inserisci un giocatore!';
	   dialogAlertOk.addEventListener('click',() => dialogAlert.close())}
	  else if(numberInput.value === ""){
       dialogAlert.showModal();
	   dialogAlertP.innerHTML = 'I parametri zero lasciamoli al condor Galliani!<br><br>Inserisci il prezzo!';
	   dialogAlertOk.addEventListener('click',() => dialogAlert.close())} 
      else{ dialogAlert.showModal();
	   dialogAlertP.innerHTML = 'Non possiamo giocare solo con i panchinari!<br><br>Inserisci il ruolo!';
	   dialogAlertOk.addEventListener('click',() => dialogAlert.close())}}
    innerTextMath();
	crediti();
	mouseOver()
	//automaticSelectRole();

}

function crediti(){
	mathP.innerText === ""? mathP.value=0 : mathP.value=parseInt(mathP.innerText);
	mathD.innerText === ""? mathD.value=0 : mathD.value=parseInt(mathD.innerText);
	mathC.innerText === ""? mathC.value=0 : mathC.value=parseInt(mathC.innerText);
	mathA.innerText === ""? mathA.value=0 : mathA.value=parseInt(mathA.innerText);
    let totCreditiResidui = creditiIniziali.value-(mathP.value+mathD.value+mathC.value+mathA.value);
	creditiResidui.innerText = totCreditiResidui;
	creditiResidui.value=parseInt(creditiResidui.innerText);
	let allMath = document.querySelectorAll('.math-div');
	allMath.forEach((elem) => {if(elem.value===0){elem.innerText=""}});
}

 
		

function innerTextMath(){
		
	let contP = [];
	let totP = 0 ;
    let contD = [];
	let totD = 0 ;
	let contC = [];
	let totC = 0 ;
	let contA = [];
	let totA = 0 ;
	
    for(let i=0; i<document.getElementById('table-portieri').rows.length -1; i++){
		if(document.getElementById('table-portieri').rows[i+1].cells[1].innerText !== ""){
	  contP.push(parseInt(document.getElementById('table-portieri').rows[i+1].cells[1].innerText));
		}else{contP.push(0)}
	totP += contP[i]
	mathP.innerText = totP}
	
	for(let i=0; i<document.getElementById('table-difensori').rows.length - 1; i++){
		if(document.getElementById('table-difensori').rows[i+1].cells[1].innerText !== ""){
	  contD.push(parseInt(document.getElementById('table-difensori').rows[i+1].cells[1].innerText));
	   totD += contD[i];}else{contD.push(0)}
	mathD.innerText = totD};
	
	for(let i=0; i<document.getElementById('table-centrocampisti').rows.length -1; i++){
		if(document.getElementById('table-centrocampisti').rows[i+1].cells[1].innerText !== ""){
	  contC.push(parseInt(document.getElementById('table-centrocampisti').rows[i+1].cells[1].innerText));
	   totC += contC[i];}else{contC.push(0)}
	mathC.innerText = totC};
	
	for(let i=0; i<document.getElementById('table-attaccanti').rows.length -1; i++){
		if(document.getElementById('table-attaccanti').rows[i+1].cells[1].innerText !== ""){
	  contA.push(parseInt(document.getElementById('table-attaccanti').rows[i+1].cells[1].innerText));
	   totA += contA[i];}else{contA.push(0)}
	mathA.innerText = totA};
	

	
	}
   

   
	

 



function selectChange() {
	if (selectInput.options[selectInput.selectedIndex].value !==""){
	    addOptionChange(clearClass());
	}else{clearClass()}
}
	

function clearClass() {
	let clear= "pdca"
	let cle = "";
	let field = ""
	let legend = ""
	for (let i=0 ; i < clear.length ; i++){
	cle += clear[i];
	field += document.getElementById(`field-${clear[i]}`).classList.remove(`fieldset-${clear[i]}`)
	legend += document.getElementById(`legend-${clear[i]}`).classList.remove(`legend-${clear[i]}`)
	}
} 

function addOptionChange (){
		let optionValue = selectInput.options[selectInput.selectedIndex].value;
		document.getElementById(`field-${optionValue[0]}`).classList.add(`fieldset-${optionValue[0]}`);
        document.getElementById(`legend-${optionValue[0]}`).classList.add(`legend-${optionValue[0]}`);
}

function removeOptionChange (){
		let optionValue = selectInput.options[selectInput.selectedIndex].value;
		document.getElementById(`field-${optionValue[0]}`).classList.remove(`fieldset-${optionValue[0]}`);
        document.getElementById(`legend-${optionValue[0]}`).classList.remove(`legend-${optionValue[0]}`);
}


	

	
const changeModify = () => {
	         getId();
            if (document.getElementById(id).id.includes("Price")){
			dialog.showModal();
			document.getElementById('dialog-p').innerText = "Modifica il prezzo del giocatore:";
			dialogInput.setAttribute('type', 'number');
			dialogInput.setAttribute('style', 'width: 80px')}
			else if(document.getElementById(id).id.includes("Name"))
			{dialog.showModal();
		    document.getElementById('dialog-p').innerText = "Modifica il nome del giocatore:";
			dialogInput.setAttribute('type', 'text');
			dialogInput.setAttribute('style', 'width: 250px')}
			else if(document.getElementById(id).id = "crediti-iniziali2"){
			document.getElementById('dialog-reset').classList.add('hidden');
			document.getElementById('dialog-p').innerText = "Modifica i crediti:"
			dialog.showModal();
			
			dialogInput.setAttribute('type', 'number');
			dialogInput.setAttribute('style', 'width: 80px');
			}
		 };

function dialogOk (id){
	let elem = document.getElementById(id);
	if (dialogInput.value === ""){
	 alert ('Inserisci un valore');
	 }else if(id === "crediti-iniziali2"){
		 elem.innerText = dialogInput.value;
		 creditiIniziali.value = dialogInput.value;
		 document.getElementById('dialog-reset').classList.remove('hidden');
         playerData.forEach((playerData) => playerData.creditiIniziali=dialogInput.value);
		 localStorage.setItem("data", JSON.stringify(playerData));
		 
		 innerTextMath();
		 crediti();
         dialog.close();
		 dialogInput.value = ""}	 
	 else{
		 elem.innerText = dialogInput.value;
		 dialog.close();
		 dialogInput.value="";
		 const indexN = playerData.findIndex((e) => e.nameId === id);
		 const indexP = playerData.findIndex((e) => e.priceId === id);
		 indexP === -1? playerData[indexN].name = elem.innerText:playerData[indexP].price = elem.innerText;
		  localStorage.setItem("data", JSON.stringify(playerData));
		  innerTextMath();
		 crediti();
		    
	 }
	 }

function dialogReset (id){
		let elem = document.getElementById(id);
		elem.parentNode.childNodes.forEach((elem) => elem.innerText = "")
		elem.parentNode.childNodes.forEach((elem) => elem.onmouseover = 0);
		elem.removeAttribute('onclick');
		
		switch (elem.parentNode.parentNode.id){
			case  "table-portieri" :
		elem.parentNode.childNodes.forEach((elem) => elem.classList.remove("td-border-p"));
		break;
		
		case "table-difensori" :
		  elem.parentNode.childNodes.forEach((elem) => elem.classList.remove('td-border-d'))
        break;
		  
		case "table-centrocampisti" :
		  elem.parentNode.childNodes.forEach((elem) => elem.classList.remove('td-border-c'))
		break;
		  
		case "table-attaccanti" :
		  elem.parentNode.childNodes.forEach((elem) => elem.classList.remove('td-border-a'))
		break;
		};
		 const indexN = playerData.findIndex((e) => e.nameId === id);
		 const indexP = playerData.findIndex((e) => e.priceId === id);
		 indexP === -1? playerData.splice(indexN, 1):playerData.splice(indexP,1);
		localStorage.setItem("data", JSON.stringify(playerData));
		innerTextMath();
		crediti();
		dialog.close();
			
		}
		

function mouseOver(){
	textOutput2.forEach((e)=> {if(e.innerText !== ""){
		e.onmouseover = ()=> e.classList.add('mouse-over');
		e.onmouseout = ()=> e.classList.remove('mouse-over')}});
	
}

function update() {
   let inputT = textInput.value;
   let inputN = numberInput.value;
   let selected =document.getElementById(`table-${selectInput.options[selectInput.selectedIndex].value}`)
   	
     for(i=1; i<selected.rows.length; i++){
       if(selected.rows[i].cells[0].innerText === ""){
      selected.rows[i].cells[0].innerText = inputT;
      selected.rows[i].cells[1].innerText = inputN;
	  selected.rows[i].cells[0].id = `_${selectInput.options[selectInput.selectedIndex].value}_Name`+i;
	  selected.rows[i].cells[1].id = `_${selectInput.options[selectInput.selectedIndex].value}_Price`+i;	  
	  selected.rows[i].cells[0].setAttribute('onclick','changeModify()');
	  selected.rows[i].cells[1].setAttribute('onclick','changeModify()');
	  /*selected.rows[i].cells[0].onmouseover =  () => selected.rows[i].cells[0].classList.add('mouse-over');
	  selected.rows[i].cells[1].onmouseover = () => selected.rows[i].cells[1].classList.add('mouse-over');
	  selected.rows[i].cells[0].onmouseout = () => selected.rows[i].cells[0].classList.remove('mouse-over');
	  selected.rows[i].cells[1].onmouseout = () => selected.rows[i].cells[1].classList.remove('mouse-over');*/
	  
	  	  
	  clearString();
	    switch (selected.id){
		  case  "table-portieri" :
		  selected.rows[i].cells[0].classList.add("td-border-p")
		  selected.rows[i].cells[1].classList.add("td-border-p")
		  

		break;
		
		case "table-difensori" :
		  selected.rows[i].cells[0].classList.add("td-border-d")
		  selected.rows[i].cells[1].classList.add("td-border-d")
		  break;
		  
		  case "table-centrocampisti" :
		  selected.rows[i].cells[0].classList.add("td-border-c")
		  selected.rows[i].cells[1].classList.add("td-border-c")
		  break;
		  
		  case "table-attaccanti" :
		  selected.rows[i].cells[0].classList.add("td-border-a")
		  selected.rows[i].cells[1].classList.add("td-border-a")
		  break;
		}
		let playerObj = {
	nameId: `_${selectInput.options[selectInput.selectedIndex].value}_Name`+i,
	priceId: `_${selectInput.options[selectInput.selectedIndex].value}_Price`+i,
	name: inputT,
	price: inputN,
	position: selectInput.options[selectInput.selectedIndex].value,
	creditiIniziali: creditiIniziali.value}
	playerData.push(playerObj);
	localStorage.setItem("data", JSON.stringify(playerData));
return}
	 else { i+1}}
	 

}

const clearString = () => {
   if (textInput.value !== ""){
    textInput.value = ""
    numberInput.value = ""}
   
}
const storageClear = () => {localStorage.clear();dialogData.close();dialogSure.close();playerData=[];tableData=[];dialogTable()}

dialogOkBtn.addEventListener("click",() => dialogOk(id));
dialogAnnullaBtn.addEventListener("click", () => {dialog.close();document.getElementById('dialog-reset').classList.remove('hidden')});
dialogResetBtn.addEventListener('click', () => dialogReset(id));	
submitBtn.addEventListener("click",submit);
numberInput.addEventListener("keydown", function(e){
  if (e.key === "Enter") {event.preventDefault();
submit()}});
textInput.addEventListener("keydown", function(e){
  if (e.key === "Enter") {event.preventDefault();
submit()}});
dialogNewSession.addEventListener('click', () => dialogSure.showModal());
dialogSureYes.addEventListener('click',() =>
 storageClear());
dialogSureNo.addEventListener('click', () => dialogSure.close());
dialogLoadData.addEventListener('click', () => {if(playerData.length === 0){storageTable()}else{storageTable();storageData()}});
document.getElementById('modifica-tab').addEventListener('click',()=>{playerData.length!==0? dialogTableSure():dialogTable()});



