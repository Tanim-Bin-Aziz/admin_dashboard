import React, { useState } from "react";

const Doctor = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Himel Rahman",
      specialty: "Orthodontist",
      experience: "10 years",
      phone: "01712-000001",
      email: "himel@clinic.com",
      available: "Mon - Thu",
    },
    {
      id: 2,
      name: "Dr. Sajid Ahmed",
      specialty: "Endodontist",
      experience: "8 years",
      phone: "01712-000002",
      email: "sajid@clinic.com",
      available: "Tue - Fri",
    },
    {
      id: 3,
      name: "Dr. Razib Hasan",
      specialty: "Pediatric Dentist",
      experience: "6 years",
      phone: "01712-000003",
      email: "razib@clinic.com",
      available: "Sat - Wed",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    name: "",
    specialty: "",
    experience: "",
    phone: "",
    email: "",
    available: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDelete = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  const handleEdit = (doctor) => {
    setIsEdit(true);
    setForm(doctor);
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      setDoctors(
        doctors.map((doc) => (doc.id === form.id ? { ...form } : doc))
      );
    } else {
      setDoctors([...doctors, { ...form, id: Date.now() }]);
    }
    setModalOpen(false);
    setForm({
      id: null,
      name: "",
      specialty: "",
      experience: "",
      phone: "",
      email: "",
      available: "",
    });
    setIsEdit(false);
  };
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Dental Doctors</h2>
          <button
            className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              setModalOpen(true);
              setIsEdit(false);
              setForm({
                id: null,
                name: "",
                specialty: "",
                experience: "",
                phone: "",
                email: "",
                available: "",
              });
            }}
          >
            Add Doctor
          </button>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white shadow-md rounded-lg p-5 border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                {doctor.name}
              </h3>
              <p>Specialty: {doctor.specialty}</p>
              <p>Experience: {doctor.experience}</p>
              <p>Phone: {doctor.phone}</p>
              <p>Email: {doctor.email}</p>
              <p className="text-green-600 mt-1 font-medium">
                Availability: {doctor.available}
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  className="btn btn-xs bg-yellow-500 text-white"
                  onClick={() => handleEdit(doctor)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-xs bg-red-500 text-white"
                  onClick={() => handleDelete(doctor.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Add/Edit */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[400px] shadow-xl">
              <h3 className="text-lg font-bold mb-4">
                {isEdit ? "Update Doctor" : "Add Doctor"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Specialty"
                  className="input input-bordered w-full"
                  value={form.specialty}
                  onChange={(e) =>
                    setForm({ ...form, specialty: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Experience"
                  className="input input-bordered w-full"
                  value={form.experience}
                  onChange={(e) =>
                    setForm({ ...form, experience: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Availability (e.g., Mon - Wed)"
                  className="input input-bordered w-full"
                  value={form.available}
                  onChange={(e) =>
                    setForm({ ...form, available: e.target.value })
                  }
                  required
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="btn bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {isEdit ? "Update" : "Add"}
                  </button>
                  <button
                    type="button"
                    className="btn bg-gray-300"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Doctor;
<h1>doc</h1>;
