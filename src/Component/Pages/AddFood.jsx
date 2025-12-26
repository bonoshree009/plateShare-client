import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const food = {
      food_name: form.foodName.value,
      food_image: form.foodImage.value,
      quantity: form.quantity.value,
      location: form.location.value,
      expire_date: form.expireDate.value,
      notes: form.notes.value,

      // auto-filled
      donator_name: user.displayName,
      donator_email: user.email,
      donator_image: user.photoURL,

      food_status: "Available",
      created_at: new Date(),
    };

    try {
      const res = await fetch("https://plateshare-server-zeta.vercel.app/myfoods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(food),
      });

      if (!res.ok) throw new Error();
      toast.success("Food added successfully!");
      form.reset();
    } catch {
      toast.error("Failed to add food");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Add Food</h2>

      <form onSubmit={handleAddFood} className="space-y-3">
        <input name="foodName" placeholder="Food Name" className="input w-full" required />
        <input name="foodImage" placeholder="Food Image URL (imgbb)" className="input w-full" required />
        <input name="quantity" placeholder="Food Quantity" className="input w-full" required />
        <input name="location" placeholder="Pickup Location" className="input w-full" required />
        <input type="date" name="expireDate" className="input w-full" required />
        <textarea name="notes" placeholder="Additional Notes" className="input w-full h-24" />

        <button className="btn btn-neutral w-full" disabled={loading}>
          {loading ? "Adding..." : "Add Food"}
        </button>
      </form>
    </div>
  );
};

export default AddFood;
