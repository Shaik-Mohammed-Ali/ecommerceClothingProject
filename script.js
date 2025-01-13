const bag = [];

document.querySelectorAll('.add-to-bag').forEach(button => {
    button.addEventListener('click', event => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price
        };
        bag.push(product);
        alert(`${product.name} added to bag!`);
    });
});

function showBagContents() {
    console.log("Bag Contents:", bag);
}

// You can later expand this for a checkout system
