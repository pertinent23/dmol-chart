import Root from "./@root";
import App from "next/app";
import { Fragment } from 'react';
import Axios from 'axios';
import { CookiesProvider } from 'react-cookie';

Axios.defaults.baseURL = "https://solartracking.herokuapp.com/api";
Axios.defaults.urlImg = "https://solartracking.herokuapp.com";
Axios.defaults.withCredentials = false;
//Axios.defaults.headers.post[ 'Access-Control-Allow-Origin' ] = '*';
//Axios.defaults.headers.get[ 'Access-Control-Allow-Origin' ] = '*';

function MyApp( { Component, pageProps } ) {
    return (
        <Fragment>
            <CookiesProvider>
                <Root page={ Component.page }>
                    <Component { ...pageProps } />
                </Root>
            </CookiesProvider>
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
