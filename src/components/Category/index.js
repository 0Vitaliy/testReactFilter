import React, {Component} from 'react'
import {Col, Grid, Image, Row} from "react-bootstrap";


import fetchProductsData from "../../api/category";

class Category extends Component{
    state={
        category:[],
        filteredList:[],
    };
    componentWillReceiveProps(nextProps){
        const catg= nextProps.match.path.split('').slice(1).join('');
        console.log(catg);
        fetchProductsData(catg)
            .then(res=>{
                this.setState({category:res.results,filteredList:res.results });
                console.log(res.results);

            })
    }
    componentDidMount(){

        fetchProductsData()
            .then(res=>{
                this.setState({category:res.results,filteredList:res.results})
                console.log(res.results);

            })
    }
    filterList=e=>{
        var filteredList = this.state.category.filter(function(item){

            return item.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        this.setState({filteredList: filteredList});
    }
    render(){

        console.log(this.props);
        const {filteredList}=this.state
        return(
            <div>
                <input placeholder='Source' onChange={(e)=>this.filterList(e)}/>
                <Grid>
                    <Row className="show-grid">
                        {filteredList.map((results,index) =>
                            <Col xs={9} md={4} key={index}>
                                <h2 >{results.title.split(' ', 4).join(' ')}</h2>
                                <Image   src={results.social_image} rounded responsive />
                                <span>Category:{results.category}</span>

                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        )
    }
}


export default Category