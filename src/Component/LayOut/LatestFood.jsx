import React, { use } from 'react';
import FoodCard from '../Food/FoodCard'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router';

const Latestfoodpromise = fetch('http://localhost:2000/latest-food').then(res =>res.json())
const LatestFood = () => {
     const foodproducts = use(Latestfoodpromise);
     console.log(Latestfoodpromise)
    return (
        <div>
                  <div>
           <h1 className='text-3xl  font-bold py-5 text-center text-gray-700'>Share <span className='text-orange-500'>Food</span> </h1>
           <div className="px-4 py-4">
              <div className="grid grid-cols-3 gap-6">
           
             {
                foodproducts.map(food => ( <FoodCard key={food._id} food={food}></FoodCard> ))
             }

           
</div>


        </div>

       <div className='text-center py-6'> <motion.nav
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <NavLink
    to="/available-foods"
    className="bg-green-600 px-6 py-3 rounded-xl text-lg font-semibold 
                transition  duration-300 buttonbanner flex items-center gap-2"
  >
    <div className="hoverEffect">
      <div></div>
    </div>
    Show All
  </NavLink>
</motion.nav></div>
        </div>
        </div>
    );
};

export default LatestFood;



    
