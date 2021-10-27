import React from "react";
import { useFechGifs } from "../../hooks/useFechGifs";
import { GifGridItem } from "../GifGridItem/index";
import "./index.css";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFechGifs(category);

    return (
        <div>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                {images.map((img) => {
                    return <GifGridItem key={img.id} {...img} />;
                })}
            </div>
        </div>
    );
};
