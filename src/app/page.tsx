import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';

const Home = async () => {
    const { user } = await getCurrentSession();
    const products = await getAllProducts();

    return (
        <div className="bg-gray-100 min-h-screen">
          <section className='container mx-auto py-12'>
            <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-[450px]">
                  {product.image && (
                    <div className="relative h-48">
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.title || 'Product Image'}
                        layout="fill"
                        objectFit="scale-down"
                        className="rounded-t-lg"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{product.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    </div>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-indigo-600 block mb-2">${product.price ? product.price.toFixed(2) : 'N/A'}</span>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 w-full">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
    );
}

export default Home;