import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import React from "react";

type FormDateRangePickerValue = Date | null | [Date | null, Date | null];

interface FormDateRangePickerComponentProps {
  label?: string;
  value: FormDateRangePickerValue;
  onChange: (date: FormDateRangePickerValue) => void;
}

const FormDateRangePickerComponent: React.FC<
  FormDateRangePickerComponentProps
> = ({ label, value, onChange }) => {
  return (
    <div className={"space-y-2"}>
      {label && <span className={"font-medium"}>{label}</span>}

      <div className={"p-3 bg-gray-light border border-gray-main rounded-md"}>
        <DateRangePicker value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default FormDateRangePickerComponent;
