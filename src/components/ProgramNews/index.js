import React, {Component} from 'react'
import {Col, Grid, Image, Row} from "react-bootstrap";


import fetchProductsData from "../../api/category";

class ProgramNews extends Component{
    state={
        category:[]
    };
    componentDidMount(){
        fetchProductsData('programming')
            .then(res=>{
                this.setState({category:res.results })

            })
    }
    render(){
        const {category}=this.state
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        {category.map((results,index) =>
                            <Col xs={9} md={4} key={index}>
                                <h2 >{results.title.split(' ', 4).join(' ')}</h2>
                                <Image   src={results.social_image} rounded responsive />
                                <span>Price:{results.category}</span>

                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        )
    }
}


export default ProgramNews