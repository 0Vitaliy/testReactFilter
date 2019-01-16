import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state={
        products:[]
    };


    componentDidMount(){
        fetch('https://demo4070131.mockable.io/product')
            .then(response => response.json())
            .then(data => this.setState({ products:data.products }));
    }
    filterList=(e)=>{
        console.log(e.target.value);
        var filteredList = this.state.products.filter(function(item){
            return item.name.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
        this.setState({products: filteredList});
    }
  render() {
        const {products}=this.state;
        console.log(this.state.products);
    return (
        <div>
          <input placeholder='Source' onChange={(e)=>this.filterList(e)}/>
          <div className="products_block" >

              {products.map((products,index) =>
                  <div className="products" key={index}>
                      <h2>{products.name}</h2>
                      <img src={products.img}/>
                      <span>{products.price}</span>

                  </div>
              )}

          </div>
        </div>
  )
  }
}

export default App;
