import React from "react";
import DataEditor, {
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
} from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";
import EditableObjectValue from "./EditableObjectValue";

interface EditableArrayValueProps {
  value: unknown[];
}

const columns: GridColumn[] = [
  { title: "Index", width: 100 },
  { title: "Value", width: 300 },
  { title: "Type", width: 150 },
];

export default function EditableArrayValue({ value }: EditableArrayValueProps) {
  const getData = React.useCallback(
    (cell: Item): GridCell => {
      const [col, row] = cell;
      const item = value[row];

      if (item === undefined) {
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
            kind: GridCellKind.Number,
            data: row,
            displayData: row.toString(),
            allowOverlay: false,
          };
        case 1:
          return {
            kind: GridCellKind.Text,
            data: JSON.stringify(item),
            displayData: JSON.stringify(item),
            allowOverlay: true,
          };
        case 2:
          return {
            kind: GridCellKind.Text,
            data: typeof item,
            displayData: typeof item,
            allowOverlay: false,
          };
        default:
          return {
            kind: GridCellKind.Text,
            data: "",
            displayData: "",
            allowOverlay: false,
          };
      }
    },
    [value]
  );

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <EditableObjectValue value={{}} />
      <DataEditor
        getCellContent={getData}
        columns={columns}
        rows={value.length}
        width="100%"
        height="100%"
      />
    </div>
  );
}
