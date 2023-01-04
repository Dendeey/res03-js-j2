/* Exo 1 */

function add(number1, number2)
{
    return number1 + number2;
}

//let result = add(2, 3);
//console.log(result);

function sub(number1, number2)
{
    return number1 - number2;
}

//let result1 = sub(2, 3);
//console.log(result1);

function mult(number1, number2)
{
    return number1 * number2;
}

//let result2 = mult(2, 3);
//console.log(result2);

function div(number1, number2)
{
    return number1 / number2;
}

//let result3 = div(2, 3);
//console.log(result3);

function mod(number1, number2)
{
    return number1 % number2;
}

//let result4 = mod(2, 3);
//console.log(result4);

/* Exo 2 */

function askUserOperation()
{
    let UserOperation = window.prompt("Quelle opération souhaitez-vous faire ?");
    return UserOperation;
}

function askFirstNumber()
{
    let FirstNumber = window.prompt("Premier nombre ?");
    return FirstNumber;
    
}

function askSecondNumber()
{
    let SecondNumber = window.prompt("Second nombre ?");
    return SecondNumber;
}


/* Exo 3 */

function calculator() 
{
    let firstnb = parseInt(askFirstNumber());
    let userOperation = askUserOperation();
    let secondnb = parseInt(askSecondNumber());
    let result;
    
    if(userOperation === "+")
    {
        result = add(firstnb, secondnb);
    }
    
    else if(userOperation === "-")
    {
        result = sub(firstnb, secondnb);
    }
    
    else if(userOperation === "*")
    {
        result = mult(firstnb, secondnb);
    }
    
    else if(userOperation === "/")
    {
        result = div(firstnb, secondnb);
    }
    
    else if(userOperation === "%")
    {
        result = mod(firstnb, secondnb);
    }
    
    else
    {
        return "False";
    }
    
    return result;
}

let Result = calculator();
window.alert(`Voici votre résultat ${Result}`);