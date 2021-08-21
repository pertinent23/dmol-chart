import Root from "./@root";
import { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import { CookiesProvider } from 'react-cookie';
import Loader from './@loader';

Axios.defaults.baseURL = "https://solartracking.herokuapp.com/api";
Axios.defaults.urlImg = "https://solartracking.herokuapp.com";
Axios.defaults.withCredentials = false;

function MyApp( { Component, pageProps } ) {
    const 
        [ display, setDisplay ] = useState( 'none' ),
        content = (
            <Fragment>
                <CookiesProvider>
                    <Root page={ Component.page }>
                        <Component { ...pageProps } />
                    </Root>
                </CookiesProvider>
            </Fragment>
        );
            useEffect( () => (
                setDisplay( 'block' )
            ) );
    return (
        <Loader { ...{ display } }>
            { content }
        </Loader>
    );
};

export default MyApp;
