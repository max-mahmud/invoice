import Link from "next/link";
import React from "react";

const ThemeLink = (props) => {
  return (
    <Link
      href={props.toLink}
      className={` ${
        props.color ? `${props.color}` : "bg-red-500 focus:ring-red-300 text-sm"
      } text-white   focus:ring-2 focus:outline-none  font-medium rounded px-5 py-2.5 text-center mr-2 flex gap-2 items-center`}
    >
      {props.name} {props.icon && props.icon}
    </Link>
  );
};

export default ThemeLink;
