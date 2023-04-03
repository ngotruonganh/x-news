import React from "react";
import Link from "next/link";
export default function NavigationMenu({ menu, onClickMenu }) {
  return (
    <div className="justify-content-md-center">
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
                    className="nav-link color-pink-hover"
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
