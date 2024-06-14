// tao bien const va quetySelector la tro den("")
const bigImg=document.querySelector(".product-img-big img")
// document.querySelectorAll: tat ca file img small
const smalImg=document.querySelectorAll(".product-img-small img")
// tao fuction de tai su sung
smalImg.forEach(function(imgItem,X){
    // giong hover 
    imgItem.addEventListener("click",function(){
        bigImg.src=imgItem.src
    })
})