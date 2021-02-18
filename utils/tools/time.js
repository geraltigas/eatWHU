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