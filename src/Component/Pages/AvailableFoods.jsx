import { useEffect, useState } from "react";
import FoodCard from "../Food/FoodCard";


const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://plateshare-server-zeta.vercel.app/foods") 
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Foods</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {foods.map((food) => (
         <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
