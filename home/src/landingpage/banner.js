import React, { Component } from 'react';
import "./css/IndexLanding.css";

// membuat sebuah component dengan nama Baca
class Banner extends Component {
    render(){
        return (
            <div className="bannerIMG">
                <div className="textBanner">
                Beli Buah-buahan dan sayur yang berkualitas 
                </div>
            </div>
        )
    }
}

export default Banner;