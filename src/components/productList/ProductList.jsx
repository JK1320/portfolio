import React from 'react';
import "./productList.css";
import Product from "../product/Product";
import {projects} from "../../data";

console.log(projects)
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire</h1>
                <p className="pl-desc">
                    These are the projects I have created for personal learning.
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
    ))}  
            </div>
        </div>
    )
}

export default ProductList;
