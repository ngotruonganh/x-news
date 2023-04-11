import Link from "next/link";

export default function Topmenu() {
  return (
    <div className="text-center d-flex align-items-center">
      <Link
        href="/"
        className="font-weight-bold p-2 mr-3 bg-warning border border-0"
      >
        Breaking News
      </Link>
      <span className="font-weight-bold">
        Indonesia says located black box recorders from crashed plane
      </span>
    </div>
  );
}
