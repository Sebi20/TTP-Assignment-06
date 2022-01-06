const arr= [0,1,0,3,12,8,0,9,0,0];

// function PlaceZerosAtEnd(arr){
//   let result =[];
//   let count = 0;
  
//   for(let i=0; i< arr.length; i++){
//     if(arr[i]===0){
//       count++;
//     }
//     if(arr[i]!==0){

//      result.push(arr[i]);
      
//     }
//   }
//   for(let i=0;i<count;i++){
//     //let arr1 = new Array(count).fill(0);
//     result.push(0);
//     //console.log(re)
    
//   }
//   return result;
// }
// let result = PlaceZerosAtEnd(arr)
// console.log(result)
 let moveZeros = function(arr){
   let nonZeros = 0;
   for(let i =0;  i<arr.length;i++){
     if(arr[i]!==0){
       arr[nonZeros]= arr[i];
       nonZeros++;
     }
   }
   
for(let i = nonZeros; i<arr.length;i++){
  arr[i]=0;
}
  return arr;
 }
 
 console.log(moveZeros(arr))