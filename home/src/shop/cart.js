import React, { Component } from 'react';
import "./IndexShop.css";
import Navbar from '../landingpage/navbar';

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

// membuat sebuah component dengan nama Baca
class Cart extends Component {
    render(){
        return (
            <div className="Cart">
                <Navbar />
                <br /><br />

                <div className="container">
                    <h4>Keranjang Belanja</h4>
                    <hr></hr>

                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                            <div class="col-md-1" >
                            <form className="form-checkbox">
                                <input type="checkbox" className="checkbox-cart" />
                            </form>
                            </div>
                            <div class="col-md-11">
                                <div className="row">
                                    <div class="col-md-3">
                                        <img class="img-item"src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg"></img>
                                    </div>

                                    <div class="col-md-3 dataCart">
                                    <h6>Kentang Kentangan</h6>
                                    <p class="card-text">dirawat oleh petani berwaja kentang.</p>
                                    <h5>Rp.2.000</h5>
                                    </div>

                                    <div class="col-md-3 dataCart">
                                        <form>
                                            <input type="submit" class="btnSubmit" value="-" />
                                            <input type="text" value="1" className="txtCart" />
                                            <input type="submit" value="+" className="btnSubmit" />
                                        </form>
                                    </div>
                                    
                                    <div class="col-md-3 hapus">
                                    <h7>Hapus</h7>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                        <div class="card-body">
                            <div class="row">
                            <div class="col-md-1" >
                            <form className="form-checkbox">
                                <input type="checkbox" className="checkbox-cart" />
                            </form>
                            </div>
                            <div class="col-md-11">
                                <div className="row">
                                    <div class="col-md-3">
                                        <img class="img-item"src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg"></img>
                                    </div>

                                    <div class="col-md-3 dataCart">
                                    <h6>Kentang Kentangan</h6>
                                    <p class="card-text">dirawat oleh petani berwaja kentang.</p>
                                    <h5>Rp.2.000</h5>
                                    </div>

                                    <div class="col-md-3 dataCart">
                                        <form>
                                            <input type="submit" class="btnSubmit" value="-" />
                                            <input type="text" value="1" className="txtCart" />
                                            <input type="submit" value="+" className="btnSubmit" />
                                        </form>
                                    </div>
                                    
                                    <div class="col-md-3 hapus">
                                    <h7>Hapus</h7>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="row">
                    <div class="col-md-6 checkbox-cart">
                        <form className="span-chc">
                            <input type="checkbox" className="checkbox-cart-all"/> <span>Pilih Semua</span>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <p>Subtotal Produk :</p>
                            </div>
                            <div className="col-md-4">
                                <h2>Rp.2.000</h2>
                            </div>
                            <div className="col-md-4">
                                <form>
                                    <input type="submit" class="btnBayar" value="Bayar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
        )
    }
}

export default Cart;