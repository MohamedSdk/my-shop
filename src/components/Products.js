import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
class Products extends Component {
    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 3 
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 
            }
        };
        return (
            <div className='products'>
                <div className='container'>
                    <div className='products__header'>
                        <h3 className="products__header-title">
                            <b>Productos Destacados</b>
                        </h3>
                        <nav className="products__header-breadcrumb" aria-label="breadcrumb d-inline-block text-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Todos los productos</li>
                                <li className="breadcrumb-item">Cocina</li>
                                <li className="breadcrumb-item">Productos Destacados</li>
                            </ol>
                        </nav>
                    </div>
                    {this.props.loading ? (
                        "loading..."
                    ) : (
                        <div>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                partialVisible={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px">
                                {this.props.products.map((product, index) => {
                                    return (
                                        <div className="card" key={index}>
                                            <img className="" src={product.image} alt={product.title}></img>
                                            <div className="card-body">
                                                <p className="card-title">{product.title} </p>
                                                <h5 className="card-text">{product.price} €</h5>
                                                <Button className="btn btn-primary" onClick={() => this.props.onHandleAddToCart(product)}>Add to cart</Button>
                                            </div>
                                        </div>

                                    );
                                })}
                            </Carousel>
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default Products;