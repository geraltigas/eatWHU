// storege --------------------------------------------------
const storeDraft = (address, text) => {
    return new Promise((resolve, reject) => {
        var nowjson = {
            1: {
                address: address,
                text: text,
                timestamp: (()=>{
                    const date = new Date();
                    var nowyear = date.getFullYear();
                    var nowmonth = date.getMonth()+1;
                    var nowday = date.getDate();
                    var nowhour = date.getHours();
                    var nowmin = date.getMinutes();
                    var nowsec = date.getSeconds();
                    return [nowyear, nowmonth, nowday, nowhour, nowmin, nowsec]
                })(),
            },
        };
        wx.getStorage({
            key: "draft",
            success: function (res) {
                wx.setStorage({
                    data: connectJSON(nowjson, res.data),
                    key: "draft",
                });
                resolve(res);
            },
            fail: function (err) {
                wx.setStorage({
                    data: nowjson,
                    key: "draft",
                });
                reject(err);
            },
        });
    });
};

function connectJSON(json1, json2) {
    let json = {};
    for (
        var i = 1; i <= Object.keys(json1).length + Object.keys(json2).length; i++
    ) {
        if (i <= Object.keys(json1).length) {
            json[i] = json1[i];
        } else {
            json[i] = json2[i - Object.keys(json1).length];
        }
    }
    return json;
}

function deleteJSON(json, key) {
    for (var i = Number(key); i < Object.keys(json).length; ++i) {
        var a = json[1+i];
        json[i] = a;
    }
    delete json[Object.keys(json).length];
    return json;
}

//  date -----------------------------------------------------
function getTime(date) {
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    const hour = data.getHours();
    const minute = data.getMinutes();
    const second = data.getSeconds();

    return (
        [year, month, day].map(formatNumber).join("/") +
        " " + [hour, minute, second].map(formatNumber).join(":")
    );
}

function timeToTime(arr) {
    const date = new Date();
    const nowyear = date.getFullYear();
    const nowmonth = date.getMonth();
    const nowday = date.getDate();
    const nowhour = date.getHours();
    const nowmin = date.getMinutes();
    const nowsec = date.getSeconds();
    const year = arr[0];
    const month = arr[1];
    const day = arr[2];
    const hour = arr[3];
    const minute = arr[4];
    const sec = arr[5];
    if(nowyear - year >=1){
        return "很久以前"
    }else if(nowmonth - month >=1||nowday - day >= 1){
        return month+"月"+day+"日"
    }else if(nowhour - hour >= 1){
        return (nowhour - hour)+"小时前"
    }else if(nowmin - minute >=1){
        return (nowmin - minute)+"分钟前"
    }else{
        return (nowsec - sec)+"秒前"
    }
}
//  network ------------------------------------------------------

//  export-----
module.exports = {
    getTime: getTime,
    storeDraft: storeDraft,
    connectJSON: connectJSON,
    deleteJSON: deleteJSON,
    timeToTime: timeToTime
};