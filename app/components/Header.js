import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" id="header-left">
                            <a href=""><i className="fa fa-lastfm"></i></a>
                        </div>
                        <div className="col-md-4" id="header-title">essxiv.</div>

                        <div className="col-md-4">
                            <div className="social-links">
                                <a href="https://www.github.com/essxiv"><i className="fa fa-github"></i></a>
                                <a href="https://www.google.com/"><i className="fa fa-google-plus"></i></a>
                                <a href="https://www.twitter.com/essxiv/"><i className="fa fa-twitter"></i></a>
                                <a href="http://www.linkedin.com/in/sangenyx"><i className="fa fa-linkedin"></i></a>
                                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
