import React from "react";
import EditableObjectValue from "./EditableObjectValue";
import EditableArrayValue from "./EditableArrayValue";

interface PropertyValueCardProps {
  value: unknown;
  depth?: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function PropertyValueCard({
  value,
  depth = 0,
}: PropertyValueCardProps) {
  // Prevent infinite recursion
  if (depth > 5) {
    return <div className="text-xs text-gray-400">Max depth reached</div>;
  }

  // Handle null/undefined
  if (value === null || value === undefined) {
    return (
      <div className="rounded border border-gray-200 bg-gray-50 p-2 text-sm text-gray-500">
        {String(value)}
      </div>
    );
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return (
      <div className="rounded border border-blue-200 bg-blue-50 p-3">
        <div className="mb-2 text-xs font-semibold uppercase text-blue-700">
          Array ({value.length} items)
        </div>
        <EditableArrayValue value={value} />
      </div>
    );
  }

  // Handle objects
  if (isRecord(value)) {
    return (
      <div className="rounded border border-purple-200 bg-purple-50 p-3">
        <div className="mb-2 text-xs font-semibold uppercase text-purple-700">
          Object ({Object.keys(value).length} keys)
        </div>
        <EditableObjectValue value={value} depth={depth} />
      </div>
    );
  }

  // Handle primitives
  return (
    <div className="rounded border border-gray-200 bg-white p-2">
      <span className="text-sm text-gray-900">{String(value)}</span>
      <span className="ml-2 text-xs text-gray-400">({typeof value})</span>
    </div>
  );
}
