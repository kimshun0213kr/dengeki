let title01 = 'abc'
let year01 = '2022'
let month01 = '10'
let day1 = '14'
let writer01 = 'ベレト'
let tag01 = 'きつねからのお知らせ'

let title02 = 'AAA'
let year02 = '2022'
let month02 = '20'
let day2 = '120'
let writer02 = 'ると'
let tag02 = 'きつねの日常'

let title03 = 'AAA'
let year03 = '2022'
let month03 = '20'
let day3 = '120'
let writer03 = 'ると'
let tag03 = 'きつねの日常'

let title04 = 'AAA'
let year04 = '2022'
let month04 = '20'
let day4 = '120'
let writer04 = 'ると'
let tag04 = 'きつねの日常'

let title05 = 'AAA'
let year05 = '2022'
let month05 = '20'
let day5 = '120'
let writer05 = 'ると'
let tag05 = 'きつねの日常'

let t01 = document.getElementById('No01').innerHTML;
document.getElementById('No01').innerHTML = '<a href="'+year01+'/'+month01+'/'+month01+day1+'.html" target="_parent"><h1>'+title01+'</h1></a>';
let y01 = document.getElementById('year1').innerHTML;
document.getElementById('year1').innerHTML = '<a href="'+year01+'/'+year01+'.html" target="_parent">'+year01+'</a>';
let m01 = document.getElementById('month1').innerHTML;
document.getElementById('month1').innerHTML = '<a href="'+year01+'/'+month01+'/'+month01+'.html" target="_parent">'+month01+'</a>';
let d01 = document.getElementById('day1').innerHTML;
document.getElementById('day1').innerHTML = day1;
let w01 = document.getElementById('writer1').innerHTML;
document.getElementById('writer1').innerHTML = '<a href="writer/'+writersearch(writer01)+'/home.html" target="_parent">'+writer01+'</a>';
let ta01 = document.getElementById('tag1').innerHTML;
document.getElementById('tag1').innerHTML = '<a href="tag/'+tagsearch(tag01)+'/'+tagsearch(tag01)+'.html" target="_parent">'+tag01+'</a>';

let t02 = document.getElementById('No02').innerHTML;
document.getElementById('No02').innerHTML = '<a href="'+year02+'/'+month02+'/'+month02+day2+'.html"><h1>'+title02+'</h1></a>';
let y02 = document.getElementById('year2').innerHTML;
document.getElementById('year2').innerHTML = '<a href="'+year02+'/'+year02+'.html">'+year02+'</a>';
let m02 = document.getElementById('month2').innerHTML;
document.getElementById('month2').innerHTML = '<a href="'+year02+'/'+month02+'/'+month02+'.html">'+month02+'</a>';
let d02 = document.getElementById('day2').innerHTML;
document.getElementById('day2').innerHTML = day2;
let w02 = document.getElementById('writer2').innerHTML;
document.getElementById('writer2').innerHTML = '<a href="writer/'+writersearch(writer02)+'/home.html">'+writer02+'</a>';
let tag2 = document.getElementById('tag2').innerHTML;
document.getElementById('tag2').innerHTML = '<a href="tag/'+tagsearch(tag02)+'/'+tagsearch(tag02)+'.html">'+tag02+'</a>';

let t03 = document.getElementById('No03').innerHTML;
document.getElementById('No03').innerHTML = '<a href="'+year03+'/'+month03+'/'+month03+day3+'.html"><h1>'+title03+'</h1></a>';
let y03 = document.getElementById('year3').innerHTML;
document.getElementById('year3').innerHTML = '<a href="'+year03+'/'+year03+'.html">'+year03+'</a>';
let m03 = document.getElementById('month3').innerHTML;
document.getElementById('month3').innerHTML = '<a href="'+year03+'/'+month03+'/'+month03+'.html">'+month03+'</a>';
let d03 = document.getElementById('day3').innerHTML;
document.getElementById('day3').innerHTML = day3;
let w03 = document.getElementById('writer3').innerHTML;
document.getElementById('writer3').innerHTML = '<a href="writer/'+writersearch(writer03)+'/home.html">'+writer03+'</a>';
let tag3 = document.getElementById('tag3').innerHTML;
document.getElementById('tag3').innerHTML = '<a href="tag/'+tagsearch(tag03)+'/'+tagsearch(tag03)+'.html">'+tag03+'</a>';

let t04 = document.getElementById('No4').innerHTML;
document.getElementById('No04').innerHTML = '<a href="'+year04+'/'+month04+'/'+month04+day4+'.html"><h1>'+title04+'</h1></a>';
let y04 = document.getElementById('year4').innerHTML;
document.getElementById('year4').innerHTML = '<a href="'+year04+'/'+year04+'.html">'+year04+'</a>';
let m04 = document.getElementById('month1').innerHTML;
document.getElementById('month4').innerHTML = '<a href="'+year04+'/'+month04+'/'+month04+'.html">'+month04+'</a>';
let d04 = document.getElementById('day4').innerHTML;
document.getElementById('day4').innerHTML = day4;
let w04 = document.getElementById('writer4').innerHTML;
document.getElementById('writer4').innerHTML = '<a href="writer/'+writersearch(writer04)+'/home.html">'+writer04+'</a>';
let tag4 = document.getElementById('tag4').innerHTML;
document.getElementById('tag4').innerHTML = '<a href="tag/'+tagsearch(tag04)+'/'+tagsearch(tag04)+'.html">'+tag04+'</a>';

let t05 = document.getElementById('No05').innerHTML;
document.getElementById('No05').innerHTML = '<a href="'+year05+'/'+month05+'/'+month05+day5+'.html"><h1>'+title05+'</h1></a>';
let y05 = document.getElementById('year5').innerHTML;
document.getElementById('year5').innerHTML = '<a href="'+year05+'/'+year05+'.html">'+year05+'</a>';
let m05 = document.getElementById('month5').innerHTML;
document.getElementById('month5').innerHTML = '<a href="'+year05+'/'+month05+'/'+month05+'.html">'+month05+'</a>';
let d05 = document.getElementById('day5').innerHTML;
document.getElementById('day5').innerHTML = day5;
let w05 = document.getElementById('writer5').innerHTML;
document.getElementById('writer5').innerHTML = '<a href="writer/'+writersearch(writer05)+'/home.html">'+writer05+'</a>';
let ta05 = document.getElementById('tag5').innerHTML;
document.getElementById('tag5').innerHTML = '<a href="tag/'+tagsearch(tag05)+'/'+tagsearch(tag05)+'.html">'+tag01+'</a>';


function writersearch(x){
    switch(x){
        case 'ｲﾑﾙﾀ':
            x='imu';
            break;
        case 'ると':
            x='root';
            break;
        case 'レイ':
            x='ray';
            break;
        case 'トリキ':
            x='toriki';
            break;
        case 'りつ':
            x='ritsu';
            break
        case 'ロマ':
            x='roma';
            break;
        case 'ベレト':
            x='beleth';
            break;
        case 'そら':
            x='sora';
            break;
        case 'プルフ':
            x='proof'
            break;
        case 'フロート':
            x='float';
            break;
    }
    return x;
}

function tagsearch(y){
    switch(y){
        case 'きつねの日常':
            y='nichijou'
            break;
        case 'きつねからのお知らせ':
            y='news'
            break;
        case 'きつねの思い出':
            y='memory'
            break;
        case '突撃！今日のでんげき！':
            y='totsugeki'
            break;
    }
    return y;
}