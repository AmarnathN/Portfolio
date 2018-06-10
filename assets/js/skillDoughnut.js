var known = document.currentScript.getAttribute('KnownScale'); //1
var unknown = document.currentScript.getAttribute('UnknownScale'); //2
var id = document.currentScript.getAttribute('id'); //1

var doughnutData = [
									{
										value:(function(){ 
        var myvariable = known; 
        return myvariable; 
    })(),
										color:"#1abc9c"
									},
									{
										value : 20,
										color : "#ecf0f1"
									}
								];
var myDoughnut = new Chart(document.getElementById('db').getContext("2d")).Doughnut(doughnutData);
						