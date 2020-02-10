const result = document.getElementById("output");
var operation = "";

function insert(num){
    if(result.value=='0'){
        result.value="";
    }
    result.value+=num;
    operation+=num;
}

function ac(){
    result.value=0;
    operation = "";
}

function count(type){
    operation = result.value
    result.value
    switch(type){
        case '+':
            operation+="+";
            break;
        case '-':
            operation+="-";
            break;
        case '/':
            operation+="/";
            break;
        case 'x':
            operation+="*";
            break;
    }
    result.value='';
}

function show_output(){
    result.value = eval(operation);
}


// a tu se machniemy dla przeciwczenia arrow function bo mozna se krocej zrobic
document.querySelector("input[value='+-']").addEventListener('click', ()=>result.value*=(-1) );


//a tu tak o :D 
document.querySelector("input[value='%']").addEventListener('click',function(){
    result.value = result.value/100;
});
