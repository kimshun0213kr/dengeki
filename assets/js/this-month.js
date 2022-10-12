var today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;

let m01 = document.getElementById('this-month').innerHTML;
document.getElementById('this-month').innerHTML = '<a href="'+year+'/'+month+'/'+month+'.html>今月の記事一覧はこちら</a>'