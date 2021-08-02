import Head from 'next/head';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useCookies } from 'react-cookie';

let ContentData = {};
function Input( { placeholder, type, name } ) {
    const 
        [ display, setDisplay ] = useState( 'd-none' ),
        [ p, setP ] = useState( 'pl-3' ),
        [ cookie ] = useCookies( [ 'user' ] ),
        all = cookie[ 'user-data' ] || {},
        [ value, setValue ] = useState( all[ name ] || '' );
        ContentData[ name ] = value;
    return (
        <div htmlFor="username" className="content-input d-flex flex-column">
            <span className={ "content-input-text pl-3 py-3 ".concat( display ) }> { placeholder } </span>
            <input 
                className={ "py-3 pr-4 ".concat( p ) } 
                type={ type } 
                name={ name } 
                id={ name } 
                value={ value }
                placeholder={ placeholder } 
                onInput={ function ( event ) {
                    const 
                        str = event.target.value;
                            ContentData[ event.target.name ] = str;
                            setValue( str );
                                setP( str ? 'pl-5' : 'pl-3'  );
                    return setDisplay( str ? 'd-block' : 'd-none' );
                } }
            />
        </div>
    );
};

function AddData() {
    const 
        [ error, setError ] = useState( '' ),
        [ , setCookie ] = useCookies( [ 'user' ] ),
        [ loader, setLoader ] = useState( 'd-none' ),
        router = useRouter();
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/form.css" />
            </Head>
            <div className="form d-flex flex-column justify-content-center align-items-center container-fluid pt-5 px-2">
                <div className="form-head d-flex flex-column container-fluid">
                    <div className="form-icon d-flex align-items-center justify-content-center container-fluid">
                        <div className="form-icon-item">
                            <Image layout="fill" src="/img/solar.svg" alt="icon" className="img d-block position-relative" />
                        </div>
                    </div>
                    <div className="form-name text-center container-fluid py-5">
                        <span className="text-center"> Connection </span>
                    </div>
                </div>
                <div className="form-body d-flex flex-column align-items-center container-fluid py-3 px-0">
                    <div className="d-flex field container-fluid justify-content-center align-items-center my-3">
                        <div className="field-icon justify-content-center align-items-center mr-4">
                            <i className="bi bi-file-earmark-text-fill"></i>
                        </div>
                        <Input placeholder="Nom d'utilisateur: " type="text" name="username" />
                    </div>
                    <div className="d-flex field container-fluid justify-content-center align-items-center my-3">
                        <div className="field-icon justify-content-center align-items-center mr-4">
                            <i className="bi bi-envelope-open-fill"></i>
                        </div>
                        <Input placeholder="Email: " type="email" name="email" />
                    </div>
                    <div className="d-flex field container-fluid justify-content-center align-items-center my-3">
                        <div className="field-icon justify-content-center align-items-center mr-4">
                            <i className="bi bi-shield-lock-fill"></i>
                        </div>
                        <Input placeholder="Mot de passe: " type="password" name="password" />
                    </div>
                    <div className="container-fluid d-flex justify-content-center text-danger pt-4"> { error } </div>
                    <div className="form-buttons d-flex justify-content-between align-items-center py-2 pt-5 mt-5 mb-5">
                        <Link href="/sign-up">
                            <a className="btn py-2 px-4 btn-outline first mr-3 mr-sm-4 mr-md-5"> inscription </a>
                        </Link>
                        <span className="btn py-2 px-4 second d-flex justify-content-between align-items-center" onClick={ async function () {
                            setLoader( '' );
                            const 
                                data = {
                                    mode: 'cors',
                                    headers: {
                                        "Content-Type": "application/json",
                                    }
                                };
                            return axios.post( "/user/login/", ContentData, data ).then( function ( res ) {
                                if ( res.status === 200 ) {
                                    setError( '' );
                                        setCookie( 'data', JSON.stringify( res.data ), { 
                                            path: '/', 
                                            maxAge: 3600 * 24
                                        } );
                                    return router.push( '/account/graphs' );
                                }
                                    setLoader( 'd-none' );
                                return setError( 'failed to sign-in' );
                            } ).catch( function () {
                                    setLoader( 'd-none' );
                                return setError( 'Failed to sign-in' );
                            } );
                        } } >
                            <div className={ "spinner-border text-light mr-3 ".concat( loader ) } role="status">
                                <span className="sr-only"></span>
                            </div>
                            Connection
                            <i className="bi bi-arrow-right ml-3"></i>
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const page = "sing-in";
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