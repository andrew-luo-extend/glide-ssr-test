import React from "react";
import DataEditor, {
  GridCellKind,
  GridColumn,
  Item,
} from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";

interface Person {
  name: string;
  email: string;
  age: number;
  department: string;
  salary: number;
}

// Test dummy data
const dummyData: Person[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 32,
    department: "Engineering",
    salary: 95000,
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 28,
    department: "Marketing",
    salary: 75000,
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 45,
    department: "Sales",
    salary: 85000,
  },
  {
    name: "Alice Williams",
    email: "alice.williams@example.com",
    age: 35,
    department: "Engineering",
    salary: 110000,
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    age: 29,
    department: "HR",
    salary: 65000,
  },
  {
    name: "Diana Prince",
    email: "diana.prince@example.com",
    age: 38,
    department: "Engineering",
    salary: 125000,
  },
  {
    name: "Ethan Hunt",
    email: "ethan.hunt@example.com",
    age: 41,
    department: "Operations",
    salary: 90000,
  },
  {
    name: "Fiona Green",
    email: "fiona.green@example.com",
    age: 26,
    department: "Marketing",
    salary: 70000,
  },
  {
    name: "George Wilson",
    email: "george.wilson@example.com",
    age: 52,
    department: "Finance",
    salary: 105000,
  },
  {
    name: "Hannah Lee",
    email: "hannah.lee@example.com",
    age: 31,
    department: "Engineering",
    salary: 98000,
  },
];

const columns: GridColumn[] = [
  { title: "Name", width: 200 },
  { title: "Email", width: 250 },
  { title: "Age", width: 100 },
  { title: "Department", width: 150 },
  { title: "Salary", width: 120 },
];

export default function DataGrid() {
  const getData = React.useCallback((cell: Item) => {
    const [col, row] = cell;
    const person = dummyData[row];

    if (!person) {
      return {
        kind: GridCellKind.Text,
        data: "",
        displayData: "",
        allowOverlay: false,
      };
    }

    switch (col) {
      case 0:
        return {
          kind: GridCellKind.Text,
          data: person.name,
          displayData: person.name,
          allowOverlay: true,
        };
      case 1:
        return {
          kind: GridCellKind.Text,
          data: person.email,
          displayData: person.email,
          allowOverlay: true,
        };
      case 2:
        return {
          kind: GridCellKind.Number,
          data: person.age,
          displayData: person.age.toString(),
          allowOverlay: true,
        };
      case 3:
        return {
          kind: GridCellKind.Text,
          data: person.department,
          displayData: person.department,
          allowOverlay: true,
        };
      case 4:
        return {
          kind: GridCellKind.Number,
          data: person.salary,
          displayData: `$${person.salary.toLocaleString()}`,
          allowOverlay: true,
        };
      default:
        return {
          kind: GridCellKind.Text,
          data: "",
          displayData: "",
          allowOverlay: false,
        };
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataEditor
        getCellContent={getData}
        columns={columns}
        rows={dummyData.length}
        width="100%"
        height="100%"
      />
    </div>
  );
}
