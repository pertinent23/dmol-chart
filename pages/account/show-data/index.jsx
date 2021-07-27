import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from '../@account-root';
import getUserData from './../@request';

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/private/account.data.css" />
            </Head>
            <div className="container-fluid py-3">
                <div className="container table-item py-3 d-flex flex-column align-items-center justify-content-center mb-3 shadow">
                    <div className="table-item-title d-block py-3 pl-3 w-100"> 20/05/2016 </div>
                    <div className="container d-block">
                        <div className="row p-0 m-0">
                            <div className="col col-4 d-flex flex-column align-items-center px-2 pt-1">
                                <div className="col-title container text-center py-2"> Données </div>
                                <div className="col-items-container d-flex flex-column align-items-center pt-3">
                                    <div className="col-items mb-2"> 11.5 </div>
                                    <div className="col-items mb-2"> 11.5 </div>
                                    <div className="col-items mb-2"> 11.5 </div>
                                </div>
                            </div>
                            <div className="col col-4 d-flex flex-column align-items-center px-2 pt-1">
                                <div className="col-title container text-center py-2"> Noeud </div>
                                <div className="col-items-container d-flex flex-column align-items-center pt-3">
                                    <div className="col-items mb-2"> temperature </div>
                                    <div className="col-items mb-2"> temperature </div>
                                    <div className="col-items mb-2"> temperature </div>
                                </div>
                            </div>
                            <div className="col col-4 d-flex flex-column align-items-center px-2 pt-1">
                                <div className="col-title container text-center py-2"> Date </div>
                                <div className="col-items-container d-flex flex-column align-items-center pt-3">
                                    <div className="col-items mb-2"> 15/06/2015 </div>
                                    <div className="col-items mb-2"> 15/06/2015 </div>
                                    <div className="col-items mb-2"> 15/06/2015 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const page = "show-data";
export default function Index( { user }) {
    return (
        <Fragment>
            <PageRoot page={ page } userdata={ user }>
                <AddData />
            </PageRoot>
        </Fragment>
    );
};

export async function getServerSideProps() {
    const user = await getUserData();
    return {
        props: {
            user
        }
    };
};