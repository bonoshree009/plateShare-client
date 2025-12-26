import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const FoodRequest = () => {
  const { user } = useContext(AuthContext);


  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      requesterEmail: user.email,
      requesterName: user.displayName || "Unknown",
      requesterPhoto: user.photoURL || "",
      location,
      reason,
      contact,
      status: "pending",
      createdAt: new Date(),
    };

    const res = await fetch("https://plateshare-server-zeta.vercel.app/food-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    if (res.ok) {
      toast.success("Food Request Submitted!");
      setOpen(false);
      setLocation("");
      setReason("");
      setContact("");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Request Food
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          ></div>

          <div className="bg-white p-6 rounded w-96 z-50">
            <h2 className="text-lg font-bold mb-4">Food Request</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Location"
                className="border p-2 w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />

              <textarea
                placeholder="Why do you need food?"
                className="border p-2 w-full"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Contact Number"
                className="border p-2 w-full"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="border px-3 py-1 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodRequest;
