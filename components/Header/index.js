import React, {useState} from 'react'
import TopSocial from './top_social'
import TopMenu from './top_menu'
import SearchBar from './search_bar'
import NavigationMenu from './nav_menu'
import { menuList } from '../data/dataMenu'
import classNames from 'classnames'
import SearchFrom from '../SearchForm'
export default function Header() {
    const [open,setOpen] = useState(false)
    const [showSearch,setShowSearch] = useState(false)

    function onClickSearch(){
        setShowSearch(!showSearch)
    }

    function onClickMenu(){
        setOpen(false)
    }

    return (
        <div id="wrapper">
            <div className="topbar-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                            <TopSocial className="topsocial" />
                        </div>
                        <div className="col-lg-4 hidden-md-down">
                            <TopMenu />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <SearchBar onClickSearch={onClickSearch} />
                        </div>
                    </div>
                </div>
            </div>
            {showSearch && <SearchFrom onClose={()=>setShowSearch(false)} />}
            <div className="logo-layout">
                <div className="header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="logo">
                                    <a href="/"><img src="/assets/images/logo-coin-desk.png" alt="main logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <nav className="navbar  navbar-inverse navbar-toggleable-md">
                            <button className="navbar-toggler "
                                type="button"
                                data-toggle="collapse"
                                data-target="#cloapediamenu"
                                aria-controls="cloapediamenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation "
                                onClick={()=>setOpen(!open)}
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className={classNames('nav-menu',open && 'active-nav-item')}>
                            <NavigationMenu  menu={menuList} onClickMenu={onClickMenu}/>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}
