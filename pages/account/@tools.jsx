import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Sticky from './tools/@sticky-note';

export function ToolItem( { name, size, icon, onClick } ) {
    const 
        [ display, setDisplay ] = useState( 'hide-i' ),
        hover = function () {
            setDisplay( display === 'show-i' ? 'hide-i' : 'show-i' );
        };
    return (
        <div className="d-flex flex-row tool-item justify-content-center align-items-center mb-3" onClick={ onClick } onMouseEnter={ hover } onMouseLeave={ hover }>
            <div className="tool-item-icon d-flex justify-content-center align-items-center" style={ { width: size, height: size } }>
                <i className={ "d-block bi bi-".concat( icon ) } style={ { fontSize: size * 0.45 } }></i>
            </div>
            <div className={ "tool-item-name d-flex ".concat( display ) }>
                <span className="pl-1 pr-3"> { name } </span>
            </div>
        </div>
    );
};

export default function Tools() {
    const 
        router = useRouter(),
        [ display, setDisplay ] = useState( 'hide-i' );
    return (
        <Fragment>
            <Sticky state={ display } setState={ setDisplay } />
            <div className="d-flex flex-column position-fixed justify-content-center align-items-end tools">
                <ToolItem name="modifier" icon="columns-gap" size={ 50 } onClick={ () => router.push( '/account/tools/modify' ) } />
                <ToolItem name="stickynote" icon="pencil-square" size={ 40 } onClick={ () => (
                    setDisplay( display === 'show-i' ? 'hide-i' : 'show-i' )
                ) } />
            </div>
        </Fragment>
    );
};