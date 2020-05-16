import React, { Component } from 'react';
import Navbar from "./navbar";
import Banner from "./banner";
import Content from "./content";
import Footer from './footer';


// membuat sebuah component dengan nama Baca
class indexLanding extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Banner />
                    <Content />
                </div>
                <Footer />
            </div>
        )
    }
}

export default indexLanding;