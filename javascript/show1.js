function show() {
    var first = parseInt(document.getElementById("first").value)
    var second = parseInt(document.getElementById("second").value)
    var third = parseInt(document.getElementById("third").value)
    console.log(first,second,third)
    var total = first + second + third ;
    document.getElementById("total").innerHTML=total ;
  
    if (first,second,third=>40) {
        var result = 'passed'
        if (first>=80 || second>=80 || third>=80){
            result ="Passed with Distinction"
        }
    } else {
        var result = 'lose'
    }
    
    document.getElementById("result").innerHTML=result ;




    
}