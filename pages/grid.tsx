import dynamic from "next/dynamic";

// Dynamically import the DataGrid component with no SSR
const DataGrid = dynamic(() => import("../components/DataGrid"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center">
      <p className="text-lg text-gray-600">Loading grid...</p>
    </div>
  ),
});

export default function GridPage() {
  return (
    <div className="h-screen w-full">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Data Grid</h1>
        <p className="mt-1 text-sm text-gray-500">
          Employee data displayed using glide-data-grid
        </p>
      </div>
      <DataGrid />
    </div>
  );
}
