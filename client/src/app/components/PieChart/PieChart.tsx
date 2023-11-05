"use client"

import {CircularProgress} from "@nextui-org/react";

export default function PieChart({ value, size }) {

  return (
    <CircularProgress
        classNames={{
            value: (size=="lg"? "text-[24px] font-semibold": "text-[14px] font-semibold"),
            svg: (size=="lg"? "w-[80px] h-[80px] drop-shadow-md": "w-[45px] h-[45px] drop-shadow-md"),
        }}
        aria-label="Loading..."
        size={size}
        value={value}
        color="success"
        showValueLabel={true}
    />
  );
}
