import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

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
      <h2 className="text-2xl font-bold mb-4">Manage My Foods</h2>

      <table className="table w-full">
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
