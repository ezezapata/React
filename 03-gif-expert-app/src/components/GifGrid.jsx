import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const [ images, setImages ] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
    }

    useEffect( () => {
        getImages();
    }, [] );
    // Nunca NUNCA hay que poner la ejecución de una función en un functional component
    // getGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { images.map( img => (
                    // <li key={ img.id }>{ img.title }</li>
                    <GifItem  
                        key={ img.id }  
                        { ...img } />
                    ))
                }
            </div>
        </>
    );

}
