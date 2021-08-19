import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import TwitterLogin from "react-twitter-login";
import { keys } from '../@keys';

const ContentData = {};
const page = "sing-in";

const responseFacebook = ( response ) => {
    console.log( response );
};

const responseGoogle = ( response ) => {
    console.log( response );
};

const responseTwitter = ( err, data ) => {
    console.log( err, data );
};

function Input( { placeholder, name, icon, type } ) {
    return (
        <div className="field container-fluid d-flex justify-content-center py-3">
            <i className={ "mr-3 bi bi-".concat( icon ) }></i>
            <input { ...{ placeholder, name, type } } className="pl-3" />
        </div>
    );
};

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/form.css" />
            </Head>
            <div className="container-fluid content-form d-flex px-0">
                <div className="row container-fluid mx-0 px-0">
                    <div className="col-0 col-md-6 px-0 d-none overlfow-hidden d-md-flex justify-content-center align-items-center">
                        <img src="/img/form/form6.jpg" alt="img" className="img-responsive form-img" />
                    </div>
                    <div className="col-12 col-md-6 d-flex px-0">
                        <div className="form container-fluid d-flex px-0">
                            <div className="form-head h-100 d-flex justify-content-center align-items-center">
                                <img src="/img/form/form3.jpg" alt="img" className="img-responsive form-img" />
                            </div>
                            <div className="form-body d-block flex-column position-absolute overflow-auto container-fluid py-4">
                                <div className="container-fluid d-flex">
                                    <div className="content-icon">
                                        <img src="/img/other/africa.svg" alt="icon" className="img-responsive" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center pl-3">
                                        <div className="form-title py-1"> Inscription </div>
                                        <div className="form-description py-1"> { "s'inscrire sur e-tech" } </div>
                                    </div>
                                </div>
                                <div className="container content-extends d-flex flex-column py-5">
                                    <div className="line d-flex align-items-center justify-content-center py-3">
                                        <div className="log-item d-flex justify-content-center align-items-center">
                                            <TwitterLogin
                                                authCallback={ responseTwitter }
                                                consumerKey={ keys.TWITTER_PUPLIC }
                                                consumerSecret={ keys.TWITTER_SECRET }
                                            >
                                                <div className="d-flex justify-content-center align-items-center twitter py-2 px-4">
                                                    <i className="bi bi-twitter mr-2"></i>
                                                    Utiliser twitter
                                                </div>
                                            </TwitterLogin>
                                        </div>
                                    </div>
                                    <div className="line d-flex align-items-center justify-content-center py-3">
                                        <div className="d-flex px-2">
                                            <div className="log-item">
                                                <FacebookLogin
                                                    appId={ keys.FACEBOOK }
                                                    fields="name,email,picture"
                                                    callback={ responseFacebook } 
                                                    icon={ <i className="bi bi-facebook mr-2"></i> }
                                                    textButton="Utiliser facebook"
                                                    cssClass="d-flex justify-content-center align-items-center facebook py-2 px-3 px-sm-4"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex px-2">
                                            <div className="log-item">
                                                <GoogleLogin
                                                    clientId={ keys.GOOGLE }
                                                    render={ props => (
                                                        <div { ...props } className="d-flex justify-content-center align-items-center google py-2 px-3 px-sm-4">
                                                            <i className="bi bi-google mr-2"></i>
                                                            Utiliser gmail
                                                        </div>
                                                    ) }
                                                    onSuccess={ responseGoogle }
                                                    onFailure={ responseGoogle }
                                                    cookiePolicy={ 'single_host_origin' }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex align-items-center or mx-4">
                                    <div className="bar"></div>
                                    <span className="py-2 px-4"> ou </span>
                                    <div className="bar"></div>
                                </div>
                                <div className="container content-inputs d-flex flex-column mt-5">
                                    <Input type="text" placeholder="Nom d'utilisateur" name="username" icon="person-badge-fill" />
                                    <Input type="text" placeholder="Email" name="email" icon="envelope-fill" />
                                    <Input type="password" placeholder="Mot de passe: " name="password" icon="shield-lock-fill" />
                                </div>
                                <div className="container-fluid mt-5 d-flex justify-content-center align-items-center py-4 pb-3">
                                    <Link href="/sign-in">
                                        <a className="secondary d-flex align-items-center mr-5 button"> Connection </a>
                                    </Link>
                                    <div className="submit d-flex align-items-center button"> Inscription </div>
                                </div>
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