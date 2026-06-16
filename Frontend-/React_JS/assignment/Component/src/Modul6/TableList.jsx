import React from 'react'

function TableList() {
  const employees = [
    { sno: 1, name: "Suhas", age: 23, place: "Shivamogga", empId: 100, department: "Dev" },
    { sno: 2, name: "Anjali", age: 28, place: "Mumbai", empId: 101, department: "HR" },
    { sno: 3, name: "Ravi", age: 32, place: "Bangalore", empId: 102, department: "Marketing" },
    { sno: 4, name: "Priya", age: 26, place: "Delhi", empId: 103, department: "Finance" },
    { sno: 5, name: "Amit", age: 35, place: "Pune", empId: 104, department: "Operations" },
    { sno: 6, name: "Neha", age: 30, place: "Hyderabad", empId: 105, department: "Sales" },
    { sno: 7, name: "Kiran", age: 29, place: "Chennai", empId: 106, department: "Dev" },
    { sno: 8, name: "Vikram", age: 31, place: "Kolkata", empId: 107, department: "Support" },
    { sno: 9, name: "Swati", age: 27, place: "Jaipur", empId: 108, department: "HR" },
    { sno: 10, name: "Rajesh", age: 33, place: "Ahmedabad", empId: 109, department: "Logistics" },
    { sno: 11, name: "Deepika", age: 24, place: "Mysore", empId: 110, department: "Design" }
  ]

  return (
    <div>
      <table border="3" bordercolor="black" cellPadding="8" cellSpacing="2">
        <thead>
          <tr>
            <th colSpan="6">Employee Details</th>
          </tr>

          <tr>
            <th>S.No</th>
            <th>Employee Name</th>
            <th>Employee Age</th>
            <th>Employee Place</th>
            <th>Employee Id</th>
            <th>Employee Department</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.sno}>
              <td>{emp.sno}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.place}</td>
              <td>{emp.empId}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableList