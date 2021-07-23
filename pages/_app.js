import Root from "./@root";
import App from "next/app";
import { Fragment } from 'react';
import Axios from 'axios';

Axios.defaults.baseURL = "";
Axios.defaults.withCredentials = true;

function MyApp( { Component, pageProps } ) {
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
