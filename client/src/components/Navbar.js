import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Identicon from 'identicon.js'
 class Navbar extends Component {
    render(props) {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <Link
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            
            to="#"
          ><i className="fas fa-camera-retro mr-3"></i>
           Tipogram
          </Link>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
    <small className="text-white"><span>{this.props.account}</span></small>
    {this.props.account && <img className="ml-2" width='30' height='30' src={`data:image/png;base64,${new Identicon(this.props.account,30).toString()}`} alt="logo"/> }
    
            </li>
          </ul>
        </nav>
        )
    }
}
export default Navbar