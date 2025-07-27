const Grocery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-10">
        <h2 className="text-3xl font-extrabold text-center text-green-800 mb-6">
          🛒 Welcome to Our Grocery Store!
        </h2>
        <p className="text-lg text-gray-700 text-center">
          We have a variety of amazing child components inside this page —
          fresh, dynamic, and reusable just like real groceries! 🍎🥦
        </p>
      </div>
    </div>
  );
};

export default Grocery;