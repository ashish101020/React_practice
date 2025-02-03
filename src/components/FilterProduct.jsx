import React, { useState } from 'react';

const FilterProduct = () => {
    let products = [
        { id: 1, name: "akjsdhfl", category: "a", price: 10 },
        { id: 2, name: "basdf", category: "b", price: 20 },
        { id: 3, name: "hkjhdfkj", category: "h", price: 23 },
        { id: 4, name: "halsdf", category: "h", price: 30 },
        { id: 5, name: "alkuud", category: "a", price: 11 },
        { id: 6, name: "afndj", category: "a", price: 12 },
        { id: 7, name: "bdjss", category: "b", price: 22 },
        { id: 8, name: "bddd", category: "b", price: 24 },
        { id: 9, name: "byyu", category: "b", price: 25 },
        { id: 10, name: "huuu", category: "h", price: 34 },
        { id: 11, name: "hytr", category: "h", price: 36 },
        { id: 12, name: "annd", category: "a", price: 15 },
        { id: 13, name: "tnnd", category: "t", price: 15 }
    ];

    const [selectedCategory, setSelectedCategory] = useState("a");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Get unique categories for buttons
    const categories = [...new Set(products.map((item) => item.category))];

    return (
        <>
            {/* Category Filter Buttons */}
            <div>
                {categories.map((category) => (
                    <button key={category} onClick={() => handleCategoryChange(category)}>
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Filtered Products */}
            <div>
                {products
                    .filter((product) => product.category === selectedCategory)
                    .map((filteredProduct) => (
                        <div key={filteredProduct.id}>
                            <h2>{filteredProduct.name}</h2>
                            <h3>Price: ${filteredProduct.price}</h3>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default FilterProduct;
