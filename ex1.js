let salaries={
    "negin":300,
    "rahil":500,
    "mohana":400
};

function topSalary(){
    let maxSalary=0;
    let maxName=null;
    for(let [name,salary] of Object.entries(salaries)){
         console.log(name,salary);
        if(maxSalary<salary){
            maxSalary=salary;
            maxName= name;

        }
         
    }
console.log(maxSalary);
return maxName;
}
console.log(topSalary());