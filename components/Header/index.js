import React, { useState } from "react";
import TopSocial from "./top_social";
import TopMenu from "./top_menu";
import SearchBar from "./search_bar";
import NavigationMenu from "./nav_menu";
import { menuList } from "../data/dataMenu";
import classNames from "classnames";
import SearchFrom from "../SearchForm";
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
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 hidden-xs-down d-flex align-items-center">
                <TopSocial className="topsocial d-flex flex-column align-items-start" />
              </div>
              <div className="col-lg-6 hidden-md-down">
                <TopMenu />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 d-flex align-items-center">
                <SearchBar onClickSearch={onClickSearch} />
              </div>
            </div>
          </div>
        </div>
        {showSearch && <SearchFrom onClose={() => setShowSearch(false)} />}
        <div className="logo-layout">
          <div className="header-section mt-2">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 d-flex align-items-center">
                  <div className="logo">
                    <a href="/">
                      <img src="/assets/images/logo.svg" alt="main logo" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-8 position-relative">
                  <div className="logo">
                    <a href="/">
                      <img
                        className="w-100"
                        src="/assets/images/read-more.png"
                        alt="main logo"
                      />
                    </a>
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
                    <a
                      href="#"
                      className="bg-warning border border-0 p-2 font-weight-bold"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header w-100">
        <nav className="navbar navbar-inverse navbar-toggleable-md container">
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
        {/* </div> */}
      </header>
    </>
  );
}
