import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../@nav';


export const page = 'home';
export default function Home () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <Navigation main={ page } />
                <div className="py-3 display-4 d-flex align-items-center container-fluid py-5 my-5 justify-content-center">
                    <i className="bi bi-gear-fill mr-3"></i>
                    In build mode
                </div>
            </div>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {}
    };
};