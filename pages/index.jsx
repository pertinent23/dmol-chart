import Head from 'next/head';
import { Fragment } from 'react';

export function ColorItem( { rgb, hex } ) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 color-item py-3 d-flex justify-content-center">
            <div className="d-flex flex-column color-item-container px-3 py-3">
                <div className="eppillon w-100 mt-1 border" style={{ backgroundColor: hex }}></div>
                <div className="colors-desc d-flex flex-column mt-5 text-center">
                    <span className="py-1"> { rgb || 'rgb(255, 35, 05)' } </span>
                    <span className="py-1"> { hex || '#FF00FF' } </span>
                </div>
            </div>
        </div>
    );
};

export function Typographyitem( { font, Tag, name, size = '1.3em' } ) {
    const data = ( Tag &&  <Tag className="typo-main" /> );
    return (
        <div className="w-100 d-flex align-items-center typography-item py-3">
            { data || <div className="typography-item-data typo-main" style={{ fontFamily: font, fontSize: size }}> { name || 'Simple text' } </div> }
            <span className="content-font ml-3" style={{ fontFamily: font, fontSize: size }}> { font } </span>
        </div>
    );  
};

export function LogoItem( { url, name } ) {
    return (
        <div className="col-12 col-sm-6 col-md-4 logo-item d-flex flex-column flex-item align-items-center justify-content-center py-3">
            <img src={ "/img/".concat( url ) } alt={ url } className="img img-fluid img-thumbnail" />
            <span className="py-3 logo-item-title"> { name || '' } </span>
        </div>
    );  
};

export default function GraphicChart () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
                <title> Charte graphique </title>
            </Head>
            <div className="w-100 py-3 d-flex flex-column">
                <div className="w-100 bg-white py-3 py-sm-4 py-md-5 d-flex flex-column flex-md-row justify-content-center header align-items-center">
                    <img src="/img/logo.small.png" alt="logo" className="img" />
                    <span className="header-text text-center"> Charte Graphique </span>
                </div>
                <div className="w-100 d-flex flex-column py-4 content-page">
                    <div className="container d-flex flex-column">
                        <div className="w-100 container-head d-flex flex-column py-3">
                            <span className="container-title"> Background color: </span>
                            <span className="bar w-100 d-block mt-3"></span>
                        </div>
                        <div className="w-100 container-body d-flex align-items-center">
                            <div className="row mx-0 px-0 w-100">
                                <ColorItem  hex="#000000" rgb="rgb(0,0,0)"/>
                                <ColorItem  hex="#3D0000" rgb="rgb(61, 0, 0)"/>
                                <ColorItem  hex="#950101" rgb="rgb(149, 1, 1)"/>
                                <ColorItem  hex="#FF0000" rgb="rgb(255, 0, 0)"/>
                                <ColorItem  hex="#FF1122" rgb="rgb(255, 17, 34)"/>
                                <ColorItem  hex="#F5F5F5" rgb="rgb(245, 245, 245)"/>
                                <ColorItem  hex="#FFFFFF" rgb="rgb(255, 255, 255)"/>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex flex-column">
                        <div className="w-100 container-head d-flex flex-column py-3">
                            <span className="container-title"> Text color: </span>
                            <span className="bar w-100 d-block mt-3"></span>
                        </div>
                        <div className="w-100 container-body d-flex align-items-center">
                            <div className="row mx-0 px-0 w-100">
                                <ColorItem  hex="#000000" rgb="rgb(0,0,0)"/>
                                <ColorItem  hex="#3D0000" rgb="rgb(61, 0, 0)"/>
                                <ColorItem  hex="#FF1122" rgb="rgb(255, 17, 34)"/>
                                <ColorItem  hex="#333333" rgb="rgb(51, 51, 51)"/>
                                <ColorItem  hex="#666666" rgb="rgb(102, 102, 102)"/>
                                <ColorItem  hex="#DDDDDD" rgb="rgb(221, 221, 221)"/>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex flex-column">
                        <div className="w-100 container-head d-flex flex-column py-3">
                            <span className="container-title"> Typography: </span>
                            <span className="bar w-100 d-block mt-3"></span>
                        </div>
                        <div className="w-100 container-body d-flex align-items-center flex-column">
                            <Typographyitem Tag={ props => <h1 { ...props}> Title H1 </h1>} font="plento" size="1.8em" />
                            <Typographyitem Tag={ props => <h2 { ...props}> Title H2 </h2>} font="plento" size="1.6em" />
                            <Typographyitem Tag={ props => <h3 { ...props}> Title H3 </h3>} font="ZEN" size="1.5em" />
                            <Typographyitem Tag={ props => <h4 { ...props}> Title H4 </h4>} font="ZEN" size="1.4em" />
                            <Typographyitem Tag={ props => <h5 { ...props}> Title H5 </h5>} font="dream" size="1.3em" />
                            <Typographyitem Tag={ props => <h6 { ...props}> Title H6 </h6>} font="juice" size="1.2em" />
                            <Typographyitem font="aaargh" size="1.2em" />
                        </div>
                    </div>
                    <div className="container d-flex flex-column">
                        <div className="w-100 container-head d-flex flex-column py-3">
                            <span className="container-title"> Logo: </span>
                            <span className="bar w-100 d-block mt-3"></span>
                        </div>
                        <div className="w-100 container-body d-flex align-items-center flex-column">
                            <div className="row mx-0 px-0 w-100">
                                <LogoItem url="logo.png" name="Logo" />
                                <LogoItem url="logo.small.png" name="Logo small" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 bg-white py-5 d-flex flex-column flex-md-row justify-content-center header align-items-center">
                    <span className="header-text text-center"> Dossier Medical en Ligne </span>
                </div>
            </div>
        </Fragment>
    );
};