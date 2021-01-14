// function $g(selector) {
//   //判斷是否為id selector
//   if (selector.includes("#") && !selector.includes(" ")) {
//     //回傳Element
//     return document.querySelector(selector);
//   }
//   //回傳NodeList集合
//   let nodeList=document.querySelectorAll(selector);
//   return nodeList.length==1?nodeList[0]:nodeList;
//   function $c(selector) {
//     return document.createElement(selector);
//   }
// }
//   function $log(value) {
//     console.log(value);
//   }
// export{$g};

function $g(selector){
    if(selector.includes("#") && !selector.includes(' ')){
        return document.querySelector(selector);
    }
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
export{$g};