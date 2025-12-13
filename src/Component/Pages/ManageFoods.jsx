import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../Loading/Loading"

const ManageFoods = () => {
  const { user,loading } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
   
   if (loading) {
  return (
    <div className="w-full shadow-md bg-white p-4 flex justify-center items-center">
     <Loading></Loading>
    </div>
  );
}
  useEffect(() => {
    fetch(`http://localhost:2000/myfoods?email=${user.email}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:2000/myfoods/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            setFoods(foods.filter(food => food._id !== id));
            Swal.fire("Deleted!", "", "success");
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl  text-center font-bold mb-4 text-orange-600">Manage My Foods</h2>

      <table className="table w-full my-11">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {foods.map(food => (
            <tr key={food._id}>
              <td>{food.food_name}</td>
              <td>{food.food_status}</td>
              <td className="space-x-2">
                <Link to={`/update-food/${food._id}`} className="btn btn-sm">
                  Update
                </Link>
                <button onClick={() => handleDelete(food._id)} className="btn btn-sm btn-error">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFoods;
