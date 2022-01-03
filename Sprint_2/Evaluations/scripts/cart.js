let display_div = document.querySelector(".container");
let cart_total = 0;

// fetching the cart items from local storage.
let cart_arr = JSON.parse(localStorage.getItem("cart_items"))||[];

// Setting the cart total.
let count_span = document.querySelector("#count");
for(let i = 0;i<cart_arr.length;i++)
{
    cart_total += cart_arr[i]['Price']
}
count_span.textContent = cart_total;

showData(cart_arr)
// Displaying data into html page.
function showData(data)
{   
    display_div.innerHTML = "";
    data.map(function(elem,index){
        elem['Price'] = Math.floor((Math.random() * 450) + 100);
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = elem['strMealThumb']

        let p = document.createElement("p");
        p.textContent = "Rs. "+elem['Price']

        let button = document.createElement("button");
        button.textContent = "Remove"
        
        // Adding the remove from cart functionality.
        button.onclick = function()
        {
            data.splice(index,1);
            localStorage.setItem("cart_items",JSON.stringify(data));
            if(cart_arr.length!=0)
            {
                cart_total = cart_total - elem['Price']
                count_span.textContent = cart_total
            }
            showData(data)
        }
        div.append(img,p,button)
        display_div.append(div)
    })
}