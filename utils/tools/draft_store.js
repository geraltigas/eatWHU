function storeDraft(address,text,timestamp) {
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
        },
        fail:function (err){
            wx.setStorage({
            data: nowjson,
            key: 'draft',
            })
        }
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