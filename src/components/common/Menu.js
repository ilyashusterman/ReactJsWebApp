/**
 * Created by ilya on 14/12/2016.
 */
import React from 'react';

class Menu extends React.Component {


    /**
     *
     * @returns {XML}
     */
    render() {
        return (
            <div >
                <section id="intro" className="intro-section">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                {this.props.dataOne}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                {this.props.dataTwo}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Services Section</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Contact Section</h1>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }

}

export default Menu;