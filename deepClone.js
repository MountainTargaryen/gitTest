const { POINT_CONVERSION_COMPRESSED } = require("constants")
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(line)=>{
    console.log(deepClone({x:[1,2,'abc',{a:12}]}))
})

function deepClone(a){
    if(typeof a ==='object'){
        if(Array.isArray(a)){
            let res=[]
            for(let i=0;i<a.length;i++){
                res.push(deepClone(a[i]))
            }
            return res
        } else{
            let res={}
            for(let key in a){
                res[key]=deepClone(a[key]) 
            }
            return res
        }
    }else{
        return a
    }
}


deepClone([1,2,'abc',{a:12}])