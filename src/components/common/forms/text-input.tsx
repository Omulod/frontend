/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { cn } from "@/helpers/cn";
import React, { forwardRef, useState } from "react";
type TextFieldParams = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label?: string;
  tip?: string;
  error?: string;
  wrapperClassName?: string;
  inputClassName?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextFieldParams>(
  function CustomInput(
    {
      label,
      tip,
      error,
      required,
      wrapperClassName,
      inputClassName,
      type,
      placeholder,
      ...inputParams
    },
    ref
  ) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (type === "date") {
        e?.target?.showPicker();
      }
    };

    return (
      <div className={cn(wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputParams.id as string}
            className={cn(
              "inline-block font-bold text-primary-500 uppercase",
              {}
            )}
          >
            {label}
          </label>
        )}
        {tip && <p className="mb-2 text-sm text-neutral-400">{tip}</p>}

        <div className="relative">
          {/* {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute bottom-0 right-1 top-0 flex items-center px-2"
            >
              {isPasswordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </button>
          )} */}

          <input
            ref={ref}
            type={type === "password" && isPasswordVisible ? "text" : type}
            {...inputParams}
            placeholder={required ? `${placeholder} *` : placeholder}
            className={cn(
              "w-full border-b border-neutral-500 bg-transparent py-3 leading-none transition duration-200 ease-in-out [appearance:textfield] placeholder:text-neutral-400 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none peer",
              {
                "pr-10": type === "password",
                "border-[#F04438]": error,
              },
              inputClassName
            )}
            onFocus={handleFocus}
          />
        </div>
        {error && (
          <p className="mt-1 flex items-center gap-1 text-[0.75rem] text-[#F04438]">
            {/* <WarningIcon size={16} />  */}
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

export default TextInput;
