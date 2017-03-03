import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="Navbar">
                <div id="header-img">
                    <div className="cd-headline rotate-1">
                        <div className="title">
                            <h2>My Name Is Greg And I,</h2>
                        </div>
                        <div className="cd-words-wrapper">
                            <b className="is-visible">Create Full-Stack Web Applications.</b>
                            <b>Breathe JavaScript.</b>
                            <b>Design Enterprise Schemas.</b>
                            <b>Like Coffee.</b>
                            <b>Love Problem Solving.</b>
                            <b>Build Algorithms.</b>
                            <b>Talk Computer Science.</b>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Navbar
