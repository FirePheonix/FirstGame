var Money = parseInt(localStorage.Money) || 100;

var ClnUpPrice = parseInt(localStorage.ClnUpPrice) || 1000;
var DPC = parseInt(localStorage.DPC) || 1;

var ConUpPrice = parseInt(localStorage.ConUpPrice) || 2000;
var Company2 = parseInt(localStorage.Company2) || 1;

var MalUpPrice = parseInt(localStorage.MalUpPrice) || 10000; 
var Mall2 = parseInt(localStorage.Mall2) || 1;

var G5 = 0;
var G100 = 0;
var G10T = 0;
var G10M = 0;
var G10B = 0;
var G10Tr = 0;

var Company = parseInt(localStorage.Company) || 0;
var CompanyPrice = parseInt(localStorage.CompanyPrice) || 5;

var Mall = parseInt(localStorage.Mall) || 0;
var MallPrice = parseInt(localStorage.MallPrice) || 1000;

updateScreen();

function tutorial() {
	alert("	 Your goal is to make people spend money on products \(or other things\)and you get paid MONEY!!!! HF GL!!");
}

function Reset(){
	Money = Money - Money + 100;

	ClnUpPrice = 1000;
	DPC = 1;

	ConUpPrice = 2000;
	Company2 = 1;

	MalUpPrice = 10000; 
	Mall2 = 1;

	Company = 0;
	CompanyPrice = 5;

	Mall = 0;
	MallPrice = 1000;

	updateScreen();
}
// tutorial();
// what is above is the last finishing touches uncomment tutorial(); and the game will be complete
// what is below is the Dollars per second all the towers cobine have and the base price of this game which is 1 dollar per second
setInterval(function() {
	Money = Money + 1;
	Money = Money + (Company * 1 * Company2);
	Money = Money + (Mall * 100 * Mall2);
	console.log(Company * 1 * Company2);
	SAV();
	updateScreen();
}, 1000);

function updateScreen() {	
	document.getElementById('money').innerHTML = "$ " + format(Money);
	document.getElementById('companies').innerHTML = " You have " + format(Company) + " companies.";
	document.getElementById('companyprice').innerHTML =  format(CompanyPrice) + " dollars for next company.";		
	document.getElementById('mallprice').innerHTML =  format(MallPrice) + " dollars for next mall.";
	document.getElementById('mall').innerHTML = " You have " + format(Mall) + " malls.";	
}

function ClickMoney2price() {
	alert(format(ClnUpPrice));
}

//below the 2 functions are the extra money you get per click 
function CompanyMoney2price() {
	alert(format(ConUpPrice));
}

function MallMoney2price() {
	alert(format(MalUpPrice));
}

function ClickMoney2() {
	if (Money < ClnUpPrice) {
		console.log('Not enough money!!!');
		return;
	}
	DPC = DPC * 2;
	Money = Money - ClnUpPrice;
	ClnUpPrice = ClnUpPrice * 10;
	updateScreen();
}

// Dpc is the dollars per click reason for future dollar upgrades
function ClickMoney() {
	Money = Money + DPC;
	updateScreen();
}

//company upgrades
function CompanyMoney2() {
	if (Money < ConUpPrice) {
		console.log('Not enough money!!!');
		return;
	}
	Company2 = Company2 + Company2;
	Money = Money - ConUpPrice;
	ConUpPrice = ConUpPrice * 10;
	updateScreen();
}

function MallMoney2() {
	if (Money < MalUpPrice) {
		console.log('Not enough money!!!');
		return;
	}
	Mall2 = Mall2 + Mall2;
	Money = Money - MalUpPrice;
	MalUpPrice = MalUpPrice * 10;
	updateScreen();

}

//gamble away 5 dollars function
function Gamble5() {
	if (Money >= 5) {
		G5 = Math.random() * 10;
		G5 = Math.round(G5);
		console.log(G5);
		Money = Money + G5 - 5
		updateScreen();
	}
}

function Gamble100() {
	if (Money >= 100) {
		G100 = Math.random() * 200;
		G100 = Math.round(G100);
		console.log(G100);
		Money = Money + G100 - 100
		updateScreen();
	}
}

function Gamble10T() {
	if (Money >= 10000) {
		G10T = Math.random() * 20000;
		G10T = Math.round(G10T);
		console.log(G10T);
		Money = Money + G10T - 10000;
		updateScreen();
	}
}

function Gamble10M() {
	if (Money >= 10000000) {
		G10M = Math.random() * 20000000;
		G10M = Math.round(G10M);
		console.log(G10M);
		Money = Money + G10M - 10000000;
		updateScreen();
	}
}

function Gamble10B() {
	if (Money >= 10000000000) {
		G10B = Math.random() * 20000000000;
		G10B = Math.round(G10B);
		console.log(G10B);
		Money = Money + G10B - 10000000000;
		updateScreen();
	}
}

function Gamble10Tr() {
	if (Money >= 10000000000000) {
		G10Tr = Math.random() * 20000000000000;
		G10Tr = Math.round(G10Tr);
		console.log(G10Tr);
		Money = Money + G10Tr - 10000000000000;
		updateScreen();
	}
}

function SAV() {
	localStorage.Money = Money;
	localStorage.Company = Company;
	localStorage.CompanyPrice = CompanyPrice;
	localStorage.DPC = DPC;
	localStorage.ClnUpPrice = ClnUpPrice;
	localStorage.ConUpPrice = ConUpPrice;
	localStorage.Company2 = Company2;
	localStorage.Mall = Mall;
	localStorage.MallPrice = MallPrice;
	localStorage.MalUpPrice = MalUpPrice;
	localStorage.Mall2 = Mall2;
}

function format(str) { 
   var ret = String(str).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");
   return ret;
}

// the 1000 being one second so this will pulse every one second
// this below is the buy company code
function BCompany() {
	if (Money >= CompanyPrice) {
		Company = Company + 1;
		Money = Money - CompanyPrice;
		CompanyPrice = Company * (5 * 1.115);
		updateScreen();
		CompanyPrice = Math.round(CompanyPrice);
		updateScreen();
	}
}

// this below is the sell company code
function SCompany() {
	if (Company > 0) {
		Company = Company - 1;
		Money = Money + 5;
		CompanyPrice = Company * (5 * 1.115);
		CompanyPrice = Math.round(CompanyPrice);
		updateScreen();
	}
}


function BMall() {
	if (Money >= MallPrice) {
		Mall = Mall + 1;
		Money = Money - MallPrice;
		MallPrice = Mall * (1000 * 1.115);
		MallPrice = Math.round(MallPrice);
		updateScreen();
	}
}

function SMall() {
	if (Mall > 0) {
		Mall = Mall - 1;
		Money = Money + 1000;
		MallPrice = Mall * (1000 * 1.115);
		MallPrice = Math.round(MallPrice);
		updateScreen();
	}
}