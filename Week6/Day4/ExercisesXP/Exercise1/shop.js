const products = require('./products');

// Create a function that takes a product name as a parameter and searches for the corresponding product object.
function findProduct(productName){
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        JSON.stringify(product)
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}
findProductByName('Laptop');
findProductByName('Shoes');
findProductByName('Tablet'); 
