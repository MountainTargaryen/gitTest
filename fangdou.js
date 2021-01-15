function fangdou(fn,delay){
    const timer=null
    return function(){
        if(!timer){
            clearTimeout(timer)
        }
        timer=setTimeout(
            fn,delay
        )
    }
}


function jieliu(fn,delay){
    let flag=true
    return function(){
        if(flag){
            flag=false
            setTimeout(() => {
                fn,
                flag=true
            }, delay);
        }
    }
}