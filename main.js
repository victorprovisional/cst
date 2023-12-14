window.onload = () => {
    //añade elementos a la galería
    let createGalleryElement = (name) => {
        let galeria = document.querySelector("#gallery_main");
        let element = document.createElement("gallery_card");
        element.textContent = name;
        galeria.appendChild(element);
    };

    //crea selectores para la ventana modal y el botón user
    let userModal = document.getElementById("header_user_modal");
    let userBtn = document.getElementById("user_button");

    //activa la clase visible al pulsar botón
    userBtn.onclick = () => {
        userModal.classList.toggle("user_modal_visible");
    };

    let cartModal = document.getElementById("header_cart_modal");
    let cartBtn = document.getElementById("cart_button");
    let cartClose = document.getElementById("cart_close");

    cartBtn.onclick = () => {
        cartModal.classList.toggle("cart_modal_visible");
    };

    cartClose.onclick = () => {
        cartModal.classList.remove("cart_modal_visible");
    };

    //añadir numero elementos al carrito
    let itemNum = 0;
    let addButton = document.querySelector(".card_add");

    let increaseCart = () => {
        itemNum++;
        cartBtn.textContent = `Tu cesta (${itemNum})`;
    };
    addButton.addEventListener("click", increaseCart);

    //cerrar modal de item
    let itemModal = document.getElementById("item_modal");
    let itemModalClose = document.getElementById("modal_window_close");

    itemModalClose.onclick = () => {
        itemModal.classList.remove("item_modal_visible");
    };

    //hover añadir al carrito NO FUNCIONA
    let card = document.querySelector("gallery_card");
    let cardAdd = document.querySelector("card_add");

    let cardHover = () => {
        cardAdd.classList.toggle("card_add_visible");
        console.log("estas hovereando");
    }
    card.addEventListener("mouseover", cardHover);
};


