var known = document.currentScript.getAttribute('KnownScale'); //1
var unknown = document.currentScript.getAttribute('UnknownScale'); //2
var id = document.currentScript.getAttribute('id'); //1

var doughnutData = [
									{
										value: parseInt(known),
										color:"#1abc9c"
									},
									{
										value : parseInt(unknown),
										color : "#ecf0f1"
									}
								];
var myDoughnut = new Chart(document.getElementById(id).getContext("2d")).Doughnut(doughnutData);
var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#canvas')) {
        if (inView) { return; }
        inView = true;
        new Chart(document.getElementById(id).getContext("2d")).Pie(data);
    } else {
        inView = false;
    }
});
