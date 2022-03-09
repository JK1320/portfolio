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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas voluptates dolore distinctio praesentium magnam nobis! Amet repellat accusamus numquam sed. Quod iste impedit velit quasi nam eius perferendis aliquam!
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
