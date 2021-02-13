function getValue() {
    var len = new String(document.getElementById("Length").value);
    var area = new String(document.getElementById("Area").value);
    var per = new String(document.getElementById("Permeability").value);

    var l = parseFloat(len); 
    var a = parseFloat(area); 
    var p = parseFloat(per); 

    var u = 12.5663706
    var S = (l*1000000000)/(p*a*u)
    
    
    document.getElementById("1").innerHTML = S;
  }