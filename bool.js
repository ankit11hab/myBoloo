function getValue()
{
var s = new String(document.getElementById("input_1").value);
var n = s.length;
var a = "";
var b = "";
var i = 0;
for(i = 0; i<n;i++)
{
	if(s[i]==",")
    {
		b = b + " + " +a;
        a = "";
    }

	else
    {
    
        if(s[i]=="0")
        {
		    a = a + "A'B'C'";
            document.getElementById("2").innerHTML = 1;
        }
        if(s[i]=="1")
        {
		    a = a + "A'B'C";
            document.getElementById("3").innerHTML = 1;
        }
        if(s[i]=="2")
        {
		    a = a + "A'BC'";
            document.getElementById("4").innerHTML = 1;
        }
        if(s[i]=="3")
        {
		    a = a + "A'BC";
            document.getElementById("5").innerHTML = 1;
        }
        if(s[i]=="4")
        {
		    a = a + "AB'C'";
            document.getElementById("6").innerHTML = 1;
        }
        if(s[i]=="5")
        {
		    a = a + "AB'C";
            document.getElementById("7").innerHTML = 1;
        }
        if(s[i]=="6")
        {
		    a = a + "ABC'";
            document.getElementById("8").innerHTML = 1;
        }
        if(s[i]=="7")
        {
		    a = a + "ABC";
            document.getElementById("9").innerHTML = 1;
        }
        
    }	
}
document.getElementById("1").innerHTML = b;
}