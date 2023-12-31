import { useState } from "react";
import TopMenu from "./top_menu";
import SearchBar from "./search_bar";
import NavigationMenu from "./nav_menu";
import { menuList } from "../data/dataMenu";
import classNames from "classnames";
import SearchForm from "components/SearchForm";
import TopWeather from "./top_weather";
import Link from "next/link";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  function onClickSearch() {
    setShowSearch(!showSearch);
  }

  function onClickMenu() {
    setOpen(false);
  }

  return (
    <>
      <div id="wrapper">
        <div className="topbar-section p-0">
          <div className="layout">
            <div className="row">
              <div className="col-12 col-lg-9 d-flex flex-column flex-lg-row justify-content-start align-items-start align-items-lg-center mt-2 mt-lg-0">
                <TopWeather className="topsocial d-flex mr-5" />
                <TopMenu />
              </div>
              <div className="col-12 col-lg-3 d-flex justify-content-end align-items-center my-2 my-lg-0">
                <SearchBar onClickSearch={onClickSearch} />
              </div>
            </div>
          </div>
        </div>
        {showSearch && <SearchForm onClose={() => setShowSearch(false)} />}
        <div className="header-section mt-2">
          <div className="layout">
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-4 d-flex align-items-center">
                <div className="logo">
                  <Link href="/" passHref>
                    <img src="/assets/images/logo.svg" alt="main logo" />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-8 position-relative mt-3 mt-md-0">
                <div className="logo">
                  <Link href="/" passHref>
                    <img
                      className="readmore-img w-100"
                      src="/assets/images/read-more.png"
                      alt="main logo"
                    />
                  </Link>
                </div>
                <div className="in-image">
                  <div className="font-weight-bold">
                    <p className="text-white m-0">
                      NFTBOOKS <br />
                      Best Platform for NFT Book
                    </p>
                    <p className="text-warning m-0">Experience the change!</p>
                  </div>
                </div>
                <div className="read-more">
                  <Link
                    href="/"
                    className="bg-warning border border-0 p-2 font-weight-bold"
                    passHref
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header w-100">
        <nav className="navbar navbar-inverse navbar-toggleable-md layout p-0">
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#cloapediamenu"
            aria-controls="cloapediamenu"
            aria-expanded="false"
            aria-label="Toggle navigation "
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={classNames("nav-menu", open && "active-nav-item")}>
            <NavigationMenu menu={menuList} onClickMenu={onClickMenu} />
          </div>
        </nav>
      </header>
    </>
  );
}
