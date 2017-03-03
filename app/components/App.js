import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Projects from './Projects'
import Requests from './Request'
import Maps from './GoogleMaps/Container'

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Header/>
                <Navbar/>
                <Projects/>
                    {this.props.children}
                <Maps/>
                <Requests/>
                <Footer/>
            </div>
        )
    }
}

export default App
