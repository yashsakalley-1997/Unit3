// fetching the data from the url.
let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
let display_div = document.querySelector(".container");
async function getData()
{
    try{
        let res = await fetch(url);
        let data = await res.json();
        appendData(data['meals'])
    }
    catch(err)
    {
        console.log(err)
    }
}
getData()


// fetching the cart items from local storage.
let cart_arr = JSON.parse(localStorage.getItem("cart_items"))||[];

// Setting the cart count.
let count_span = document.querySelector("#count");
count_span.textContent = cart_arr.length;

// Displaying data into html page.
function appendData(arr)
{   
    if(arr == undefined)
    {
        return
    }
    arr.map(function(elem){
        elem['Price'] = Math.floor((Math.random() * 450) + 100);
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = elem['strMealThumb']

        let p = document.createElement("p");
        p.textContent = "Rs. "+elem['Price']

        let button = document.createElement("button");
        button.textContent = "Add to Cart"
        button.onclick = function()
        {
            cart_arr.push(elem);
            localStorage.setItem("cart_items",JSON.stringify(cart_arr))
            count_span.textContent = cart_arr.length;
        }
        div.append(img,p,button)
        display_div.append(div)
    })
}
appendData()