export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/data/productos.json") // Ruta al archivo JSON
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, 600);
  });
};

export const getProductsByCategory = async (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.filter(
            (product) => product.category === categoryId
          );
          resolve(filteredProducts);
        })
        .catch((error) => reject(error));
    }, 600);
  });
};

export const getProductsById = async (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.filter(
            (product) => product.id === productId
          );
          resolve(filteredProducts);
        })
        .catch((error) => reject(error));
    }, 600);
  });
};
