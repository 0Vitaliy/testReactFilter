import React, { Component } from 'react';


import fetchProductsData from './api/products'
import './App.css';
import { Image,Row,Col,Grid,Nav,NavItem,PageHeader} from 'react-bootstrap'

class App extends Component {
    state={
        products:[],
        filteredList:[],
        category:[]
    };


    componentDidMount(){
        this.fetchCategry();
        fetchProductsData()
            .then(data => this.setState({ products:data.products ,filteredList:data.products}));
    }
     fetchCategry=(categ='')=>{
      fetch('https://codeguida.com/api/v1/posts/?category='+categ)
          .then(res=>{
              return res.json()
          })
          .then(res=>{
              this.setState({category:res.results })
              console.log(res)
          })
}
    filterList=e=>{
        console.log(e.target.value);
        var filteredList = this.state.products.filter(function(item){
            return item.name.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        this.setState({filteredList: filteredList});
    }
  render() {
        const {filteredList,category}=this.state;
        console.log(this.state.filteredList);
      console.log(category);


    return (
        <div>
            <input placeholder='Source' onChange={(e)=>this.filterList(e)}/>
            <div className='flex_block'>
                <Nav bsStyle="pills" stacked  >
                    <NavItem eventKey={1}  onClick={()=>this.fetchCategry()}>
                        Home & Kitchen
                    </NavItem>
                    <NavItem eventKey={2} onClick={()=>this.fetchCategry('it_news')} >
                        Sports & Outdoors
                    </NavItem>
                    <NavItem eventKey={3} onClick={()=>this.fetchCategry('programming')}>
                        Health & Personal Care
                    </NavItem>
                    <NavItem eventKey={4} onClick={()=>this.fetchCategry('it_news')} >
                        Baby Products
                    </NavItem>
                </Nav>
                {/*<nav >*/}
                    {/*<a href="#" onClick={()=>this.fetchCategry('programming')}>Home & Kitchen</a>*/}
                    {/*<a href="#" onClick={()=>this.fetchCategry('it_news')}>Sports & Outdoors</a>*/}
                    {/*<a href="#">Health & Personal Care</a>*/}
                    {/*<a href="#">Baby Products</a>*/}
                {/*</nav>*/}
              <div className="products_block" >
                  <Grid>
                      <Row className="show-grid">
                          {category.map((results,index) =>
                              <Col xs={9} md={4} key={index}>

                                  <span>Price:{results.category}</span>

                              </Col>
                          )}
                      </Row>
                  </Grid>
                  <Grid>
                      <Row className="show-grid">
                      {filteredList.map((products,index) =>
                          <Col xs={9} md={4} key={index}>
                              <h2 bsClass='hed'>{products.name.split(' ', 4).join(' ')}</h2>
                              <Image   src={products.img} rounded responsive />
                              <span>Price:{products.price}</span>

                          </Col>
                      )}
                      </Row>
                  </Grid>
              </div>

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
