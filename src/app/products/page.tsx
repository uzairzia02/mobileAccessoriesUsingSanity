type Product = {
    id: string;
    productName: string;
    description: string;
    price: string;
  };
  

  export const revalidate = 5; // Revalidate every 5 seconds

  const ProductsPage = async () => {
    const API_URL = 'https://677deb9594bde1c12529bf80.mockapi.io/ecommerceweb/inventory';
    let products: Product[] = [];
  
    try {
      // Fetch data on the server-side
      const response = await fetch(API_URL);
      products = await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  
    if (products.length === 0) {
      return <p>No products available.</p>;
    }
  
    return (
      <div>
        <h1 className="text-7xl  " >Product Listing</h1>
        <div className="products-list space-y-5 ">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2> Product Name: {product.productName}</h2>
              <p> product Descritpton {product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductsPage;
  