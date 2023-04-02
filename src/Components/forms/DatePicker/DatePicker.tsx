import React from "react";
import * as Styled from "./DatePicker.styles";
import { FaCalendarAlt } from "react-icons/fa";
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
import { FormControlProps } from "../FormControl";

registerLocale("pt-BR", ptBr);

interface DatePickerProps extends FormControlProps {
  inputValue?: string;
  placeholderText?: string;
  disabled?: boolean;
  onInputChange?: (value: string) => void;
  onFormatError?: (isFormatError: boolean) => void;
}

export function DatePicker({
  inputValue,
  label,
  className,
  state,
  feedbackText,
  onInputChange,
  onFormatError,
  ...restProps
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>(null);
  const [alreadyBlurred, setAlreadyBlurred] = React.useState(false);

  const inputValueMatchDate = React.useMemo(
    () => inputValue?.match(regexs.dateFormat),
    [inputValue]
  );

  const isformatError = React.useMemo(() => {
    if (alreadyBlurred && !inputValueMatchDate) {
      onFormatError?.(true);
      return true;
    } else {
      onFormatError?.(false);
    }
  }, [alreadyBlurred, inputValueMatchDate, onFormatError]);

  const inputState = React.useMemo(() => {
    if (state) return state;

    if (isformatError) return "danger";

    return undefined;
  }, [isformatError, state]);

  React.useEffect(() => {
    if (inputValueMatchDate) {
      let parts = inputValue.split("/");
      setDate?.(
        new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]))
      );
    } else {
      setDate?.(null);
    }
  }, [inputValue, inputValueMatchDate]);

  React.useEffect(() => {
    if (inputValueMatchDate) {
      let parts = inputValue.split("/");
      setDate?.(
        new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]))
      );
    } else {
      setDate?.(null);
    }
  }, [alreadyBlurred, inputValueMatchDate]);

  const handleSelectDate = React.useCallback(
    (date: Date) => {
      console.log("date:", date);
      if (isDate(date)) {
        onInputChange?.(format(date, "dd/MM/yyyy"));
      }
    },
    [onInputChange]
  );

  const handleInputChange = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (isUndefined(value)) {
        return;
      }
      onInputChange?.(
        value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{4})\d+?$/, "$1")
      );
    },
    [onInputChange]
  );

  return (
    <ReactDatePicker
      value={inputValue}
      dateFormat="dd/MM/yyyy"
      popperClassName={classNames(Styled.DatePickerPopper())}
      onChangeRaw={handleInputChange}
      onChange={undefined}
      onSelect={handleSelectDate}
      selected={date}
      customInput={
        <Input
          label={label}
          className={className}
          state={inputState}
          feedbackText={feedbackText}
          rightIcon={<FaCalendarAlt />}
        />
      }
      locale="pt-BR"
      onBlur={() => setAlreadyBlurred(true)}
      {...restProps}
    />
  );
}
