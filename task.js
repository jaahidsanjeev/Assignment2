// // console.log("task.js loaded secessfully.");
// // console.log(1+2;
// //     let score=10;
// //     score=score+1;
// //     console.log("updaded score",)
// // )

// const bikes=[{name:"Domi250",cc:250},{name:"R15",cc:155},{name:"RC200",cc:200},{name:"Jawa",cc:335},{name:"Classic 350",cc:350}];
// const passed= bikes.filter((s)=>s.cc>=200).map((s)=>s.name).sort().reverse();
// console.log(passed);


// prices=[120,60,899];
// const total=prices.reduce((a,p)=>a+p,0);
// console.log(total);

// students=[{name:"Kiran",marks:85},{name:"Karen",marks:90},{name:"Rahul",marks:75}];
// const student=students.find(s=>s.name==="Kiran");
// console.log(student?student.marks:"Not found");


// const makeGreeter=(greeting)=>(name)=>
// {
//     return greeting + name
// }
// let res1=makeGreeter("Hello")("Asha")
// console.log(res1);


async function loaduser()
{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const users=await res.json()
        console.log(users)
        const result=users.map((x)=>x.name)
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
    
}
loaduser();