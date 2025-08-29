const result  =document.getElementById('result') ;
function display(num){
    result.value+= num;
}
function calculator (){
    result.value=eval(result.value)
}
function clearResult(){
    result.value='';
}
function clean(){
    result.value=result .value.slice(0,-1)
}