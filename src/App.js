import React, { Component } from 'react';


import './App.css';
import { Nav,NavItem} from 'react-bootstrap'
import { Switch, Route,Link } from 'react-router-dom'
import  Category from './components/ItNews/index'


class App extends Component {
//     state={
//         products:[],
//         filteredList:[],
//         category:[]
//     };
//
//
//     componentDidMount(){
//         this.fetchCategry();
//         fetchProductsData()
//             .then(data => this.setState({ products:data.products ,filteredList:data.products}));
//     }
//      fetchCategry=(categ='')=>{
//       fetch('https://codeguida.com/api/v1/posts/?category='+categ)
//           .then(res=>{
//               return res.json()
//           })
//           .then(res=>{
//               this.setState({category:res.results })
//               console.log(res)
//           })
// }
//     filterList=e=>{
//         console.log(e.target.value);
//         var filteredList = this.state.category.filter(function(item){
//
//             return item.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
//         });
//         this.setState({category: filteredList});
//     }
  render() {

      //   const {filteredList,category}=this.state;
      //   console.log(this.state.filteredList);
      // console.log(category);


    return (
        <div>
            {/*<input placeholder='Source' onChange={(e)=>this.filterList(e)}/>*/}
            <div className='flex_block'>
                <Nav bsStyle="pills" stacked  >
                    <NavItem eventKey={1} >
                            <Link to="/it_news" >ItNews</Link>
                    </NavItem>
                    <NavItem eventKey={2} >
                        <Link to="/programming" >ProgramNews</Link>
                    </NavItem>

                </Nav>

                <Switch>

                    <Route path="/it_news" component={Category} />
                    <Route path='/programming' component= {Category} />
                </Switch>
              {/*<div className="products_block" >*/}
                  {/*<Grid>*/}
                      {/*<Row className="show-grid">*/}
                          {/*{category.map((results,index) =>*/}
                              {/*<Col xs={9} md={4} key={index}>*/}
                                  {/*<h2 >{results.title.split(' ', 4).join(' ')}</h2>*/}
                                  {/*<Image   src={results.social_image} rounded responsive />*/}
                                  {/*<span>Price:{results.category}</span>*/}

                              {/*</Col>*/}
                          {/*)}*/}
                      {/*</Row>*/}
                  {/*</Grid>*/}
                  {/*<Grid>*/}
                      {/*<Row className="show-grid">*/}
                      {/*{filteredList.map((products,index) =>*/}
                          {/*<Col xs={9} md={4} key={index}>*/}
                              {/*<h2 bsClass='hed'>{products.name.split(' ', 4).join(' ')}</h2>*/}
                              {/*<Image   src={products.img} rounded responsive />*/}
                              {/*<span>Price:{products.price}</span>*/}

                          {/*</Col>*/}
                      {/*)}*/}
                      {/*</Row>*/}
                  {/*</Grid>*/}
              {/*</div>*/}

            </div>

            {/*<Grid>*/}
                {/*<Row className="show-grid">*/}
                    {/*{category.map((results,index) =>*/}
                        {/*<Col xs={9} md={4} key={index}>*/}

                            {/*<span>Price:{results.category}</span>*/}

                        {/*</Col>*/}
                    {/*)}*/}
                {/*</Row>*/}
            {/*</Grid>*/}
        </div>
  )
  }
}

export default App;
