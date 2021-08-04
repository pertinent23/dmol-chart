import Head from 'next/head';
import { Fragment, useState } from 'react';
import PageRoot from './../../@account-root';
import { getUserData } from './../../@request';
import Image from 'next/image';
import Cookies from 'cookie';
import axios from 'axios';
import { useRouter } from 'next/router';

function AddData( { userdata, auth } ) {
    const 
        basedata = {},
        router = useRouter(),
        [ loader, setLoader ] = useState( 'd-none' ),
        onChangeField = function ( event ) {
            const
                target = event.target,
                name = target.name,
                value = target.value;
            return basedata[ name ] = value;
        };
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/private/account.user.css" />
            </Head>
            <div className="container-fluid py-3 px-0 mb-5">
                <div className="part-container d-block container">
                    <div className="profile-container d-block">
                        <div className="upper container-fluid d-flex justify-content-center align-items-center">
                            <div className="content-profil d-flex justify-content-center align-items-center">
                                <Image layout="fill" src={ userdata.profil } alt="user-img" className="user-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-data d-block container-fluid mt-5 pt-md-5">
                    <div className="user-item container-fluid d-none flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Ancien Mot de passe: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="password" placeholder="Az:" className="container-fluid mb-2" name="old_password" id="old-password" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Nouveau Mot de passe: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="password" placeholder="Az:" className="container-fluid mb-2" name="new_password1" id="new-password" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Le resaisir: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="password" placeholder="Az:" className="container-fluid mb-2" name="new_password2" id="new-password-2" onChange={ onChangeField } />
                        </div>
                    </div>
                </div>
                <div className="content-button container-fluid my-2">
                    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center pt-5">
                        <a className="btn py-2 px-4 d-flex flex-row align-items-center" id="update-password" onClick={ function () {
                            setLoader( 'd-flex' );
                            const url = '/user/password/change/';
                            axios.post( url, basedata, {
                                headers: {
                                    Authorization: auth,
                                    'Content-Type': 'application/json'
                                }
                            } ).then( function () {
                                setLoader( 'd-none' );
                                router.push( '/sign-in' );
                            } ).catch( function () {
                                setLoader( 'd-none' );
                            } );
                        } }>
                            <div className={ "spinner-border text-light mr-3 ".concat( loader ) } role="status">
                                <span className="sr-only"></span>
                            </div> 
                            Modifier 
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const page = "account-data";
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index( { user, auth } ) {
    return (
        <Fragment>
            <PageRoot page={ page } userdata={ user }>
                <AddData userdata={ user } auth={ auth } />
            </PageRoot>
        </Fragment>
    );
};

export async function getServerSideProps( context ) {
    const 
        { data } = Cookies.parse( context.req.headers.cookie ),
        { access_token } = JSON.parse( data ),
        user = await getUserData( access_token, context.res );
    return {
        props: {
            auth: 'Bearer ' + access_token,
            user
        }
    };
};