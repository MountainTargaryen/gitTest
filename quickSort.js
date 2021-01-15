const { POINT_CONVERSION_COMPRESSED } = require("constants")
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(line)=>{
   console.log(quickSort(line.split(' '))) 
})

function quickSort(arr){
    if(arr.length<=1) return arr
    const left=[]
    const right=[]
    const a0=arr[0]
    for(let i=1;i<arr.length;i++){
        if(parseInt(arr[i]) >= parseInt( a0)){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([a0],quickSort(right) )
}
