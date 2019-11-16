var numberCount = 0;
var opsCount = 0;
var countCalcs = 0;

function val()
{
    return app.textview.value;
}
    
//ID Parameters equals 0 is numeric and 1 is operation
function insert(num, isops) 
{
    if(isNaN(num) == false)
    {
        numberCount = numberCount + 1;
    }
    else
    {
        if(numberCount > 0)
        {
            opsCount = opsCount +1;
        }
        else
        {
            throw("You have to chose one number first!")
        }
    }
    
    app.textview.value= val() + num;
}

function cleanCalc()
{
    cleanMemory();
    app.textview.value= "";
    numberCount = 0;
    opsCount=0;
    countCalcs = 0;

    document.getElementById("logList").innerHTML =""
}

function cleanMemory()
{
    document.getElementById("previouscalc").innerHTML = ""
}

function equal()
{
    var exp = val();
    
    if(exp && opsCount > 0)
    {
        cleanMemory();
        
        var expInitial = val();
        var result = eval(expInitial); 
        var expFinal = expInitial + " = " + result;
        app.textview.value = result;
        document.getElementById("previouscalc").innerHTML = expFinal;
        opsCount= 0;
        updateLog(expFinal)
    }
}

function erase()
{
    var exp = val();
    app.textview.value = exp.substring(0,exp.length-1);
    exp = val();
    if (exp.length <1)
    {
        numberCount = 0;
        opsCount= 0;
    }
}

function updateLog(exp)
{
    countCalcs = countCalcs +1;
    var list = document.createElement("LI");
    var value = document.createTextNode("[N" + countCalcs + "] " + exp);
    list.appendChild(value);
    document.getElementById("logList").appendChild(list);
}