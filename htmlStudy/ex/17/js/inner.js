const container = document.querySelector("#container");

let titleList = ['java', 'c', 'python', 'html', 'css', 'javascript','spring']

let e = (title) => //매개변수 title이 ${title}
 `
    <div class="board-content">
        <div class="title">
            <h3>${title}</h3> 
        </div>
        <div class="content">
            <img src="images/cup-1.png" alt="">
        </div>
    </div>
`;

function sum(a,b) {
    return a+b;
}

let result =function(a,b) {
    return a+b;
}(10,20);

result = (a,b) =>  a+b;

let result2 = result(10,20);


// let str = "김가흘";
// let str2 = "김가흘2";

// console.log(str.concat(str2)); //concat(붙이고싶은 문자열)->단순문자열에서만 가능 (``는 불가능)
// console.log(typeof e);
// console.log(typeof str);

let str=``;

for(let i =0; i<titleList.length; i++){
    str +=e(titleList[i]);
}
console.log(e);


container.innerHTML =  str;