import Root from "./@root";
import { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import { CookiesProvider } from 'react-cookie';
import Loader from './@loader';
import { useRouter } from 'next/router';

Axios.defaults.baseURL = "https://solartracking.herokuapp.com/api";
Axios.defaults.urlImg = "https://solartracking.herokuapp.com";
Axios.defaults.withCredentials = false;

function MyApp( { Component, pageProps } ) {
    const 
        router = useRouter(),
        [ display, setDisplay ] = useState( 'none' ),
        [ content, setContent ] = useState(
            <Fragment>
                <CookiesProvider>
                    <Root page={ Component.page }>
                        <Component { ...pageProps } />
                    </Root>
                </CookiesProvider>
            </Fragment>
        );
        useEffect( () => {
            setDisplay( 'block' );
            router.events.on( "routeChangeStart", () => setContent(
                <Loader display="none" />
            ) );
        }, [ display ] );
    return (
        <Loader { ...{ display } }>
            { content }
        </Loader>
    );
};

export default MyApp;
