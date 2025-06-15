import React, { useState } from "react";

const doctors = [
  "Dr. Himel",
  "Dr. Sajid",
  "Dr. Razib",
  "Dr. Tanzina",
  "Dr. Shamima",
  "Dr. Nazia",
  "Dr. Rifat",
];

const Earnings = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenses, setExpenses] = useState({});

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseTitle || !expenseAmount || isNaN(expenseAmount)) return;

    const newExpense = {
      title: expenseTitle,
      amount: parseFloat(expenseAmount),
      id: Date.now(),
    };

    setExpenses((prev) => {
      const doctorExpenses = prev[selectedDoctor] || [];
      return {
        ...prev,
        [selectedDoctor]: [...doctorExpenses, newExpense],
      };
    });

    // Reset input
    setExpenseTitle("");
    setExpenseAmount("");
  };

  const getTotal = (doctor) => {
    const list = expenses[doctor] || [];
    return list.reduce((sum, e) => sum + e.amount, 0);
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Doctor-wise Expense Tracker</h2>

      {/* Doctor Selection and Add Expense Form */}
      <form
        onSubmit={handleAddExpense}
        className="flex flex-col sm:flex-row gap-4 items-center mb-6"
      >
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="select select-bordered w-full sm:w-48"
        >
          {doctors.map((doc) => (
            <option key={doc}>{doc}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Expense Title"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
          className="input input-bordered w-full sm:w-64"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          className="input input-bordered w-full sm:w-32"
          required
        />
        <button className="btn bg-blue-600 text-white">Add</button>
      </form>

      {/* Table View */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Total Expenses</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor}>
                <td>{doctor}</td>
                <td className="text-green-600 font-semibold">
                  ৳ {getTotal(doctor).toFixed(2)}
                </td>
                <td>
                  {(expenses[doctor] || []).length > 0 ? (
                    <ul className="list-disc ml-5 text-sm">
                      {expenses[doctor].map((exp) => (
                        <li key={exp.id}>
                          {exp.title} - ৳{exp.amount.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500">No expenses yet</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Earnings;
<h1>eaaring</h1>;
