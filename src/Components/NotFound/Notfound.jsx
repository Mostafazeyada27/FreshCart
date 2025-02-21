// eslint-disable-next-line no-unused-vars
import React from "react";
import notfound  from "../../assets/error.svg"

export default function Notfound() {
  return <div className="flex w-3/4 mx-auto" >
    <img src={notfound} className="w-full" alt="" />
    </div>;
}
