import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const users = [
  {
    id: 1,
    name: "Emily Chen",
    age: 28,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Ryan Thompson",
    age: 32,
    occupation: "Marketing Manager",
  },
  {
    id: 3,
    name: "Sophia Patel",
    age: 25,
    occupation: "Data Analyst",
  },
  {
    id: 4,
    name: "Michael Lee",
    age: 41,
    occupation: "CEO",
  },
  {
    id: 5,
    name: "Olivia Brown",
    age: 29,
    occupation: "Graphic Designer",
  },
  {
    id: 6,
    name: "Alexander Hall",
    age: 38,
    occupation: "Sales Representative",
  },
  {
    id: 7,
    name: "Isabella Davis",
    age: 26,
    occupation: "Teacher",
  },
  {
    id: 8,
    name: "Ethan White",
    age: 35,
    occupation: "Lawyer",
  },
  {
    id: 9,
    name: "Lily Tran",
    age: 30,
    occupation: "Nurse",
  },
  {
    id: 10,
    name: "Julian Sanchez",
    age: 39,
    occupation: "Engineer",
  },
  {
    id: 11,
    name: "Ava Martin",
    age: 27,
    occupation: "Journalist",
  },
  {
    id: 12,
    name: "Benjamin Walker",
    age: 42,
    occupation: "Doctor",
  },
  {
    id: 13,
    name: "Charlotte Brooks",
    age: 31,
    occupation: "HR Manager",
  },
  {
    id: 14,
    name: "Gabriel Harris",
    age: 36,
    occupation: "IT Consultant",
  },
  {
    id: 15,
    name: "Hannah Taylor",
    age: 24,
    occupation: "Student",
  },
  {
    id: 16,
    name: "Jackson Brown",
    age: 40,
    occupation: "Business Owner",
  },
  {
    id: 17,
    name: "Kayla Lewis",
    age: 33,
    occupation: "Event Planner",
  },
  {
    id: 18,
    name: "Logan Mitchell",
    age: 37,
    occupation: "Architect",
  },
  {
    id: 19,
    name: "Mia Garcia",
    age: 29,
    occupation: "Artist",
  },
  {
    id: 20,
    name: "Natalie Hall",
    age: 34,
    occupation: "Teacher",
  },
  {
    id: 21,
    name: "Oliver Patel",
    age: 38,
    occupation: "Software Developer",
  },
  {
    id: 22,
    name: "Penelope Martin",
    age: 26,
    occupation: "Writer",
  },
  {
    id: 23,
    name: "Quinn Lee",
    age: 35,
    occupation: "Entrepreneur",
  },
  {
    id: 24,
    name: "Rachel Kim",
    age: 30,
    occupation: "Dentist",
  },
  {
    id: 25,
    name: "Samuel Jackson",
    age: 42,
    occupation: "Lawyer",
  },
  {
    id: 26,
    name: "Tessa Hall",
    age: 28,
    occupation: "Graphic Designer",
  },
  {
    id: 27,
    name: "Uma Patel",
    age: 39,
    occupation: "Marketing Manager",
  },
  {
    id: 28,
    name: "Vincent Brooks",
    age: 36,
    occupation: "IT Consultant",
  },
  {
    id: 29,
    name: "Walter White",
    age: 41,
    occupation: "Engineer",
  },
  {
    id: 30,
    name: "Xavier Sanchez",
    age: 33,
    occupation: "Sales Representative",
  },
  {
    id: 31,
    name: "Yvonne Martin",
    age: 29,
    occupation: "Teacher",
  },
  {
    id: 32,
    name: "Zoe Lee",
    age: 27,
    occupation: "Data Analyst",
  },
  {
    id: 33,
    name: "Abigail Brown",
    age: 34,
    occupation: "Nurse",
  },
  {
    id: 34,
    name: "Caleb Harris",
    age: 38,
    occupation: "Business Owner",
  },
  {
    id: 35,
    name: "Diana Taylor",
    age: 31,
    occupation: "Event Planner",
  },
  {
    id: 36,
    name: "Eleanor Walker",
    age: 40,
    occupation: "CEO",
  },
];

const DataTable = () => {
  const [currentPage, SetCurrentPage] = useState(1);
  const [userCountPerPage, setUserCountPerPage] = useState(5);

  const [sortType, setSortType] = useState('asc')
  const [selectedColumn, setSelectedColumn] = useState('')

  const handleSorting = (key) => {
    const updatedType = key == selectedColumn && sortType == 'asc' ? 'desc' : 'asc'
    setSelectedColumn(key)
    setSortType(updatedType)
  }

  const sortedUser = [...users].sort((a,b) => {
    if(a[selectedColumn] < b[selectedColumn]) return sortType == 'asc' ? -1 : 1
    if(a[selectedColumn] > b[selectedColumn]) return sortType == 'asc' ? 1 : -1
  })

  const lastIndex = userCountPerPage * currentPage;
  const firstIndex = lastIndex - userCountPerPage;

  const totalPage = Math.ceil(users.length / userCountPerPage);

//   const filterUser = users.slice(firstIndex, lastIndex);
  const filterUser = sortedUser.slice(firstIndex, lastIndex);

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      SetCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      SetCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div>
          <div>
            <table style={{ padding: "10px" }}>
              <thead>
                <tr>
                  {[
                    { label: "ID", key: "id" },
                    { label: "Name", key: "name" },
                    { label: "Age", key: "age" },
                    { label: "Occupation", key: "occupation" },
                  ].map(({ label, key }) => (
                    <th onClick={() => handleSorting(key)}>{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filterUser.map(({ id, name, age, occupation }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{occupation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Form.Select
              className="mt-4"
              style={{ width: "20%" }}
              onChange={(e) => setUserCountPerPage(e.target.value)}
              value={userCountPerPage}
            >
              <option>Select Number of User</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </Form.Select>
          </div>
          <div className="d-flex mt-3">
            <div className="m-3">
              <Button onClick={handlePreviousClick}>Previous</Button>
            </div>

            <div className="d-flex align-items-center">
              {`Page ${currentPage} of ${totalPage}`}
            </div>
            <div className="m-3">
              <Button onClick={handleNextClick}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
