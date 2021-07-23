import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from './../@account-root';

function AddData( { userdata } ) {
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
                                <img src={ userdata.profil } alt="user-img" className="user-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-data d-block container-fluid mt-5 pt-md-5">
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-2">
                        <div className="user-item-name container-fluid"> A propos de moi: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            { userdata.about }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Pseudo: </div>
                        <div className="user-item-value pl-3">
                            { userdata.username }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Email: </div>
                        <div className="user-item-value pl-3">
                            { userdata.email }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Nom: </div>
                        <div className="user-item-value pl-3">
                            { userdata.first_name }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Prenom: </div>
                        <div className="user-item-value pl-3">
                            { userdata.last_name }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Date de naissance: </div>
                        <div className="user-item-value pl-3">
                            { userdata.birth }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Adresse: </div>
                        <div className="user-item-value pl-3">
                            { userdata.adress }
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex align-items-center py-3 my-4">
                        <div className="user-item-name"> Ville: </div>
                        <div className="user-item-value pl-3">
                            { userdata.city }
                        </div>
                    </div>
                </div>
                <div className="content-button container-fluid my-2">
                    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center py-2">
                        <a href="/account/account-data/update-password/" className="btn py-3 px-4 mr-md-3 mb-4 mb-md-0" id="update-password"> Modifier le mot de passe </a>
                        <a href="/account/account-data/update-all/" className="btn py-3 px-4" id="update-all"> Modifier vos informations </a>
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
            <PageRoot page={ page }>
                <AddData userdata={ user } />
            </PageRoot>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            user: {
                username: '',
                password: '',
                email: null,
                first_name: null,
                last_name: null,
                birth: null,
                adress: null,
                profil: '/img/user/user1.svg',
                city: null,
                about: null
            }
        }
    };
};