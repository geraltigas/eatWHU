const storeDraft = (address,text,timestamp) => {
    return new Promise((resolve,reject)=>{
        var nowjson={1:{address:address,
            text:text,
            timestamp:timestamp
        }}
        wx.getStorage({
            key:"draft",
            success: function (res){
                wx.setStorage({
                data: connectJSON(nowjson,res.data),
                key: 'draft',
                })
                resolve(1)
            },
            fail:function (err){
                wx.setStorage({
                data: nowjson,
                key: 'draft',
                })
                reject(0)
            }
        })
    })
}
function connectJSON(json1,json2){
    var json = {};
    for(var i = 1 ; i <= Object.keys(json1).length + Object.keys(json2).length ; i++){
        if(i <= Object.keys(json1).length){
            json[i] = json1[i];
        }else{
            json[i] = json2[i-Object.keys(json1).length];
        }
    }
    return json;
}

module.exports ={
    storeDraft : storeDraft,
    connectJSON : connectJSON,
}
//-----------------------------------------------------
function getTime(date) {
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    const hour = data.getHours();
    const minute = data.getMinutes();
    const second = data.getSeconds();

    return [year,month,day].map(formatNumber).join('/') + ' ' + [hour,minute,second].map(formatNumber).join(':')
}

module.exports = {
    getTime : getTime,
}
//------------------------------------------------------ 
