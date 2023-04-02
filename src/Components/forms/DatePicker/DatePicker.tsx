import React from "react";
import * as Styled from "./DatePicker.styles";
import { FaCalendarAlt } from "react-icons/fa";
import classNames from "classnames";
import { Input } from "../Input";
import ReactDatePicker, {
  registerLocale,
  ReactDatePickerProps,
} from "react-datepicker";
import ptBr from "date-fns/locale/pt-BR";
import { FormControlProps } from "../FormControl";
import { addClasseNamePrefix } from "../../../utils/addClasseNamePrefix";
import { isDate, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBr);

type DateNullable = Date | null | undefined;

// Pick<ReactDatePickerProps, "onChange" | "selectsRange"> {
interface DatePickerProps<WithRange extends boolean | undefined = undefined>
  extends FormControlProps {
  selectedDate?: Date | null | undefined;
  startDate?: Date | null | undefined;
  endDate?: Date | null | undefined;
  placeholder?: string;
  disabled?: boolean;
  selectsRange?: boolean;
  onChange?: (date: Date) => void;
  onChangeRange?: (dates: [Date | null, Date | null]) => void;
}

export function DatePicker({
  selectedDate,
  label,
  className,
  placeholder = "dd/mm/aaaa",
  state,
  selectsRange,
  feedbackText,
  startDate,
  endDate,
  onChange,
  onChangeRange,
  ...restProps
}: DatePickerProps) {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (isDate(selectedDate)) {
      // console.log("selectedDate", format(selectedDate, "dd/MM/yyyy"));
      setInputValue(format(selectedDate, "dd/MM/yyyy"));
    } else {
      setInputValue("");
    }
  }, [selectedDate]);

  React.useEffect(() => {
    if (isDate(startDate)) {
      console.log("startDate", format(startDate, "dd/MM/yyyy"));
      if (isDate(endDate)) {
        console.log("endDate", format(endDate, "dd/MM/yyyy"));
        const formatedRangeDate = `${format(
          startDate,
          "dd/MM/yyyy"
        )} - ${format(endDate, "dd/MM/yyyy")}`;
        setInputValue(formatedRangeDate);
      } else {
        setInputValue(format(startDate, "dd/MM/yyyy"));
      }
      // console.log("selectedDate", format(endDate, "dd/MM/yyyy"));
    }
  }, [startDate, endDate]);

  return (
    <div
      className={classNames(
        addClasseNamePrefix("date-picker"),
        Styled.DatePickerPopper(),
        className
      )}
    >
      <ReactDatePicker
        value={inputValue}
        // dateFormat="dd/MM/yyyy"
        startDate={startDate}
        endDate={endDate}
        selected={selectedDate}
        withPortal
        selectsRange={selectsRange}
        placeholderText={placeholder}
        onChange={selectsRange ? onChangeRange : onChange}
        customInput={
          <Input
            feedbackText={feedbackText}
            state={state}
            label={label}
            rightIcon={<FaCalendarAlt />}
          />
        }
        locale="pt-BR"
        {...restProps}
      />
    </div>
  );
}
