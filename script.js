const products =[
    {id: 1,name: "Radio",Image:"https://kannankandyestore.com/wp-content/uploads/2024/02/71xCt1NJQL._SX522_.jpg",price:500},
    {id: 2,name: "samsung",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXvCnSTfMOjdQNMKLY6InPCMO03DigqkETw&s",price:71000},
    {id: 3,name: "watch",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WdRQOQ_U8PvzcjLsm5-qRml14VPHKDa7wQ&s",price:5000},
    {id: 4,name: "bottle",Image:"https://rukminim2.flixcart.com/image/850/1000/l4bn5ow0/bottle/6/c/9/1000-bpa-free-drinking-water-bottle-with-time-marker-straw-for-original-imagf8npfztmb3qg.jpeg?q=20&crop=false",price:500},
    {id: 5,name: "cycle",Image:"https://leaderbicycles.com/cdn/shop/products/Desktop-1_d6c1b121-6a9b-489d-8af4-6ab1a98b885d.jpg?v=1655808417",price:15000},
    {id: 6,name: "bike",Image:"https://cdn.bikedekho.com/processedimages/royal-enfield/2021-bullet-350/source/2021-bullet-35065b0d8ade2ead.jpg",price:50000},
    {id: 7,name: "apple mobile",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8NDtXE_xYEMGAF5-eAV3out154hK3aONLQ&s",price:15000},
    {id: 8,name: "laptop",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIyO_HoGObR1lK7vcZtbSiBksUGcIQrRYiA&s",price:25000},
    {id: 9,name: "headphone",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pDTVqnTsIkAtPQNwxltS1KDSLPrZA09CMA&s",price:2000},
    {id: 10,name: "mouse",Image:"https://m.media-amazon.com/images/I/71+4ffKj54L.jpg",price:550},
    {id: 11,name: "vivo",Image:"https://m.media-amazon.com/images/I/61Y7gRLAKyL._AC_UF1000,1000_QL80_.jpg",price:13000},
    {id: 12,name: "redmi 12 5g",Image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=90&crop=false",price:12000},
    {id: 13,name: "keyboard",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7-M5mFdrpMB9v3jmjQmUzOyjf5QERWc85g&s",price:5250},
    {id: 14,name: "scooty",Image:"https://media.zigcdn.com/media/model/2024/May/tvs-ntorq-xt1-right-side-view.jpg",price:60000},
    {id: 15,name: "tv",Image:"https://amstradworld.com/wp-content/uploads/2023/12/Amstrad-AM65UWGTA-WebOS-TV_front.jpg",price:12000},
    {id: 16,name: "earbuds",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yqD9RzcZaa9OGgt5eDdAJYLPDpki1Wb_0g&s",price:7000},
    {id: 17,name: "earbuds2",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yqD9RzcZaa9OGgt5eDdAJYLPDpki1Wb_0g&s",price:500},
    {id: 18,name: "bag",Image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/bag/9/x/k/41-acr101-school-backpack-college-bag-travel-bag-30-my-sack-30-original-imagmpz7pdrptzm5.jpeg?q=20&crop=false",price:500},
    {id: 19,name: "Bat",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJSjtAZO_SBPgQMk-pNEJIL23b88Cj24YAQ&s",price:500},
    {id: 20,name: "cover",Image:"https://5.imimg.com/data5/SELLER/Default/2022/9/OC/GY/QP/154631358/leather-mobile-cover-for-apple-iphone-7-8-se-2020-and-all-other-iphone-models.jpeg",price:500},
    {id: 21,name: "toy",Image:"https://images-cdn.ubuy.co.in/633ab3c63f59b24c1f2782e6-24.jpg",price:500},
    ]
    
    //render products

    function renderproducts(products,productList){
    const container = document.getElementById(productList);
    container.innerHTML="";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML=`
        <img src= "${product.Image}"/>
        <h3>${product.name}</h3>
        <h2>${product.price}</h2>
        <button onclick = "addToCart(${product.id})">Add to Cart</button>
        `
        container.appendChild(productDiv);
    })
}
function searchProducts(query){
    const filterProducts = products.filter(product =>
        product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    renderproducts(filterProducts,"productList");

}
document.getElementById("searchButton")?.addEventListener("click",() =>{
    const query = document.getElementById("productSearch").value;
    searchProducts(query);
})
//sorting
function sortproducts(criteria){
    if(criteria === "price"){
        return products.sort((a,b) => a.price-b.price);
    }
    return products;
}
document.getElementById("sortoptions")?.addEventListener("change",(event)=>{
    const sortedproducts = sortproducts(event.target.value);
    renderproducts(sortedproducts,"productList");
})
    
 
function addToCart(productId){
    const product = products.find(p => p.id === productId);
    let Cart = JSON.parse(localStorage.getItem("cart"))||[];
    Cart.push(product);
    localStorage.setItem("cart",JSON.stringify(Cart));
    alert(`${product.name} is added to cart`)
    renderCart();
}
//add to cart
function renderCart(){
    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    const container = document.getElementById("cartItems");
    container.innerHTML="";
    if(cart.length == 0){
        container.innerHTML="<h2>Your Cart is Empty</h2>"
    }
    cart.forEach(item =>{
        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart-item");
        cartDiv.innerHTML=`
        <img src= "${item.Image}"/>
        <h3>${item.name}</h3>
        <h2>${item.price}</h2>
        <button onclick="removeFromCart(${item.id})">Remove</button>
        `
        container.appendChild(cartDiv);
    })
    renderSubtotal(cart);
    
}
//remove from cart
function removeFromCart(productId){
 let cart = JSON.parse(localStorage.getItem("cart"))||[];
 cart =cart.filter(item => item.id !== productId);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Product is removed successfully");
 renderCart();
}
//calculate subtotal
function renderSubtotal(cart){
    const subtotal = cart.reduce((total,item) => total + item.price,0);
    const subtotalContainer = document.getElementById("subtotal");
    if(cart.length > 0){
        subtotalContainer.innerHTML = `subtotal : Rs.${subtotal}`
    }else{
        subtotalContainer.innerText =`No items in the cart`
    }
}
if(document.getElementById("productList"))renderproducts(products,"productList");
if(document.getElementById("cartItems"))renderCart();




