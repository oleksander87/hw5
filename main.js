
//-------------Davydenko-Oleksandr-FEA-12-------------------------------------------
//---------------------HOME WORK 5--------------------------------------------------
//-----------------------HW 5.1-----------------------------------------------------
//----------------------------------------------------------------------------------

function samFunc () {
    console.log (`${arguments.callee.name}:${arguments[0]}|${arguments[1]}`);
}

function modificator (func) {
    var first = 'test', second = 'sample';
     return func.bind (null,first, second);  
    } 

testFunc = modificator (samFunc);
testFunc();

//----------------------------------------------------------------------------------
//-------------------------HW 5.2---------------------------------------------------
//----------------------------------------------------------------------------------

function sampleFunc() {
    console.log (`Symbols in my code: ${arguments.callee+0}`);
}

function modificator (func){
    func.valueOf=function(){return func.toString().length}
}

modificator(sampleFunc);
sampleFunc();

//-----------------------------------------------------------------------------------