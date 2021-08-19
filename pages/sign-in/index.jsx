import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import FacebookLogin from 'react-facebook-login';

const ContentData = {};
const page = "sing-in";

const responseFacebook = (response) => {
    console.log(response);
}

const componentClicked = () => {
    console.log ('ood')
}

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/form.css" />
            </Head>
            <div className="container-fluid content-form d-flex px-0">
                <div className="row container-fluid mx-0 px-0">
                    <div className="col-0 col-md-6 px-0 d-none overlfow-hidden d-md-flex justify-content-center align-items-center">
                        <img src="/img/form/form1.jpg" alt="img" className="img-responsive form-img" />
                    </div>
                    <div className="col-12 col-md-6 d-flex px-0">
                        <div className="form container-fluid d-flex px-0">
                            <div className="form-head h-100 d-flex justify-content-center align-items-center">
                                <img src="/img/form/form3.jpg" alt="img" className="img-responsive form-img" />
                            </div>
                            <div className="form-body d-flex position-absolute">
                                <FacebookLogin
                                    appId="522395098976902"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default function Index() {
    return (
        <Fragment>
            <AddData />
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: { }
        }
    };
};