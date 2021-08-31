import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import TwitterLogin from "react-twitter-login";
import { keys } from '../@api';

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

function Twitter() {
    return (
        <TwitterLogin
            authCallback={ responseTwitter }
            consumerKey={ keys.TWITTER_PUPLIC }
            consumerSecret={ keys.TWITTER_SECRET }
        >
            <div className="d-flex justify-content-center align-items-center twitter p-0">
                <i className="bi bi-twitter"></i>
                <span className="d-none"> Utiliser twitter </span>
            </div>
        </TwitterLogin>
    );  
};

function Facebook() {
    return (
        <FacebookLogin
            appId={ keys.FACEBOOK }
            fields="name,email,picture"
            callback={ responseFacebook } 
            buttonStyle={{ backgroundColor: "#000000", opacity: 1 }}
            icon={ <i className="bi bi-facebook"></i> }
            textButton=""
            cssClass="d-flex justify-content-center align-items-center facebook p-0"
        />
    );
};

function Google() {
    return (
        <GoogleLogin
            clientId={ keys.GOOGLE }
            render={ props => (
                <div { ...props } className="d-flex justify-content-center align-items-center google p-0">
                    <i className="bi bi-google"></i>
                    <span className="d-none"> Utiliser google </span>
                </div>
            ) }
            onSuccess={ responseGoogle }
            onFailure={ responseGoogle }
            cookiePolicy={ 'single_host_origin' }
        />
    );
};

function Input( { placeholder, name, icon, type } ) {
    const 
        [ focus, setFocus ] = useState( 'blur' );
    return (
        <div className="field container-fluid d-flex align-items-center justify-content-center py-3">
            <div className="d-flex field-item">
                <i className={ "mr-4 bi bi-".concat( icon ) }></i>
            </div>
            <div className="d-flex flex-column align-items-center field-item">
                <div className={ `field-content-input d-flex flex-column ${ focus }` }>
                    <input { ...{ name, type } } id={ name } autoComplete="off" className="pl-4 pt-3" required pattern=".*" onInput={ e => {
                        const 
                            target = e.target,
                            name = target.name,
                            value = target.value;
                        ContentData[ name ] = value;
                    } } onFocus={ () => setFocus( 'focus' ) } onBlur={ () => setFocus( 'blur' ) } />
                    <label htmlFor={ name } className="pl-3 d-flex align-items-center"> { placeholder } </label>
                </div>
                <div className="field-bar d-flex justify-content-center"></div>
            </div>
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
                        <img src="/img/form/form12.jpg" alt="img" className="img-responsive form-img" />
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
                                        <div className="d-flex px-2">
                                            <div className="log-item p-2" data-toolip="Utiliser Facebook">
                                                <Facebook />
                                            </div>
                                        </div>
                                        <div className="d-flex px-2">
                                            <div className="log-item p-2" data-toolip="Utiliser Twitter">
                                                <Twitter />
                                            </div>
                                        </div>
                                        <div className="d-flex px-2">
                                            <div className="log-item p-2" data-toolip="Utiliser Google">
                                                <Google />
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
                                    <Input type="password" placeholder="Mot de passe: " name="password_1" icon="shield-lock-fill" />
                                    <Input type="password" placeholder="Mot de passe: " name="password_2" icon="shield-lock" />
                                </div>
                                <div className="container-fluid mt-5 d-flex flex-column-reverse justify-content-center align-items-center pb-4 pt-2">
                                    <div className="secondary d-block mt-5 pt-2"> 
                                        { "Vous êtes déjà inscrit ?" }
                                        <Link href="/sign-in">
                                            <a className="px-0 px-md-2">connectez-vous</a>
                                        </Link> 
                                    </div>
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

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index(props) {
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