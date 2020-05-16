import React, { Component } from 'react';
import "./css/IndexLanding.css";

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

// membuat sebuah component dengan nama Baca
class navbar extends Component {
    render(){
        // const { param } = this.props.match;
        return (
            <div id="navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a class="navbar-brand" href="#">Hasil Panen</a>

                            <form class="search">
                                <label className="searchIcon"><i class="lni lni-search-alt"></i></label>
                                <input type="text" value="" className="textSearch" placeholder="Cari" />
                            </form>

                        </div>
                        <div class ="float-right">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                            <li class="nav-item active">
                                <Link to="/" className="nav-link">Beranda</Link>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <a class="dropdown-toggle dropdown-menu-style" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Produk
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#">Sayur</a>
                                        <a class="dropdown-item" href="#">Buah</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Kontak Kami</a>
                            </li>
                            <li>
                                <Link to="/Cart" className="dropdown-item cart-icon">
                                    <i class="lni lni-cart dropdown-menu-style font-cart"></i>
                                </Link>
                            </li>
                            <li>
                                <div className="dropdown">
                                <i class="lni lni-user font-user dropdown-menu-style" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link to="/Login" className="dropdown-item">Login</Link>
                                        <Link to="/Register" className="dropdown-item">Register</Link>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar;