import React, { useEffect, useState } from "react";

const Nurse = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Patients List</h1>
      <div className="space-y-2">
        {patients.map((patient) => (
          <div key={patient.id} className="p-3 border rounded shadow">
            <p>
              <strong>Patient Name:</strong> {patient.patient_name}
            </p>
            <p>
              <strong>Doctor Name:</strong> {patient.doctor_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nurse;
