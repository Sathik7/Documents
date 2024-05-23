function runme()
{
    var p,r,y,yy,mm,n,rr,rn,e;
    var emi=document.getElementById("emi");
    var month=document.getElementById("month");
    var principle=document.getElementById("principle");
    var interest=document.getElementById("interest");
    var total=document.getElementById("total");
    var balance=document.getElementById("balance");
    var paid1=document.getElementById("paid");
    //var tot=document.getElementById("tot");
    p=parseInt(document.getElementById("p").value);
    r=parseInt(document.getElementById("r").value);
    y=parseInt(document.getElementById("y").value);
    yy=parseInt(document.getElementById("yy").value);
    mm=parseInt(document.getElementById("mm").value);
    n=y*12;
    rr=(r/12)/100;
    rn=Math.pow((1+rr),n);
    e=p*rr*((rn)/(rn-1));
    e=Math.round(e);
    emi.innerHTML=e;
    //---------Table---------
    const month1=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    var ee,b,bb,count,pp,paid,ii;
    //ans.innerHTML="| month | prtinciple | interest | Total | balance | %paid<br>";
    ee=e*n;
    b=ee;
    //var ppp;
    //tot.innerHTML=ee;
    bb=p;
    count=mm;
    pp=0;
    paid=0;
    month.innerHTML="Month<br>";
principle.innerHTML="Principle<br>";
interest.innerHTML="interest<br>";
total.innerHTML="Total<br>";
balance.innerHTML="Balance<br>";
paid1.innerHTML="Paid(%)<br>";
month.innerHTML+=month1[count-1]+" "+yy+"<br>";
        principle.innerHTML+="0<br>";
        interest.innerHTML+=e+"<br>";
        total.innerHTML+=e+"<br>";
        balance.innerHTML+=bb+"<br>";
        paid1.innerHTML+=paid+"<br>";
    while(paid<100){
        b=b-e;
        paid=100-(b/ee)*100;
        ii=(ee-p);
        ii=ii/n;
        pp=e-ii;
        var pp1=Math.trunc((paid/100)*e);
        var ii1=Math.trunc(e-pp1);
        //pp=Math.trunc((paid/100)*ppp);
        //ii=Math.trunc(e-pp);
        var temp=Math.trunc(b);
        bb-=Math.trunc(pp);
        if (count%12==0){
            yy+=1;
            count-=12;
            
        }
        paid=Math.trunc(paid);
        //ans1.innerHTML+="|"+month[count]+" "+yy+" | "+pp+"   | "+ii+"  |  "+e+"  |  "+bb+"	|"+paid+"<br>";
        month.innerHTML+=month1[count]+" "+yy+"<br>";
        principle.innerHTML+=pp1+"<br>";
        interest.innerHTML+=ii1+"<br>";
        total.innerHTML+=e+"<br>";
        balance.innerHTML+=bb+"<br>";
        paid1.innerHTML+=paid+"<br>";

        count+=1;
    }
    month.innerHTML+=month1[count]+" "+yy+"<br>";
        principle.innerHTML+=bb+"<br>";
        interest.innerHTML+=ii1+"<br>";
        total.innerHTML+=e+"<br>";
        balance.innerHTML+="0<br>";
        paid1.innerHTML+=paid+"<br>";
}