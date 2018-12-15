module.exports = {
    formatDate:function(date) {
        const minutesOffset = -date.getTimezoneOffset();

        const dateString = date.getFullYear()
            + '-' + ('0'+(date.getMonth()+1)).slice(-2)
            + '-' + ('0'+(date.getDate())).slice(-2)
            + ' ' + this.pad(date.getHours())
            + ':' + this.pad(date.getMinutes())+ ':' + this.pad(date.getSeconds())
            + ' ' + (minutesOffset >=0 ? '+' : '') +(minutesOffset / 60) + ':' + this.pad(minutesOffset % 60);

        return dateString;
    },

    pad(val) {
        return ('0' + val).slice(-2)
    }
};