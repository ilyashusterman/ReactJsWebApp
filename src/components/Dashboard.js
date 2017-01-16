
/**
 * Created by ilya on 12/12/2016.
 */
import React from 'react';
import Admin from './Admin';
import Company from './Company';
import Customer from './Customer';

class Dashboard extends React.Component {


    constructor() {
        super();
        this.state = {
            timesPressed: 0
        };
        this.onPressCounter=this.onPressCounter.bind(this);
    }
    onPressCounter(){
        this.setState({
            timesPressed: this.state.timesPressed+1
        });
    }
    renderUser(){
        let user = null;
        switch (this.props.clientType) {
            case 'admin': user = <Admin />; break;
            case 'company': user = <Company />; break;
            case 'customer': user = <Customer />; break;
            default : break;
        }
        return user;
    }
    renderHeader(){
        let header = null;
        switch (this.props.clientType) {
            case 'admin': header =
                <div className="nav navbar-nav">
                <li>
                    <a className="page-scroll" href="#intro">Companies</a>
                </li>
                     <li>
                <a className="page-scroll" href="#about">Customers</a>
                    </li>
                </div>
            ; break;
            case 'company': header =
                <div className="nav navbar-nav" >
                    <li>
                        <a className="page-scroll" href="#intro">Coupons</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">Profile</a>
                    </li>
                </div>
            ; break;
            case 'customer': header =
                <div className="nav navbar-nav" >
                    <li  >
                        <a className="page-scroll" href="#intro">My Coupons</a>
                    </li>
                    <li role="presentation" >
                        <a className="page-scroll" href="#about">View Coupons on Sale</a>
                    </li>
                    <li role="presentation" >
                        <a className="page-scroll" href="#services">Profile</a>
                    </li>
                </div>
            ; break;
            default : break;
        }
        return header;
    }


    render() {
        let user = this.renderUser();
        return (
            <div>

                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand page-scroll" href="#page-top">Start Coupons!</a>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li role="presentation" ><a href="#intro" onClick={this.onPressCounter}>Home <span className="badge">{this.state.timesPressed}</span></a></li>
                                {this.renderHeader()}
                                <li role="presentation"><a onClick={this.props.onLogoutClick}>Logout<span className="badge"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {user}

            </div>
        );
    }

}

export default Dashboard;