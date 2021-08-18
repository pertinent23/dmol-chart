import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import Navigation from './@nav';

export const page = 'home';
export default function Home () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
            </Head>
            <div className="w-100 content-page d-flex flex-column">
                <div className="container-fluid header d-flex justify-content-center align-items-center">
                    <div className="d-flex header-icon justify-content-center align-items-center my-5">
                        <Image src="/img/other/africa.svg" layout="fill" />
                    </div>
                    <div className="d-block header-title ml-3"> E-TECH  </div>
                </div>
                <Navigation main={ page } />
                <div className="w-100 content-parts">
                    <div className="w-100 part first-part d-flex justify-content-center align-items-center bg-danger">
                        <div className="part-image d-flex justify-content-center align-items-center">
                            <img src="/img/other/img3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};