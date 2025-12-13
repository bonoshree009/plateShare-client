import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext); 
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:2000/foods/${id}`)
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

  const handleRequestFood = () => {
    toast.success("Request sent! Donator will contact you.");
  };

  return (
    <div>
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <img src={food.food_image} alt={food.food_name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-bold mb-3">{food.food_name}</h2>
      <p><strong>Quantity:</strong> {food.quantity}</p>
      <p><strong>Pickup Location:</strong> {food.location}</p>
      <p><strong>Expire Date:</strong> {food.expire_date}</p>
      <p><strong>Notes:</strong> {food.notes}</p>

      <div className="flex items-center mb-4 mt-4">
        <img src={food.donator_image} alt={food.donator_name} className="w-12 h-12 rounded-full mr-3"/>
        <div>
          <p className="font-semibold">{food.donator_name}</p>
          <p className="text-gray-600 text-sm">{food.donator_email}</p>
        </div>
      </div>

      <button onClick={handleRequestFood} className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 mt-3">
        Request Food
      </button>
    </div>


 {user && user.email !== food.ownerEmail && (
  <button onClick={() => setShowModal(true)}>Request Food</button>
)}
{showModal && (
  <FoodRequestModal
    food={food}
    user={user}
    onClose={() => setShowModal(false)}
    refreshRequests={fetchRequests} // optional if table below
  />
)}

// Only food owner sees the table
{user && user.email === food.ownerEmail && (
  <FoodRequestsTable foodId={food._id} />
)}
</div>



  );
};

export default FoodDetails;
