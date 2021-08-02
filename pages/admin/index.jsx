import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from '../account/@account-root';
import getUserData from '../account/@request';
import Image from 'next/image';
import Cookies from 'cookie';

function User( { username, profil } ) {
    return (
        <div className="user w-100 px-1 d-flex">
            <div className="d-flex start justify-content-center align-items-center">
                <div className="user-img d-flex justify-content-center align-items-center">
                    <Image src={ profil } layout="fill" alt="user image" />
                </div>
            </div>
            <div className="d-flex end flex-column">
                <div className="d-flex text-light user-name pl-3 pt-3"> { username } </div>
                <div className="content-button d-flex user-buttons pt-2 py-4 pt-5">
                    <button className="btn mb-2 mr-2"> graphiques </button>
                    <button className="btn mb-2 btn-outline mr-2"> donnees </button>
                    <button className="btn mb-2 mr-2"> informations </button>
                    <button className="btn mb-2 btn-outline mr-2"> réseaux </button>
                    <button className="btn mb-2 mr-2 delete"> Supprimer </button>
                </div>
            </div>
        </div>
    );
};

function AddData() {
    const data = {
        username: "@test",
        profil: "/img/user/user2.svg"
    };
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/admin.css" />
            </Head>
            <div className="container-fluid py-2">
                <div className="container content-item-list py-2 d-flex flex-column px-0">
                    <User { ...data } />
                </div>
            </div>
        </Fragment>
    );
};

export const page = "admin";
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index( { user }) {
    return (
        <Fragment>
            <PageRoot page={ page } userdata={ user }>
                <AddData />
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