import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Shopping Cart
      </h1>
      
      {cart.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-8 flex justify-end">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                Total: ${total.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}