function sortArray(...array){
    let newArray=[];
    for(let i=0;i<array.length;i++){
newArray.push(...array[i]);
    }
    return newArray.sort((a,b)=>b-a).join(',');

}
console.log(sortArray([5,6,2],[3,7,1]));