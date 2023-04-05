import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavigationMenu({ menu, onClickMenu }) {
  const router = useRouter();
  return (
    <div className="justify-content-md-center d-none d-lg-block">
      <ul className="navbar-nav">
        {menu &&
          menu.map((item, idx) => {
            return (
              <li className="nav-item" key={idx}>
                <Link
                  href={{
                    pathname: item.url,
                  }}
                >
                  <span
                    className={
                      router.pathname == item.url
                        ? "nav-link bg-nav-link text-dark"
                        : "nav-link"
                    }
                    onClick={() => onClickMenu()}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
