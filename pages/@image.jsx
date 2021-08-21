import { useState } from "react";

export default function Image( props ) {
    const 
        [ load, setLoad ] = useState( false ),
        img = ( <img { ...props } onLoad={ () => {
            return setLoad( true )
        } } /> ),
        container = ( 
            <dicv className="image-container img"> {
                <div className="d-none"> { img } </div>
            } </dicv> 
        );
    return load ? img : container;  
};