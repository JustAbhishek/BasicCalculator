var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var resultfield = document.getElementById('resultfield');
var form = document.getElementById('xIsWhatPercentageOfY')

form.addEventListener('submit',function(event) {
    
    if(!numfield1.value || !numfield2.value){
        alert("Please enter values in the fields");    
    } else{
            var x= parseFloat(numfield1.value);
            var y= parseFloat(numfield2.value);
        
        var result = x / y;
        var percent = result *100;
        
        resultfield.innerText = "Answer: " + percent + "%";
         event.preventDefault();
        }
});