const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonElement=document.querySelector('button')!;

const numResults: Array<number> =[];
const textResults: string[] =[];

type NumorString =number | string;
type Result ={val:number; timestamp:Date};
//can be used as type too
interface ResultObj {
    val:number; 
    timestamp:Date
}

function add(num1: NumorString,num2: NumorString){
    if(typeof(num1)==='number' && typeof(num2)==='number'){
        return num1+num2;
    }
    else if(typeof(num1)==='string' && typeof(num2)==='string'){
        return num1+num2;
    }
    else{
        return +num1 + +num2;
    }

}

function printResult(resultObj:Result){
    console.log(resultObj.val)
}

buttonElement.addEventListener('click',()=>{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result =add(+num1,+num2);
    const stringResult=add(num1,num2);
    numResults.push(result as number);
    textResults.push(stringResult as string);
    
    printResult({val:result as number,timestamp:new Date()});
    console.log(numResults,stringResult);
})

const myPromise =new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It worked');
    },1000);
});

myPromise.then(result=>{
    console.log(result.split('w'));
})
//commands
//tsc app.ts
//tsc --init for adding configuration