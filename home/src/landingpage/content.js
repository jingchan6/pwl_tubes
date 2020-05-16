import React, { Component } from 'react';
import Navbar from "./navbar";
import Banner from "./banner";

// membuat sebuah component dengan nama Baca
class Content extends Component {
    render(){
        return (
            <div className="Content">
                    
                <ul className="menuContent">
                    <li><a href="#">Sayur</a></li>
                    <li><a href="#">Buah</a></li>
                    <li><a href="#">Semua</a></li>
                </ul>

                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title <span className="favorit"><i class="lni lni-heart-filled"></i></span> </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="footer-card"> 
                                    <span>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star yellow"></i>
                                        <span className="banyakRating">(23)</span>
                                    </span> 
                                    <a href="#" class="btn btn-success float-right">Beli <i class="lni lni-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title <span className="favorit"><i class="lni lni-heart-filled"></i></span> </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="footer-card"> 
                                    <span>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star yellow"></i>
                                        <span className="banyakRating">(23)</span>
                                    </span> 
                                    <a href="#" class="btn btn-success float-right">Beli <i class="lni lni-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title <span className="favorit"><i class="lni lni-heart-filled"></i></span> </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="footer-card"> 
                                    <span>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star yellow"></i>
                                        <span className="banyakRating">(23)</span>
                                    </span> 
                                    <a href="#" class="btn btn-success float-right">Beli <i class="lni lni-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title <span className="favorit"><i class="lni lni-heart-filled"></i></span> </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="footer-card"> 
                                    <span>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star yellow"></i>
                                        <span className="banyakRating">(23)</span>
                                    </span> 
                                    <a href="#" class="btn btn-success float-right">Beli <i class="lni lni-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61yXL70-RaL._SL1500_.jpg" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title <span className="favorit"><i class="lni lni-heart-filled"></i></span> </h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="footer-card"> 
                                    <span>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star-filled yellow"></i>
                                        <i class="lni lni-star yellow"></i>
                                        <span className="banyakRating">(23)</span>
                                    </span> 
                                    <a href="#" class="btn btn-success float-right">Beli <i class="lni lni-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Content;