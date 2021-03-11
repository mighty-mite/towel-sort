
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    if(!matrix) return []
    
    let newArray = [];
    for(let i = 0; i < matrix.length; i++) {
      
      if(i % 2 == 0) {
        newArray.push(...matrix[i])
      } else {
        let interim = matrix[i].reverse();
        newArray.push(...interim)
      }
    }  
    return newArray
}
