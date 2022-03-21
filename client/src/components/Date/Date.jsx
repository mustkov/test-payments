import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
// const monthFormat = "YYYY/MM";
const monthFormat = "MM/YYYY";

export default function Date({ onChange }) {
  return (
    <DatePicker
      // defaultValue={moment("03/2022", monthFormat)}
      format={monthFormat}
      picker="month"
      onBlur={(e) => onChange(e.target.value)}
    />
  );
}
