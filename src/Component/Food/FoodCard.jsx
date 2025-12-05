import "../../App.css";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />

      <h3 className="text-xl font-semibold text-gray-800">{food.foodName}</h3>

      <p className="text-gray-600 text-sm mb-2">
        Quantity: {food.quantity} people
      </p>

      <p className="text-gray-700 font-medium mb-3">
        Location: {food.location}
      </p>

      <button
        className="w-full text-white py-2 bg-green-600 rounded-lg font-semibold button"
      >
        View Details
      </button>
    </div>
  );
};

export default FoodCard;
