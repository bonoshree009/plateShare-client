import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const FoodRequestTable = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:2000/food-requests?email=${user.email}`)
      .then(res => res.json())
      .then(data => setRequests(data));
  }, [user]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">My Requested Foods</h2>

      {requests.length === 0 ? (
        <p>You have not requested any food yet</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Food</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req._id}>
                <td className="border p-2">{req.foodName}</td>
                <td className="border p-2">{req.location}</td>
                <td className="border p-2">{req.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FoodRequestTable;
