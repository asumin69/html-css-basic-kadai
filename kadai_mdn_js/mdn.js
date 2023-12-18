const today = new Date();

//年
let year = today.getFullYear();

//月
let month = today.getMonth();
month = month +1;

//日
let date = today.getDate();

//コンソール
console.log(year + '年',month + '月' ,date + '日')