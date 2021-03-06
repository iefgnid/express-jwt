
module.exports = {
    succ:function(msg="", data={}){
        return {
            retCode:0,
            retData:data,
            retMsg:msg
        }
    },
    err:function(msg="请求参数有错"){
        return {
            retCode:110,
            retData:{},
            retMsg:msg
        }
    },
    out:function(msg="请重新登录"){
        return {
            retCode:120,
            retData:{},
            retMsg:msg
        }
    }
}