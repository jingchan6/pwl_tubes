import React, { Component } from 'react';
import "./css/indexAccess.css";

import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

// membuat sebuah component dengan nama Baca
class Register extends Component {
    render(){
        return (
            <div className="register">
                <div className="row">
                    <div className="col-md-7">
                        <img class="full-img-login" src="https://www.freevector.com/uploads/vector/preview/29602/grocery_shopping-01.jpg"></img>
                    </div>
                    <div className="col-md-5 login-form-all">
                        <h2>Hasil Panen</h2>
                        <p>Daftar diri anda untuk belanja.</p>
                        <form>
                            <div class="form-group">
                                <label><i class="lni lni-user icon-login"></i></label>
                                <input type="text" class="form-controls" placeholder="Nama Lengkap" />
                            </div>
                            <div class="form-group">
                                <label><i class="lni lni-user icon-login"></i></label>
                                <input type="text" class="form-controls" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <label><i class="lni lni-postcard icon-login"></i></label>
                                <input type="email" class="form-controls" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label><i class="lni lni-key icon-login"></i></label>
                                <input type="password" class="form-controls" placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Daftar</button>
                            <div class="left">
                                <br /><br />
                                <small>
                                    Sudah punya akun ? 
                                    <Link to="/Login"> Masuk</Link>
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;