import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from './../../@account-root';
import getUserData from './../../@request';
import Image from 'next/image';

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
                                <Image layout="fill" src={ userdata.profil } alt="user-img" className="user-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-data d-block container-fluid mt-5 pt-md-5">
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Ancien Mot de passe: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="password" placeholder="Az:" className="container-fluid mb-2" name="old-password" id="old-password" />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Nouveau Mot de passe: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="password" placeholder="Az:" className="container-fluid mb-2" name="new-password" id="new-password" />
                        </div>
                    </div>
                    <div className="user-item container-fluid d-flex flex-column align-items-center py-3 my-3">
                        <div className="user-item-name container-fluid"> Le resaisir: </div>
                        <div className="user-item-value pl-3 container-fluid pt-5 pb-2">
                            <input type="password" placeholder="Az:" className="container-fluid mb-2" name="new-password-2" id="new-password-2" />
                        </div>
                    </div>
                </div>
                <div className="content-button container-fluid my-2">
                    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center pt-5">
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