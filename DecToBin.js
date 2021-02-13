function getValue()
{
var a =  parseFloat(document.getElementById("input_1").value);;
var intr = Math.floor(a);
var deci = a - Math.floor(a);
var i = 0;
var j = 0;
var arrd = new Array(15);
var arr = new Array(12);
while(intr>0)
{
	arr[i] = intr%2;
	intr = parseInt(intr/2);
	i++;
}
var y = arr.reverse();
document.getElementById("1").innerHTML =y.join("");
if(deci == 0)
	{
	document.getElementById("2").innerHTML = " ";
	}
else
{
document.getElementById("3").innerHTML = ".";
while(deci!=0)
{
	
	deci=deci*2;
	arrd[j] = Math.floor(deci);
	deci = deci - Math.floor(deci);
	j++;
}
	document.getElementById(4).innerHTML = arrd.join("");
}
}