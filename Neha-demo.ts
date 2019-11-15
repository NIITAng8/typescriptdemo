console.log('1. hello world')

let year:number=1996
if(year%4==0) console.log('2. It is a leap year')
	else console.log('2. It is not a leap year')

let planetyears=new Map([["Mercury":88],["Venus":225],["Earth":365],["Mars":687],["Jupiter":4380],["Saturn":10585],["Uranus":30660],["Neptune":60225]]);
let planet:string="Jupiter"
let ageInDays:number=9401
let ageinyears:string;
for(let [key,value] of planetyears){
	if(key==planet){
		ageinyears=Math.floor(ageInDays/value)+' years '+ageInDays%value+' days'
		console.log("3.",ageinyears)
	}	
}


let sentence:string="Hello this is neha hello this";
let wordcount=sentence.toLowerCase().split(" ");
let repetition:{}={}
wordcount.forEach(val=>{
	if(repetition.hasOwnProperty(val)
		repetition[val]++
	else
		repetition[val]=1
})
console.log("4.",repetition)

let username:string="neha" 
console.log("5.",username.split("").reverse().join(""))

let sideA=90;
let sideB=45;
let sideC=45;
if(sideA+sideB+sideC==180)
console.log('6.',(sideA == sideB && sideB == sideC) && 'Equilateral Triangle' ||
  (sideA == sideB || sideA == sideC || sideB == sideC) && 'Isosceles Triangle' ||
  'Scalene Triangle');
else console.log('6. Please enter valid traingle sides')

let num:number=34
let numarr=num.toString().split("")
let powerednum:number=0;
for(let i=0;i<numarr.length;i++)
{
	powerednum+=Math.pow(numarr[i],numarr.length)
}
if(powerednum==num)
	console.log("7. The given number is Armstrong Number")
else 
	console.log("7. The given number is not Armstrong Number")