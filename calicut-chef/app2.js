let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart2 = [];
let total=document.querySelector('#total');
let all=document.getElementById('all');
let veg=document.getElementById('veg');
let nonveg=document.getElementById('non-veg');
let salad=document.getElementById('salad');
let juice=document.getElementById('juice');
let temp=document.querySelector('.temp')

// function whatsapp() {
//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var address = document.getElementById('address').value;

//     var url = "https://wa.me/918754347784?text=" + "Name : " + name + "%0a" + 'Phone Number : ' + phone + "%0a" + "Email : " + email + "%0a" + "Address : " + address + "%0a foods";
//     window.open(url, '_blank').focus();
// }
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML
        listProductHTML.innerHTML='';
        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">${product.price} QR</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
            
        }
    }

    const addVegDataToHTML = () => {
        // remove datas default from HTML
            listProductHTML.innerHTML='';
            // add new datas
            if(products.length > 0) // if has data
            {
                products.forEach(product => {
                    if(product.id==2 || product.id==3 || product.id==4){
                    let newProduct = document.createElement('div');
                    newProduct.dataset.id = product.id;
                    newProduct.classList.add('item');
                    newProduct.innerHTML = 
                    `<img src="${product.image}" alt="">
                    <h2>${product.name}</h2>
                    <div class="price">${product.price}     QR</div>
                    <button class="addCart">Add To Cart</button>`;
                    listProductHTML.appendChild(newProduct);
                }
                });
                
            }
        }
        const addnonVegDataToHTML = () => {
            // remove datas default from HTML
                listProductHTML.innerHTML='';
                // add new datas
                if(products.length > 0) // if has data
                {
                    products.forEach(product => {
                        if(product.id==6 || product.id==7){
                        let newProduct = document.createElement('div');
                        newProduct.dataset.id = product.id;
                        newProduct.classList.add('item');
                        newProduct.innerHTML = 
                        `<img src="${product.image}" alt="">
                        <h2>${product.name}</h2>
                        <div class="price">${product.price} QR</div>
                        <button class="addCart">Add To Cart</button>`;
                        listProductHTML.appendChild(newProduct);
                    }
                    });
                    
                }
            }

            const addsaladDataToHTML = () => {
                // remove datas default from HTML
                    listProductHTML.innerHTML='';
                    // add new datas
                    if(products.length > 0) // if has data
                    {
                        products.forEach(product => {
                            if(product.id==5 || product.id==8){
                            let newProduct = document.createElement('div');
                            newProduct.dataset.id = product.id;
                            newProduct.classList.add('item');
                            newProduct.innerHTML = 
                            `<img src="${product.image}" alt="">
                            <h2>${product.name}</h2>
                            <div class="price">${product.price} QR</div>
                            <button class="addCart">Add To Cart</button>`;
                            listProductHTML.appendChild(newProduct);
                        }
                        });
                        
                    }
                }
            const addjuiceDataToHTML = () => {
                // remove datas default from HTML
                    listProductHTML.innerHTML='';
                    // add new datas
                    if(products.length > 0) // if has data
                    {
                        products.forEach(product => {
                            if(product.id==1){
                            let newProduct = document.createElement('div');
                            newProduct.dataset.id = product.id;
                            newProduct.classList.add('item');
                            newProduct.innerHTML = 
                            `<img src="${product.image}" alt="">
                            <h2>${product.name}</h2>
                            <div class="price">${product.price} QR</div>
                            <button class="addCart">Add To Cart</button>`;
                            listProductHTML.appendChild(newProduct);
                        }
                        });
                        
                    }
                }

    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart2.findIndex((value) => value.product_id == product_id);
    if(cart2.length <= 0){
        cart2 = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart2.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart2[positionThisProductInCart].quantity = cart2[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart2', JSON.stringify(cart2));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalamount=0;
    if(cart2.length > 0){
        cart2.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            totalamount = totalamount+ info.price* item.quantity;
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">${info.name}</div>
                <div class="totalPrice">${info.price * item.quantity} QR</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span class="q">${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
    total.innerText="Total Amount : "+ totalamount+" QR"; 
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart2.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart2[positionItemInCart];
        switch (type) {
            case 'plus':
                cart2[positionItemInCart].quantity = cart2[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart2[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart2[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart2.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products2.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
        all.addEventListener('click', (event) => {
            fetch('products2.json')
            .then(response => response.json())
            .then(data => {
                
                products = data;
                addDataToHTML();

            });
            

         
       
        })

        veg.addEventListener('click', (event) => {
            fetch('products2.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addVegDataToHTML();
            });
        })

        nonveg.addEventListener('click', (event) => {
            fetch('products2.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addnonVegDataToHTML();
            });
        })

        salad.addEventListener('click', (event) => {
            fetch('products2.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addsaladDataToHTML();
            });
        })

        juice.addEventListener('click', (event) => {
            fetch('products2.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addjuiceDataToHTML();
            });
        })
        // get data cart from memory
        console.log(products);
        if(localStorage.getItem('cart2')){
            cart2 = JSON.parse(localStorage.getItem('cart2'));
            addCartToHTML();
        }
       
        

        
    });

    
    
}
initApp();