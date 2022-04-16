import React from "react";
import { Logotype } from "./logo.style";
import Link from "../Link";

export default function Logo() {
  return (
    <Logotype>
      <Link href={"/"} className="div-logo">
        <img src="/icons/logo.svg" />
        <h1>tamo</h1>
        <span className="junto">junto</span>
      </Link>
    </Logotype>
  );
}
