import React from 'react'
import product_1 from './../assets/images/product_1.png'
import product_2 from './../assets/images/product_2.png'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                Products
            </h2>
            <div className="align_">
                <div className="row">                    
                        <div className="col-md-6">
                                <div className="card">
                                    <h3>ExAir Tower with air quality sensor</h3>                                    
                                        <div className="card__body">
                                            <img src={product_1}/>
                                            <div className="card">
                                                <div className="features">
                                                    <h3>
                                                        Features :
                                                    </h3>
                                                    <br/>
                                                    <h4> 
                                                        This model will consist of ,  Air quality sensor , Ionization airpurifier. <br/><br/>It'll cover the distance of 5-10 meter radius.
                                                        <br/><br/>Also able to monitor the readings as well.
                                                    </h4>
                                                </div>
                                                    <div className="card__footer">
                                                        <Link to='/'>Readmore</Link>
                                                    </div>
                                            </div>
                                            <div className="card_prize">
                                                
                                                  <h2>Price ~ Rs 50000 </h2>
                                                
                                            </div>
                                        </div>
                                </div>
                        </div>
                        <div className="col-md-6">
                                <div className="card">
                                    <h3>ExAir Tower without air quality sensor</h3>                                    
                                        <div className="card__body">
                                            <img src={product_2}/>
                                            <div className="card">
                                                <div className="features">
                                                    <h3>
                                                        Features :
                                                    </h3>
                                                    <br/>
                                                    <h4> 
                                                        This model will consist of Ionization airpurifier. <br/><br/>It'll cover the distance of 5-10 meter radius.
                                                        <br/><br/>Also able to monitor the readings as well.
                                                    </h4>
                                                </div>
                                                    <div className="card__footer">
                                                        <Link to='/'>Readmore</Link>
                                                    </div>
                                            </div>
                                            <div className="card_prize">
                                                
                                                  <h2>Price ~ Rs 35300 </h2>
                                                
                                            </div>
                                        </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Products
