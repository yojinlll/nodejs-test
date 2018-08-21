myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()      // 牢记这一句代码
    request.open('post','http://127.0.0.1:8001/xxx')     // 配置请求

    request.setRequestHeader('frank','18')
    request.setRequestHeader('Content-Type','x-www-form-urlencoded')

    request.send('hello,world')

    request.onreadystatechange = ()=>{

        if(request.readyState === 4){
            console.log('请求响应完毕')     //readyState 状态
            console.log(request.status)
            console.log(request.statusText)


            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功')
                console.log(request.getResponseHeader('Content-Type'))
                console.log(request.responseText)

                // console.log(request.getAllResponseHeaders())
                // console.log(typeof request.responseText)
                // console.log(request.responseText)

                
                let string = request.responseText
                //把符合 JSON 语法的字符串转换成 JS 对应的值
                let object = window.JSON.parse(string)


                // console.log(typeof object)
                // console.log(object)
                // console.log('object.note')
                // console.log(object.note)
                // console.log('object.note.from')
                // console.log(object.note.from)


            }else if(request.status >= 400){
                console.log('说明请求失败')
                console.log(request.responseText)
            }
        }
    }
})