let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];
let total=document.querySelector('#total');
let all=document.getElementById('all');
let veg=document.getElementById('veg');
let nonveg=document.getElementById('non-veg');
let salad=document.getElementById('salad');
let juice=document.getElementById('juice');
let seafood=document.getElementById('seafood');


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
                <div class="price">${product.price} KWD</div>
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
                    if(product.id==19 || product.id==21 ||
                         product.id==28 || (product.id>=34 && product.id<=35) ||
                          (product.id>=53 && product.id<=62) || (product.id>=67 && product.id<=70)
                          || product.id==76 || product.id==77 || product.id==80 || product.id==84 ){
                    let newProduct = document.createElement('div');
                    newProduct.dataset.id = product.id;
                    newProduct.classList.add('item');
                    newProduct.innerHTML = 
                    `<img src="${product.image}" alt="">
                    <h2>${product.name}</h2>
                    <div class="price">${product.price} KWD</div>
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
                        if((product.id>=12 && product.id<=18) || product.id==20 || (product.id>=22 && product.id<=27)
                            || (product.id>=29 && product.id<=33) || (product.id>=36 && product.id<=52) || (product.id>=55 && product.id<=59)
                            || (product.id>=62 && product.id<=66) || (product.id>=71 && product.id<=75) || product.id==78 || product.id==79 || product.id==82
                            || product.id==83 || product.id==86 || product.id==87 || product.id==89 || product.id==90){
                        let newProduct = document.createElement('div');
                        newProduct.dataset.id = product.id;
                        newProduct.classList.add('item');
                        newProduct.innerHTML = 
                        `<img src="${product.image}" alt="">
                        <h2>${product.name}</h2>
                        <div class="price">${product.price} KWD</div>
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
                            if(product.id>=1 && product.id<=3){
                            let newProduct = document.createElement('div');
                            newProduct.dataset.id = product.id;
                            newProduct.classList.add('item');
                            newProduct.innerHTML = 
                            `<img src="${product.image}" alt="">
                            <h2>${product.name}</h2>
                            <div class="price">${product.price} KWD</div>
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
                            if(product.id>=91 && product.id<=113){
                            let newProduct = document.createElement('div');
                            newProduct.dataset.id = product.id;
                            newProduct.classList.add('item');
                            newProduct.innerHTML = 
                            `<img src="${product.image}" alt="">
                            <h2>${product.name}</h2>
                            <div class="price">${product.price} KWD</div>
                            <button class="addCart">Add To Cart</button>`;
                            listProductHTML.appendChild(newProduct);
                        }
                        });
                        
                    }
                }
                const addseafoodDataToHTML = () => {
                    // remove datas default from HTML
                        listProductHTML.innerHTML='';
                        // add new datas
                        if(products.length > 0) // if has data
                        {
                            products.forEach(product => {
                                if(product.id>=4 && product.id<=11){
                                let newProduct = document.createElement('div');
                                newProduct.dataset.id = product.id;
                                newProduct.classList.add('item');
                                newProduct.innerHTML = 
                                `<img src="${product.image}" alt="">
                                <h2>${product.name}</h2>
                                <div class="price">${product.price} KWD</div>
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
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    let totalamount=0;
    if(cart.length > 0){
        cart.forEach(item => {
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
                <div class="totalPrice">${(info.price * item.quantity).toFixed(2)} KWD</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span class="q">${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
    total.innerText="Total Amount : "+ totalamount.toFixed(2)+" KWD"; 
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
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products1.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
        all.addEventListener('click', (event) => {
            fetch('products1.json')
            .then(response => response.json())
            .then(data => {
                
                products = data;
                addDataToHTML();

            });
            

         
       
        })

        veg.addEventListener('click', (event) => {
            fetch('products1.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addVegDataToHTML();
            });
        })

        nonveg.addEventListener('click', (event) => {
            fetch('products1.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addnonVegDataToHTML();
            });
        })

        salad.addEventListener('click', (event) => {
            fetch('products1.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addsaladDataToHTML();
            });
        })

        juice.addEventListener('click', (event) => {
            fetch('products1.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addjuiceDataToHTML();
            });
        })
        seafood.addEventListener('click', (event) => {
            fetch('products1.json')
            .then(response => response.json())
            .then(data => {        
                products = data;

                addseafoodDataToHTML();
            });
        })

         
        
        // get data cart from memory
        
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
       
        

        
    });

    
    
}
initApp();