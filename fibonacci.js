function fibonacciGenerator (n) {
      
    var output = [0,1];
    
    for (var i = 2; i < n; i++) {

        length = output.length;
        output.push(output[length-1] + output[length -2]);
    }
    
    if (n === 1) {
        output = [0];
    }
    
    return alert(output);
 
}

fibonacciGenerator(1);
