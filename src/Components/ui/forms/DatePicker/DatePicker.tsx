import React, { useEffect, useMemo, useState } from "react";
import * as Styled from "./DatePicker.styles";
import { FaCalendarAlt } from "react-icons/fa";
import classNames from "classnames";
import { Input } from "../Input";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import ptBr from "date-fns/locale/pt-BR";
import { FormControlProps } from "../FormControl/FormControl";
import { addClasseNamePrefix } from "../../../../utils/addClasseNamePrefix";
import { isDate, format } from "date-fns";
import { Box } from "../../layout/Box";
import { DatepickerCoreStyle } from "./datepickerCore.style";

registerLocale("pt-BR", ptBr);

type NullabledDate = Date | null;

export interface DatePickerProps extends FormControlProps {
  selectedDate?: NullabledDate;
  startDate?: NullabledDate;
  endDate?: NullabledDate;
  maxDate?: NullabledDate;
  minDate?: NullabledDate;
  placeholder?: string;
  disabled?: boolean;
  showTimeSelect?: boolean;
  selectsRange?: boolean;
  onChange?: (date: Date) => void;
  onChangeRange?: (dates: [NullabledDate, NullabledDate]) => void;
}

export function DatePicker({
  selectedDate,
  label,
  className,
  placeholder,
  state,
  selectsRange,
  showTimeSelect,
  feedbackText,
  startDate,
  endDate,
  onChange,
  onChangeRange,
  ...restProps
}: DatePickerProps) {
  const [inputValue, setInputValue] = useState("");

  const handledShowTimeSelect = useMemo(
    () => (selectsRange ? false : showTimeSelect),
    [selectsRange, showTimeSelect]
  );

  const handledPlaceholder = useMemo(() => {
    if (placeholder) {
      return placeholder;
    }
    let handledPlaceholderTemp = "dd/mm/aaaa";
    if (handledShowTimeSelect) {
      handledPlaceholderTemp = `${handledPlaceholderTemp} HH:mm`;
    }
    return handledPlaceholderTemp;
  }, [placeholder, handledShowTimeSelect]);

  const dateFormat = useMemo(() => {
    let dateFormatTemp = "dd/MM/yyyy";
    if (handledShowTimeSelect) {
      dateFormatTemp = `${dateFormatTemp} HH:mm`;
    }
    return dateFormatTemp;
  }, [handledShowTimeSelect]);

  useEffect(() => {
    if (isDate(selectedDate)) {
      // console.log("selectedDate", format(selectedDate, dateFormat));
      setInputValue(format(selectedDate, dateFormat));
    } else {
      setInputValue("");
    }
  }, [selectedDate, dateFormat]);

  useEffect(() => {
    if (isDate(startDate)) {
      console.log("startDate", format(startDate, dateFormat));
      if (isDate(endDate)) {
        console.log("endDate", format(endDate, dateFormat));
        const formatedRangeDate = `${format(startDate, dateFormat)} - ${format(
          endDate,
          dateFormat
        )}`;
        setInputValue(formatedRangeDate);
      } else {
        setInputValue(format(startDate, dateFormat));
      }
      // console.log("selectedDate", format(endDate, dateFormat));
    }
  }, [startDate, endDate, dateFormat]);

  return (
    <Box
      className={classNames(
        addClasseNamePrefix("date-picker"),
        DatepickerCoreStyle(),
        Styled.DatePickerPopper(),
        className
      )}
      // css={datepickerCore}
    >
      <ReactDatePicker
        // className={datePickerStyle["react-datepicker"]}
        value={inputValue}
        timeFormat="HH:mm"
        startDate={startDate}
        endDate={endDate}
        selected={selectedDate}
        withPortal
        showTimeSelect={handledShowTimeSelect}
        timeIntervals={15}
        selectsRange={selectsRange}
        placeholderText={handledPlaceholder}
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
    </Box>
  );
}
