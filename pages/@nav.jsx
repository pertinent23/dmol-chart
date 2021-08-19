import { Fragment, useState } from "react";

export function compare( id, main ) {
    return id === main;  
};

export function NavItem( { icon, title, active, href } ) {
    return (
        <a href={ href } className={ "navigation-item d-flex justify-content-center align-items-center mx-md-4 py-2 py-md-0 ".concat( active ? 'active' : '' ) }>
            <i className={ "bi d-block mr-2 bi-".concat( icon ) } ></i>
            <span className="navigation-item-title"> { title } </span>
        </a>
    );
};

export function NavButton( { onClick, children, className } ) {
    return (
        <div className={ "navigation-button d-flex justify-content-center align-items-center ".concat( className ) } onClick={ onClick }>
            { children }
        </div>
    );  
};

export function SearchButton( props ) {
    return (
        <NavButton { ...props } className="navigation-search-button" >
            <i className="bi bi-search"></i>
        </NavButton>
    );
};

export function NavAction( { display, setDisplay } ) {
    return (
        <NavButton className="navigation-action-button flex-column" onClick={ () => (
            setDisplay( display === 'hide' ? 'show' : 'hide' )
        ) } >
            <div className="items item1"></div>
            <div className="items item2"></div>
            <div className="items item3"></div>
        </NavButton>
    );
};

export function Nav( { children } ) {
    const [ display, setDisplay ] = useState( 'hide' );
    return (
        <Fragment>
            <div className="container-fluid sticky navigation d-flex flex-column px-0">
                <div className="w-100 navigation-contents py-2 d-flex d-md-none align-items-center justify-content-between px-2">
                    <SearchButton />
                    <NavAction { ...{ display, setDisplay } } />
                </div>
                <div className={ "container navigation-contents py-0 py-md-2 d-flex align-items-center justify-content-center ".concat( display ) }>
                    <div className="w-100 d-flex flex-column flex-md-row align-items-start justify-content-center navigation-items-container mt-4 mt-md-1">
                        { children }
                    </div>
                    <div className="d-none d-md-flex align-items-center justify-content-center p-0 ml-md-2">
                        <SearchButton />
                    </div>
                </div>
            </div>
        </Fragment>
    );  
};

export default function MainNav( { main } ) {
    return (
        <Nav>
            <NavItem href="/" active={compare(main,'home')} title="accueil" icon="house" />
            <NavItem href="/category" active={compare(main,'category')} title="caterories" icon="columns-gap" />
            <NavItem href="/article" active={compare(main,'articles')} title="articles" icon="receipt" />
            <NavItem href="/sign-in" active={compare(main,'sign-in')} title="connection" icon="terminal" />
        </Nav>
    );
};