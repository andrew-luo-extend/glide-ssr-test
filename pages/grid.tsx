import dynamic from "next/dynamic";

// Dynamically import the PropertyValueCard component with no SSR
const PropertyValueCard = dynamic(
  () => import("../components/PropertyValueCard"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    ),
  }
);

// Test data with nested objects and arrays
const testData = {
  user: {
    name: "John Doe",
    age: 30,
    emails: ["john@example.com", "john.doe@work.com"],
    address: {
      street: "123 Main St",
      city: "San Francisco",
      zipCode: 94102,
    },
  },
  items: [
    { id: 1, name: "Item 1", price: 29.99 },
    { id: 2, name: "Item 2", price: 49.99 },
    { id: 3, name: "Item 3", price: 19.99 },
  ],
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
  },
};

export default function GridPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Circular Dependency Test
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          PropertyValueCard → EditableObjectValue → PropertyValueCard (circular)
        </p>
      </div>
      <div className="p-6">
        <PropertyValueCard value={testData} />
      </div>
    </div>
  );
}
