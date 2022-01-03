// Adding the bg image functionality.
let cart_arr = JSON.parse(localStorage.getItem("cart_items"))||[];
let index = 0;

let bg_image = document.querySelector(".background_image");
let img = document.createElement("img");
img.src = cart_arr[index]['strMealThumb'];
bg_image.append(img)


// Set timeout functionality.
document.querySelector("#submit_btn").addEventListener("click",orderSubmit);

function orderSubmit()
{
    window.alert("Your order is accepted");

    setTimeout(function(){
        alert("your order is being cooked")
    },3000)
    
    setTimeout(function(){
        alert("Your order is ready")
    },11000)
    
    setTimeout(function(){
        alert("your order is out for delivery")
    },21000)
    
    setTimeout(function(){
        alert("your order is delivered")
    },33000)
}








