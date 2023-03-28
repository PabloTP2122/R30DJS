export function groupProducts(products, category) {
    // Filtrar los produtos
    const products1 = products.filter(prod => prod.category === category);
    // Nombre de los productos separados por comas en orden
    const prodName = products1.map(prod => prod.name).join(', ');
    // Suma de los precios de productos de la categoría
    const sumPrices = products1.map(prod => prod.price).reduce((sum, curr) => sum + curr);

    return {
        products: prodName,
        totalPrice: sumPrices
    }
}

const products = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Electronics")