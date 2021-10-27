import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then((c) => {
            setTimeout(() => {
                setState({
                    data: c,
                    loading: false,
                });
            }, 120);
        });
    }, [category]);

    return state;
};
