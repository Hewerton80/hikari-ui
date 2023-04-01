import React, { useCallback } from "react";

import * as Styled from "./DatePicker.styles";
import classNames from "classnames";
import { isUndefined } from "../../../utils/isType";
import { regexs } from "../../../utils/regex";
import { Input } from "../Input";
import ReactDatePicker, {
  // ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import ptBr from "date-fns/locale/pt-BR";
import { isDate, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBr);

interface DatePickerProps extends GlobalProps {
  onChange(date: Date): void;
  placeholderText?: string;
  required?: boolean;
  disabled?: boolean;
  selected?: Date | null;
}

export function DatePicker({ onChange, ...restProps }: DatePickerProps) {
  const [inputValue, setInputValue] = React.useState("");

  const handleSelectDate = React.useCallback(
    (date: Date) => {
      onChange?.(date);
      if (isDate(date)) {
        setInputValue(format(date, "dd/MM/yyyy"));
      }
    },
    [onChange]
  );

  const handleInputChange = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (isUndefined(value)) {
        return;
      }
      setInputValue(
        value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{4})\d+?$/, "$1")
      );
      if (!value) {
        onChange?.(null);
      } else if (value.match(regexs.dateFormat)) {
        let parts = value.split("/");
        onChange?.(
          new Date(
            parseInt(parts[2]),
            parseInt(parts[1]) - 1,
            parseInt(parts[0])
          )
        );
      } else {
        onChange?.(null);
      }
    },
    [onChange]
  );

  return (
    <ReactDatePicker
      value={inputValue}
      dateFormat="dd/MM/yyyy"
      popperClassName={classNames(Styled.DatePickerPopper())}
      onChangeRaw={handleInputChange}
      onChange={undefined}
      onSelect={handleSelectDate}
      customInput={<Input />}
      locale="pt-BR"
      {...restProps}
    />
  );
}
