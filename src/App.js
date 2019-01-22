import React, { Component } from 'react';


import './App.css';
import { Nav,NavItem} from 'react-bootstrap'
import { Switch, Route,Link } from 'react-router-dom'
import  Category from './components/Category/index'


class App extends Component {

  render() {
      return (
        <div>

            <div className='flex_block'>
                <Nav bsStyle="pills" stacked >
                    <NavItem eventKey={1}  >
                            <Link to="/it_news" >ItNews</Link>
                    </NavItem>
                    <NavItem eventKey={2}  >
                        <Link to="/programming" >ProgramNews</Link>
                    </NavItem>

                </Nav>

                <Switch>
                    <Route path="/" exact  component={Category} />
                    <Route path="/it_news" component={Category} />
                    <Route path='/programming' component= {Category} />
                </Switch>

            </div>
        </div>
  )
  }
}

export default App;
