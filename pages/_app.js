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
        event = 'routeChangeStart',
        [ display, setDisplay ] = useState( 'none' ),
        handle = () => setDisplay( 'none' );
        useEffect( () => {
            setDisplay( 'block' );
            router.events.on( event, handle );
            return function () {
                return router.events.off( event, handle );
            };
        }, [ display ] );
    return (
        <Loader { ...{ display } }>
            <Fragment>
                <CookiesProvider>
                    <Root page={ Component.page }>
                        <Component { ...pageProps } />
                    </Root>
                </CookiesProvider>
            </Fragment>
        </Loader>
    );
};

export default MyApp;
