import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { Container, Menu } from 'semantic-ui-react'

import Home from './Home'
import Modify from './Modify'
import About from './About'
import Footer from './Footer'

class App extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state
        return (
            <Router>
                <Container text>
                        <Menu color='blue' inverted>
                            <Menu.Item>Lukasz Sudol</Menu.Item>
                            <Menu.Item as={Link} position='right' to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} /> 
                            <Menu.Item as={Link} to='/about' name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
                            <Menu.Item as={Link} to='/modify' name='Modify' active={activeItem === 'Modify'} onClick={this.handleItemClick} />  
                        </Menu>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/modify' component={Modify} />
                    <Footer />
                </Container>
            </Router>
           
        )
    }
}

export default App;