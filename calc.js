let val1=document.getElementById("num1");
let val2=document.getElementById("num2");
function Add()
{
    let res=Number(val1.value)+Number(val2.value);
    console.log("Add result:", res);
    document.getElementById("Result").textContent=res;
}
function Sub()
{
    let res=Number(val1.value)-Number(val2.value);
    console.log("Sub result:", res);
    document.getElementById("Result").textContent=res;
}
function Mul()
{
    let res=Number(val1.value)*Number(val2.value);
    console.log("Mul result:", res);
    document.getElementById("Result").textContent=res;
}
function Div()
{
    let res=Number(val1.value)/Number(val2.value);
    console.log("Div result:", res);
    document.getElementById("Result").textContent=res;
}
