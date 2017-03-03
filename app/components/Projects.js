import React from 'react'

class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="projects">
                <div className="row single-project">
                    <div className="col-md-4" id="project-1"></div>
                    <div className="col-md-4" id="project-2"></div>
                    <div className="col-md-4" id="project-3"></div>
                </div>
            </section>
        )
    }
}

export default Projects
