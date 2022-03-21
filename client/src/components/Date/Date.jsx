import React from "react";
import { DatePicker } from "antd";

const monthFormat = "MM/YYYY";

export default function Date({ onChange }) {
  return (
    <DatePicker
      format={monthFormat}
      picker="month"
      onBlur={(e) => onChange(e.target.value)}
    />
  );
}
