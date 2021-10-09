import Root from "./@root";
import { Fragment } from 'react';
import Axios from 'axios';
import { CookiesProvider } from 'react-cookie';

Axios.defaults.baseURL = "";
Axios.defaults.withCredentials = false;

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
export default MyApp;
