import React from 'react'

class Request extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="request">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div id="request-img"></div>
                            <div className="request-description">Experienced Software Engineer focusing on full-stack engineering. Mainly developing in JavaScript, with a front-end focus. Knowledge of Computer Science design, best practices, and algorithms. Problem solver. Likes an agile environment with like-minded developers. Open to full-time, contract, and freelance opportunities.</div>
                        </div>
                        <div className="col-sm-4">
                            <h3 className="form-title">Want to Collaborate?</h3>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" type="text" placeholder="Message" rows="7"/>
                            </div>
                            <button type="submit" className="btn btn-lg ">Request</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Request
