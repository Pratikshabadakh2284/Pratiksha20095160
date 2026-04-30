let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

let eulerlist=()=>
{
   let a = parseInt(document.getElementById('a').value);
   let b = parseInt(document.getElementById('b').value);
   let l = document.getElementById('l').value.split(" ").map((x=>parseInt(x));
   let sum = 0;
    for(let x of l)
    {
        if(a%x===0 || b%x===0){
            sum+=x
        }
    }
    alert("Sum of multiples of a or b in list l" + sum);
    
}
let euler2Lists=()=>
{
    a=[2,3]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler2 and alert.
}

let euler2Lists1=()=>
{
    a=[2,3,5]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler3 and alert.
}
