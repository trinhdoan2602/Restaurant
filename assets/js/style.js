// ---Load---


function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 2000);
}
window.onload = fadeOut();

// ---Menu---

const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function(){
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})
const topNe = document.querySelector(".top")
const onTop = document.querySelector(".nutontop")
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    if(x>100){topNe.classList.add("active");
            onTop.classList.add("active")}
    else{topNe.classList.remove("active");
        onTop.classList.remove("active")}
})
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function(x){
    if(x.target.classList.contains("menu-button")){
        const Target = x.target.getAttribute("data-title");
        // console.log(Target)
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");
        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active");
    }
    
})
const menuTitle1 = document.querySelector(".menu-title1");
menuTitle1.addEventListener("click", function(y){
    if(y.target.classList.contains("menu-button1")){
        const Target = y.target.getAttribute("data-title1");
        // console.log(Target)
        menuTitle1.querySelector(".active").classList.remove("active");
        y.target.classList.add("active");
        const menuItem1 = document.querySelector(".menu1");
        menuItem1.querySelector(".menu-item-content1.active").classList.remove("active");
        menuItem1.querySelector(Target).classList.add("active");
    }
    
})



// ---Cart---

const btnCart = document.querySelectorAll('.addtocart')
// console.log(addCart);
btnCart.forEach(function(button,index){
    button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var foodItem = product.parentElement
        var productImg = foodItem.querySelector("img").src
        var productName = foodItem.querySelector("h6").innerText
        var productPrice = foodItem.querySelector("span").innerText
        // console.log(productImg, productName, productPrice)
        addCart(productImg, productName, productPrice)
    }})
}) 

function addCart(productImg, productName, productPrice) {
    var addTr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trContent = '<tr><td class="sanpham"><img src="'+ productImg +'" alt=""><span class="title">'+ productName +'</span></td><td><p><span class="prices">'+ productPrice +'</span><sup>₫</sup></p></td><td><input class="soluong" type="number" value="1" min="1"></td><td class="xoa"><span class="cart-delete">Xóa</span></td></tr>'
    addTr.innerHTML = trContent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addTr)

    cartTotal()
    deleteCart()
}

// ---Quantity---

function inputChange () {
    var cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        var inpuValue = cartItem[i].querySelector("input")
        inpuValue.addEventListener("change", function() {
            cartTotal()
        })
    }
}

// ---Delete Cart---

function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement
            var cartProduct = cartItemR.parentElement
            cartProduct.remove()
            // console.log(cartItemR);
            cartTotal()
        })
    }
}


// ---Total Price---

function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalB = 0
    // console.log(cartItem.length);
    for (let i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector(".prices").innerText
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector("input").value
        // console.log(productPrice);
        totalA = inputValue * productPrice * 1000
        totalB = totalB + totalA
        // totalC = totalB.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalB.toLocaleString('de-DE')
    cartPrice.innerHTML = totalB.toLocaleString('de-DE')
    // console.log(cartTotalA)
    inputChange()
}

const cartClose = document.querySelector(".bx-x")
cartClose.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "-100%"
})
const cartShow = document.querySelector(".bx-cart")
cartShow.addEventListener("click", function() {
    console.log('alo');
    document.querySelector(".cart").style.right = "0"
})