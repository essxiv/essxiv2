import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullStackTags: ['node.js', 'react.js', 'angular,js', 'express.js', 'hapi.js', 'underscore.js', 'mongoose.js', 'mocha.js', 'chai.js', 'mongodb', 'sql', 'sequelize', 'babel', 'webpack', 'html', 'css'],
            computerScienceTags: ['npm', 'bower', 'homebrew', 'object oriented', 'functional', 'schema design', 'algorithms', 'data structures', 'time complexity', 'space complexity', 'memory', 'disk', 'ajax', 'json', 'agile', 'aws', 'cms', 'ui', 'ux', 'git']
        }
    }

    render() {
        return (
            <footer>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-5" id="footer-left">
                            <h3><strong>information</strong> & <strong>inspiration</strong></h3>

                            <p>Powered by <strong>Node</strong>.js, <strong>MongoDB</strong> and <strong>React</strong>.</p>

                            <p>© 2017 Built and Maintained By Gregory Hasenauer.</p>
                        </div>
                        <div className="col-md-7">
                            <div className="footer-tags">
                                <div id="computer-science-tags">{this.state.computerScienceTags}</div>
                                <div id="full-stack-tags">{this.state.fullStackTags}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
