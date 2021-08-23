import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './@nav';


export const page = 'home';
export default function Home () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <Navigation main={ page } />
            </div>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {}
    };
};