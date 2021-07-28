import Head from 'next/head';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContentData = {};

function Input( { placeholder, type, name } ) {
    const 
        [ display, setDisplay ] = useState( 'd-none' ),
        [ p, setP ] = useState( 'pl-3' );
    return (
        <div htmlFor="username" className="content-input d-flex flex-column">
            <span className={ "content-input-text pl-3 py-3 ".concat( display ) }> { placeholder } </span>
            <input 
                className={ "py-3 pr-4 ".concat( p ) } 
                type={ type } 
                name={ name } 
                id={ name } 
                placeholder={ placeholder } 
                onInput={ function ( event ) {
                    const 
                        str = event.target.value;
                            ContentData[ event.target.name ] = str;
                                setP( str ? 'pl-5' : 'pl-3'  );
                    return setDisplay( str ? 'd-block' : 'd-none' );
                } }
            />
        </div>
    );
};

function AddData() {
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
                    <div className="d-flex field container-fluid justify-content-center align-items-center my-3 mb-5">
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
                    <div className="form-buttons d-flex justify-content-between align-items-center py-2 pt-5 mt-5 mb-5">
                        <Link href="/sing-up">
                            <a className="btn py-2 px-4 btn-outline first mr-3 mr-sm-4 mr-md-5"> inscription </a>
                        </Link>
                        <Link href="">
                            <a className="btn py-2 px-4 second">
                                Connection
                                <i className="bi bi-arrow-right ml-3"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const page = "sing-in";
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