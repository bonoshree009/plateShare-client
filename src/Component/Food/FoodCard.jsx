import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import "../../App.css";
import Loading from "../Loading/Loading"

const FoodCard = ({ food }) => {
  const { user,loading } = useContext(AuthContext);
  const navigate = useNavigate();
   if (loading) {
  return (
    <div className="w-full shadow-md bg-white p-4 flex justify-center items-center">
     <Loading></Loading>
    </div>
  );
}
  const handleViewDetails = () => {
    if (user) {
      navigate(`/food/${food._id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={food.food_image} 
        alt={food.food_name}   
        className="w-full h-48 object-cover rounded-lg mb-3"
      />

      <h3 className="text-xl font-semibold text-gray-800">{food.food_name}</h3>

      <p className="text-gray-600 text-sm mb-2">
        Quantity: {food.quantity}
      </p>

      <p className="text-gray-700 font-medium mb-3">
        Location: {food.location}
      </p>

      <button
        onClick={handleViewDetails}
        className="w-full text-white py-2 bg-green-600 rounded-lg font-semibold button buttonin"
      >
        View Details
      </button>
    </div>
  );
};

export default FoodCard;
