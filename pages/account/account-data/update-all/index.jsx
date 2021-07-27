import Head from 'next/head';
import { Fragment, useState } from 'react';
import PageRoot from './../../@account-root';
import getUserData from './../../@request';

function AddData( { userdata } ) {
    const 
        [ image, setImage ] = useState( userdata.profil ),
        onChange = event => {
            const 
                file = event.target.files[ 0 ],
                reader = new FileReader();
                    reader.onload = ( e ) => setImage( e.target.result );
            return reader.readAsDataURL( file );
        },
        onChangeField = event => {
            console.log( event );
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
                                <input type="file" id="file" name="file" className="d-none" onChange={ onChange } />
                                <img src={ image } alt="user-img" className="profil-img img d-block" />
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
                        <div className="user-item-name container-fluid"> Pseudo: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" value={ userdata.username } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Email: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="email" placeholder="Az:" value={ userdata.email } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Nom: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" value={ userdata.first_name } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Prenom: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" value={ userdata.last_name } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Date de naissance: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="date" placeholder="Az:" value={ userdata.birth } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Adresse: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" value={ userdata.adress } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Ville: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="text" placeholder="Az:" value={ userdata.city } className="container-fluid mb-2" onChange={ onChangeField } />
                        </div>
                    </div>
                </div>
                <div className="content-button container-fluid my-2">
                    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center py-2">
                        <a className="btn py-2 px-4" id="update-password"> Modifier </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const page = "account-data";
export default function Index( { user } ) {
    return (
        <Fragment>
            <PageRoot page={ page } userdata={ user }>
                <AddData userdata={ user } />
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