import React, { useState } from "react";
import products from "../utils/Products";
const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200 cursor-pointer hover:shadow-xl transition"
            onClick={() => handleProductClick(product)}
          >
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-green-600 font-semibold mb-4">
              {product.price}
            </p>
            <ul className="list-disc list-inside text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <p className="text-xl font-semibold">{selectedProduct.name}</p>
          <p className="text-lg text-green-700 mb-2">{selectedProduct.price}</p>
          <h3 className="font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-gray-800">
            {selectedProduct.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;
