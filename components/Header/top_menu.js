import Link from "next/link";
import React from "react";

export default function Topmenu() {
  return (
    <div className="text-center d-flex align-items-center">
      <Link href="/" className="font-weight-bold py-3 px-2 mr-3 bg-warning border border-0">Breaking News</Link>
      <span className="font-weight-bold">
        Indonesia says located black box recorders from crashed plane
      </span>
    </div>
  );
}
