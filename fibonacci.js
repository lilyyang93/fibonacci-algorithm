const fibonacci = (num) => {
    let arr = [0, 1]
    let sum = 0
  
    for (let i = 0; i <= num; i++) {
        sum = arr[i] + arr[i+1]
      arr.push(sum)
    } 
  return arr[num]
}

module.exports = {fibonacci}