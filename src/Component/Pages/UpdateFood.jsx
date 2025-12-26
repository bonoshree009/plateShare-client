import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`https://plateshare-server-zeta.vercel.app/myfoods/${id}`)
      .then(res => res.json())
      .then(data => setFood(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedFood = {
      food_name: e.target.food_name.value,
      quantity: e.target.quantity.value,
      location: e.target.location.value,
      expire_date: e.target.expire_date.value,
      notes: e.target.notes.value,
    };

    fetch(`https://plateshare-server-zeta.vercel.app/myfoods/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then(res => res.json())
      .then(() => {
        toast.success("Food Updated Successfully!");
        navigate("/manage-my-foods");
      
      });
  };

  if (!food) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Update Food</h2>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          name="food_name"
          defaultValue={food.food_name}
          className="input w-full"
        />

        <input
          name="quantity"
          defaultValue={food.quantity}
          className="input w-full"
        />

        <input
          name="location"
          defaultValue={food.location}
          className="input w-full"
        />

        <input
          type="date"
          name="expire_date"
          defaultValue={food.expire_date}
          className="input w-full"
        />

        <textarea
          name="notes"
          defaultValue={food.notes}
          className="input w-full h-24"
        />

        <button className="btn btn-neutral w-full">
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
