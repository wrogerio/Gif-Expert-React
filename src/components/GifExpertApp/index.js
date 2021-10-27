import React from "react";
import { useState } from "react";
import { AddCategory } from "../AddCategory/index";
import { GifGrid } from "../GifGrid";

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory addCategFunc={setCategories} />

            <hr />

            {categories.map((category, i) => (
                <GifGrid key={i} category={category} />
            ))}
        </div>
    );
};

export default GifExpertApp;
