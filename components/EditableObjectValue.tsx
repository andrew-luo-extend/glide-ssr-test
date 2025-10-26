import React from "react";
import { PropertyValueCard } from "./PropertyValueCard";

interface EditableObjectValueProps {
  value: Record<string, unknown>;
  depth?: number;
}

export default function EditableObjectValue({
  value,
  depth = 0,
}: EditableObjectValueProps) {
  const entries = Object.entries(value);

  return (
    <div className="space-y-2 border-l-2 border-gray-200 pl-4">
      {entries.map(([key, val]) => (
        <div key={key} className="py-1">
          <div className="text-sm font-medium text-gray-700">{key}:</div>
          <PropertyValueCard value={val} depth={depth + 1} />
        </div>
      ))}
    </div>
  );
}
