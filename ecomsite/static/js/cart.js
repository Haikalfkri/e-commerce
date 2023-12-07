var updateBtns = document.getElementsByClassName("update-cart");

for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        productId = this.dataset.product
        action = this.dataset.action

        console.log('productId:', productId, 'action:', action);

        if(user === "AnonymousUser") {
            console.log("Not logged in");
        } else {
            console.log("User logged in, sending data...")
        }
    });
}