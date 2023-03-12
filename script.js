const array = [1, 2, 3, 4, 5, 6, 7];              
function removeElement(array, item) {   
   return array.filter(elem => elem !== item);
}
console.log(removeElement(array, 3));


             
