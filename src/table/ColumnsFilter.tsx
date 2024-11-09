import React, { useState } from "react";
import {
  Popover,
  Checkbox,
  Button,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Table } from "@tanstack/react-table";

interface ColumnFilterProps {
  column: {
    columnDef: any;
    filterValue: string[] | undefined;
    setFilter: (filterValue: string[] | undefined) => void;
    Header: string;
    id: string;
  };
  Data: any[];
  //@ts-ignore
  table: Table;
}

const getUniqueValuesDynamic = (data: any[]) => {
  if (!Array.isArray(data)) {
    return {};
  }

  const uniqueValues: { [key: string]: Set<any> } = {};

  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!uniqueValues[key]) {
        uniqueValues[key] = new Set();
      }
      uniqueValues[key].add(item[key]);
    });
  });

  Object.keys(uniqueValues).forEach((key) => {
    //@ts-ignore
    uniqueValues[key] = Array.from(uniqueValues[key]);
  });

  return uniqueValues;
};

const ColumnFilterData: React.FC<ColumnFilterProps> = ({
  column,
  table,
  Data,
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const [defaultColumnFilter, setDefaultColumnFilter] = useState("");

  const [tempFilters, setTempFilters] = useState<string[]>(
    column.filterValue || []
  );
  //@ts-ignore
  const { filterVariant } = column?.column?.columnDef.meta ?? {};
  const uniqueValues = getUniqueValuesDynamic(Data);

  const handleCheckboxChange = (value: string, column: string) => {
    setTempFilters((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      } else {
        return [...prev, value];
      }
    });
    setDefaultColumnFilter(column);
  };

  const handleClearFilters = () => {
    setTempFilters([]);
    table.setColumnFilters([{ id: "", value: [""] }]);

    //@ts-ignore
    setGlobalFilter(undefined);
    table.setColumnFilters([{ id: "", value: [""] }]);
    setPopoverOpen(false);
  };

  const handleSubmitFilters = () => {
    table.setColumnFilters([{ id: defaultColumnFilter, value: tempFilters }]);

    setPopoverOpen(false);
  };

  function renderCheckboxOptions(columnId: string, data: string[]) {
    if (!data) {
      return "Data is not present";
    }

    if (column.id === columnId) {
      return data.map((option) => (
        <Checkbox
          key={option}
          className="capitalize mt-2 text-black"
          isSelected={tempFilters.includes(option)}
          onChange={() => handleCheckboxChange(option, columnId)}
        >
          {option.replace(/_/g, " ")}
        </Checkbox>
      ));
    }
    return null;
  }

  const columnID = column.id;

  return (
    <div className="relative inline-block">
      <Popover
        isOpen={popoverOpen}
        onOpenChange={setPopoverOpen}
        placement="bottom-start"
      >
        <PopoverTrigger>
          {filterVariant !== "select" ? (
            ""
          ) : (
            <Button isIconOnly variant="light">
              <Bars3Icon className="h-4" />
            </Button>
          )}
        </PopoverTrigger>

        <PopoverContent>
          <div
            style={{ overflowY: "auto", maxHeight: "400px", maxWidth: "350px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
                background: "white",
              }}
            >
              {/* {renderCheckboxOptions(
                "taskname",
                Array.from(uniqueValues.taskname)
              )} */}

              {renderCheckboxOptions(
                columnID,
                Array.from(uniqueValues[columnID])
              )}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "10px",
                background: "white",
              }}
            >
              <Button
                onClick={handleClearFilters}
                variant="solid"
                color="danger"
                size="sm"
              >
                Clear
              </Button>
              <Button
                onClick={handleSubmitFilters}
                variant="solid"
                color="primary"
                className="ml-5"
                size="sm"
              >
                Submit
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ColumnFilterData;
