import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { MyContext, MyContextType } from "../context/cart";
import { useContext } from "react";

const Product = () => {
    const { id } = useParams();
    const { addToCart } = useContext(MyContext) as MyContextType;

    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) throw new Error("Failed to fetch product");
            return await response.json();
        },
        staleTime: 10000,
        cacheTime: 60000,
    });

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
            });
        }
    };

    return (
        <>
            {isLoading && <p className="text-center">Loading product...</p>}
            {isError && <p className="text-center text-red-500">Failed to load product.</p>}
            {product && (
                <div className="bg-gray-100 min-h-screen dark:bg-gray-600 py-8 flex items-center justify-center">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            {/* Product Image Section */}
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={product.images?.[0] ?? 'https://via.placeholder.com/460'}
                                        alt="Product Image"
                                    />
                                </div>
                                <div className="flex -mx-2 mb-4">
                                    <div className="cursor-pointer w-1/2 px-2">
                                        <button onClick={handleAddToCart} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="cursor-pointerw-1/2 px-2">
                                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Product Details Section */}
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                    {product.title || "Untitled Product"}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {product.description || "No description available."}
                                </p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                        <span className="text-gray-600 dark:text-gray-300">
                                            ${product.price || "0.00"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">
                                            Availability:
                                        </span>
                                        <span
                                            className={`${product.stock > 0
                                                ? "text-gray-600 dark:text-gray-300"
                                                : "text-red-500"
                                                }`}
                                        >
                                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Product Return Policy:
                                    </span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        {product.returnPolicy || "No return policy specified."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;
