let products = [
  { name: "Shirt", price: 500 },
  { name: "Jeans", price: 1200 }
];

// Load cart from browser if exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(index){
    cart.push(products[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

// Show cart items
function showCart(){
    let ul = document.getElementById("cartList");
    ul.innerHTML = "";
    let total = 0;

    cart.forEach(function(item, index){
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price + " ";

        let btn = document.createElement("button");
        btn.innerText = "Remove";

        btn.onclick = function(){
            removeItem(index);
        };

        li.appendChild(btn);
        ul.appendChild(li);

        total += item.price;
    });

    document.getElementById("total").innerText = total;
}

// Remove item
function removeItem(index){
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

// Show saved cart when page loads
showCart();
