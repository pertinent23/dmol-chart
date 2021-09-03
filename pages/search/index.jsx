import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import { PageHeader } from '../@api';


export const page = 'search';
export default function Category() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/page.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <PageHeader icon="search" title="Recherche" />
                <div className="w-100 content-search-bar d-flex justify-content-center sticky py-3">
                    <div className="search-bar w-100 d-flex align-items-center shadow px-3 mx-2 mx-sm-3">
                        <input autoFocus={ true } type="search" className="d-block py-3 pl-3" name="search" id="search" placeholder="recherche" />
                        <i className="bi bi-arrow-right-circle"></i>
                    </div>
                </div>
                <div className="container-fluid content-search-result d-flex flex-column"></div>
            </div>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {}
    };
};