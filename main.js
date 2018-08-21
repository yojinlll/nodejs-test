window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.jQuery.ajax = function(options){
    let url = options.url
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers
    // ES6 解构赋值 : let {url,method,body,successFn,failFn} = options
    
    let request = new XMLHttpRequest()
    request.open(method,url)
    for( let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)
    }
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    request.send(body)
}

window.$ = window.jQuery

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method:'get',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'frank':'18'
        },
        successFn:()=>{
            console.log(123)
        },
        failFn:()=>{}    
    })
})
