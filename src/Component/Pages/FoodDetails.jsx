import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import FoodRequestTable from "./FoodRequestTable";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMyRequests, setShowMyRequests] = useState(false);

  useEffect(() => {
    fetch(`https://plateshare-server-zeta.vercel.app/foods/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Food not found");
        return res.json();
      })
      .then(data => setFood(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      
      {/* Food Info */}
      <img
        src={food.food_image}
        alt={food.food_name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h2 className="text-3xl font-bold mb-3">{food.food_name}</h2>
      <p><strong>Quantity:</strong> {food.quantity}</p>
      <p><strong>Location:</strong> {food.location}</p>
      <p><strong>Expire Date:</strong> {food.expire_date}</p>
      <p><strong>Notes:</strong> {food.notes}</p>

      {user && (
        <button
          onClick={() => setShowMyRequests(true)}
          className="w-full py-3 bg-green-600 text-white rounded-lg mt-4"
        >
          Request Food
        </button>
      )}

   
      {showMyRequests && (
        <FoodRequestTable />
      )}

    </div>
  );
};

export default FoodDetails;
