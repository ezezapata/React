import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [] );
    // Nunca NUNCA hay que poner la ejecución de una función en un functional component
    // getGifs( category );


    return {
        images,
        isLoading
    }

}