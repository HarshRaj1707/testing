function simpleInterestCalculator()
{
    let p=document.getElementById("amount").value;
    let r=document.getElementById("percent").value;
    let t=document.getElementById("year").value;
    if(r=="")
    {
        alert("fill the field");
    }
    else{
    let result=document.getElementById("do");
    result.innerHTML="Simple Interest is "+(p*r*t/100);
    }
}
function resetting()
{
    let alpha=document.getElementsByClassName("bhai");
    for(let i=0;i<alpha.length;i++)
    {
        alpha[i].value="";
    }
    let result=document.getElementById("do");
    result.innerHTML="";
}