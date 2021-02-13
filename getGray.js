function getValue()
{
var str = new String(document.getElementById("input_1").value);
var str2 = str[0];
for(i = 1; i<str.length;i++)
{
	if(parseInt(str2[i-1])+parseInt(str[i]) == 2||parseInt(str2[i-1])+parseInt(str[i]) == 0)
		str2 = str2 + "0";
	else
		str2 = str2 +  "1";	
}
document.getElementById("1").innerHTML = str2;
}