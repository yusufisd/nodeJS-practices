// javascript; senkron olarak çalışır. Biz gerekli müdahale ile (async, await vs...) bunu asenkron yaparız.

const products = [
    {name: "Product 1", category:'Cat 1'},
    {name: "Product 2", category:'Cat 2'},
    {name: "Product 3", category:'Cat 3'},
];

const listProducts = () => {
    products.map((product) => {
        console.log(product);
    });
};

const addProduct = (newProduct,callback) => {
    products.push(newProduct);
    callback();
}

addProduct({name:'new product',category:'new category'},listProducts);

/* 
    yukarıda tanımlanan 3 ürün dışında sonradan tanımlanan bir ürün var ve bu ürün 
    eklenmeden önce listelenip eklenirse son eklenen ürün gözükmeyecek. 
    Bunu önlemek için 'callback' kullanmamız gerekiyor.

*/

