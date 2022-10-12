let y = document.getElementById('year').innerHTML;
//document.getElementById('year').innerHTML = '<a href="../../'+y+'/'+y+'.html"><p>'+y+'</p>変化済み</a>';
let m = document.getElementById('month').innerHTML;
document.getElementById('month').innerHTML = '<a href="../../'+y+'/'+m+'/'+m+'.html"'>+m+'変化済み</a>';

let yearlink='"../../'+y+'/'+y+'.html"'
document.getElementById('year').innerHTML = '<a href='+yearlink+'><p>'+y+'変化済み</p></a>';
