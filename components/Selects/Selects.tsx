"use client";

import { useEffect, useRef, useState } from "react";
import css from "./Selects.module.css";

interface CustomSelectProps {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  width?: number;
}

export function CustomSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  width = 200,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={css.wrapper} style={{ width }} ref={ref}>
      <label className={css.label}>{label}</label>

      <button
        type="button"
        className={`${css.control} ${open ? css.open : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={!value ? css.placeholder : ""}>
          {value || placeholder}
        </span>

        <svg className={css.arrow}>
          <use href="/sprite.svg#select" />
        </svg>
      </button>

      {open && (
        <ul className={css.dropdown}>
          {options.map((option) => (
            <li
              key={option}
              className={`${css.option} ${
                option === value ? css.selected : ""
              }`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
