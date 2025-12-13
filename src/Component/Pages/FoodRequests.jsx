import React, { useState } from "react";

const FoodRequest = ({ food, user, onRequestSubmitted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!food || !user) return alert("Food or User info missing");

    const requestData = {
      foodId: food._id,
      foodName: food.name,
      userEmail: user.email,
      userName: user.name,
      userPhoto: user.photoURL,
      location,
      reason,
      contact,
      status: "pending",
    };

    try {
      const res = await fetch("http://localhost:2000/food-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      if (res.ok) {
        alert("Request Submitted Successfully!");
        setIsOpen(false);
        setLocation("");
        setReason("");
        setContact("");
        onRequestSubmitted && onRequestSubmitted();
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting request");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded mx-auto my-4"
      >
        Request Food
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-30"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="bg-white p-6 rounded shadow-lg z-50 w-96 relative">
            <h2 className="text-lg font-bold mb-4">Request Food</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border p-2 w-full"
                required
              />
              <textarea
                placeholder="Why you need food"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="border p-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Contact No."
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="border p-2 w-full"
                required
              />
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
