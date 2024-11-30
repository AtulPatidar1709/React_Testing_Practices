import { useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

interface Product {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    discountPercentage: number;
    id: number;
    images: string[];
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: Review[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
}

interface Review {
    reviewer: string;
    rating: number;
    comment: string;
    createdAt: string;
}

const Products = () => {
    const pageLimit = 8;
    const [page, setPage] = useState(1);

    const { data: products, isLoading, isError } = useQuery<Product[]>({
        queryKey: ['products', { page }],
        queryFn: async () => {
            const response = await fetch(
                `https://dummyjson.com/products?limit=${pageLimit}&skip=${(page - 1) * pageLimit}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            return data.products;
        },
        staleTime: 100000, // Prevent refetching for 5 seconds
        cacheTime: 1000000, // Keep cached data for 10 seconds
    });

    console.log(products)

    const handleNext = () => setPage((prev) => prev + 1);

    const handlePrevious = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    return (
        <div>
            {isLoading && <p className="text-center">Loading products...</p>}
            {isError && <p className="text-center text-red-500">Failed to load products.</p>}
            {products && products.length > 0 && (
                <>
                    <section
                        id="Projects"
                        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                            >
                                <img
                                    src={
                                        product.images && product.images.length > 0
                                            ? product.images[0]
                                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxA6t5gKjX-M6tZTZBLRB1ydIIxhBr6AVVTg&s'
                                    }
                                    alt="Product"
                                    className="h-80 w-72 object-cover rounded-t-xl"
                                />
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">
                                        {product.brand}
                                    </span>
                                    <p className="text-lg font-bold text-black truncate block capitalize">
                                        {product.title}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                                            ${product.price}
                                        </p>
                                        <del>
                                            <p className="text-sm text-gray-600 cursor-auto ml-2">
                                                ${((product.price / (1 - product.discountPercentage / 100))).toFixed(2)}
                                            </p>
                                        </del>
                                        <Link
                                            to={`/${product.id}`}
                                            className="ml-auto flex items-center justify-center p-2 rounded bg-gray-200 hover:bg-gray-300"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-bag-plus"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                                />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </>
            )}

            {/* Pagination Buttons */}
            <div className="flex justify-center mt-5">
                <button
                    onClick={handlePrevious}
                    disabled={page === 1 || isLoading}
                    className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-gray-700">{page}</span>
                <button
                    onClick={handleNext}
                    disabled={isLoading}
                    className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Products