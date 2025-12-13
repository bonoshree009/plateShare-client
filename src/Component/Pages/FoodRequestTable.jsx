import React, { useEffect, useState } from "react";

const FoodRequestTable = ({ foodId }) => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    if (!foodId) return;
    try {
      const res = await fetch(`http://localhost:2000/food-requests/${foodId}`);
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [foodId]);

  const handleAction = async (requestId, action) => {
    try {
      await fetch(`http://localhost:2000/food-requests/${requestId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: action,
          ...(action === "accepted" && { foodStatus: "donated" }),
        }),
      });
      fetchRequests();
    } catch (err) {
      console.error(err);
    }
  };

  if (!requests.length) return <p className="mt-4">No requests yet.</p>;

  return (
    <div className="mt-6 overflow-x-auto">
      <h2 className="text-lg font-bold mb-3">Food Requests</h2>
      <table className="border w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Email</th>
            <th className="border px-3 py-2">Contact</th>
            <th className="border px-3 py-2">Location</th>
            <th className="border px-3 py-2">Reason</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req._id} className="hover:bg-gray-50">
              <td className="border px-3 py-2">{req.userName}</td>
              <td className="border px-3 py-2">{req.userEmail}</td>
              <td className="border px-3 py-2">{req.contact}</td>
              <td className="border px-3 py-2">{req.location}</td>
              <td className="border px-3 py-2">{req.reason}</td>
              <td className="border px-3 py-2">{req.status}</td>
              <td className="border px-3 py-2 space-x-2">
                <button
                  onClick={() => handleAction(req._id, "accepted")}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  disabled={req.status !== "pending"}
                >
                  Accept
                </button>
                <button
                  onClick={() => handleAction(req._id, "rejected")}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  disabled={req.status !== "pending"}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodRequestTable;
