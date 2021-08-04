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
        router = useRouter(), 
        [ ufile, setFile ] = useState( null ),
        [ image, setImage ] = useState( userdata.profil ),
        [ username, setusername ] = useState( userdata.username ),
        [ email, setemail ] = useState( userdata.email ),
        [ first_name, setfirst_name ] = useState( userdata.first_name || '' ),
        [ last_name, setlast_name ] = useState( userdata.last_name || '' ),
        [ birth, setbirth ] = useState( userdata.birth || '' ),
        [ adress, setadress ] = useState( userdata.adress || '' ),
        [ city, setcity ] = useState( userdata.city || '' ),
        [ about, setabout ] = useState( userdata.about || '' ),
        [ loader, setLoader ] = useState( 'd-none' ),
        fx = { setusername, setadress, setbirth, setcity, setemail, setfirst_name, setlast_name, setabout },
        basedata = { image, username, email, first_name, last_name, birth, adress, city, about, pk: useState.pk },
        onChange = event => {
            const 
                file = event.target.files[ 0 ],
                reader = new FileReader();
                    setFile( file );
                        reader.onload = ( e ) => setImage( e.target.result );
            return reader.readAsDataURL( file );
        },
        onChangeField = event => {
            const 
                value = event.target.value;
                    fx[ "set".concat( event.target.name ) ]( value );
            return this;
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
                                <input type="file" id="file" name="profil" className="d-none" onChange={ onChange } />
                                <Image layout="fill" src={ image } alt="user-img" className="profil-img img d-block" />
                                <div className="uploader d-flex justify-content-center align-items-center">
                                    <label htmlFor="file" className="content-icon d-flex justify-content-center align-items-center">
                                        <i className="bi bi-camera-fill mt-1"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-data d-block container-fluid mt-5 pt-md-5">
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> A propos de moi: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" name="about" value={ about } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Pseudo: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" name="username" value={ username } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Email: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="email" placeholder="Az:" name="email" value={ email } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Nom: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" name="first_name" value={ first_name } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Prenom: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" name="last_name" value={ last_name } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Date de naissance: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="date" placeholder="Az:" name="birth" value={ birth } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Adresse: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" name="adress" value={ adress } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Ville: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" name="city" value={ city } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                </div>
                <div className="content-button container-fluid my-2">
                    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center py-2">
                        <a className="btn py-2 px-4 d-flex flex-row align-items-center" id="update-password" onClick={ async function () {
                            setLoader( "d-flex" );
                            basedata.about_me = about;
                            basedata.profil_image = image;
                            basedata.pk = userdata.pk;
                            const url = '/updateUser/' + encodeURIComponent( basedata.pk ) + '/';
                            axios.put( url, basedata, {
                                headers: {
                                    Authorization: auth,
                                    'Content-Type': 'application/json'
                                }
                            } ).then( function () {
                                setLoader( 'd-none' );
                                router.push( "/account/account-data" );
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