import Root from "./@root";
import App from "next/app";
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';

Axios.defaults.baseURL = "";
Axios.defaults.withCredentials = true;

function MyApp( { Component, pageProps } ) {
    const 
        route = useRouter(),
        event = 'routeChangeComplete',
        handle = () => (
            window.location.reload()
        );
            useEffect( function () {
                route.events.on( event, handle );
                return function () {
                    return route.events.off( event, handle );
                };
            } );
    return (
        <Fragment>
            <Root page={ Component.page }>
                <Component { ...pageProps } />
            </Root>
        </Fragment>
    );
};

MyApp.getInitialProps = async ( appContext ) => {
    const
        appProps = await App.getInitialProps( appContext );
    return {
        ...appProps
    };
};

export default MyApp;
