import Head from 'next/head';
import { Fragment, useState } from 'react';
import PageRoot from '../account/@account-root';
import getUserData from '../account/@request';
import Image from 'next/image';
import Cookies from 'cookie';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

const Manager = {
    arr: [],
    pushAll( list ) {
        this.arr = [];
            for( const item of list )
                this.arr.push( {
                    ...item,
                    profil: '/img/user/user2.svg',
                    about: item.about_me
                } );
        return this;
    },
    generateUsers() {
        const result = [];
            for( const item of this.arr )
                result.push(
                    <User { ...item } key={ item.pk } />
                );
        return result;
    }
};

function User( data ) {
    const
        { username, profil, email, pk } = data,
        router = useRouter(), 
        [ , setCookie ] = useCookies( [ 'user' ] ),
        [ display, setDisplay ] = useState( 'd-flex' );
    return (
        <div className={ "user w-100 px-1 mb-3 ".concat( display ) }>
            <div className="d-flex start justify-content-center align-items-center">
                <div className="user-img d-flex justify-content-center align-items-center">
                    <Image src={ profil } layout="fill" alt="user image" />
                </div>
            </div>
            <div className="d-flex end flex-column">
                <div className="d-flex text-light user-name pl-3 pt-3"> { username } : { email } </div>
                <div className="content-button d-flex align-items-center user-buttons pt-2 py-4 pt-5">
                    <button className="btn mb-2 mr-2" onClick={ () => {
                        setCookie( 'jtkuser', JSON.stringify( data ), {
                            maxAge: 3600 * 24,
                            path: '/'
                        } );
                        router.push( '/admin/infos/' + pk  )
                    } }> informations </button>
                    <button className="btn mb-2 btn-outline mr-2" onClick={ () => (
                        router.push( '/admin/networks/' + pk  )
                    ) }> réseaux </button>
                    <button className="btn mb-2 mr-2 delete" onClick={ function () {
                        return setDisplay( 'd-none' );
                    } }> Supprimer </button>
                </div>
            </div>
        </div>
    );
};

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/admin.css" />
            </Head>
            <div className="container-fluid py-2 px-0">
                <div className="container-fluid d-flex flex-row align-items-center justify-content-between content-user-number mb-2">
                    <i className="bi bi-people mr-3"></i>
                    <div className="user-number d-flex align-items-center py-3 px-2 mx-3 pl-3">
                        { Manager.arr.length }
                        <span className="ml-1 mr-3"> utilisateur(s) </span>
                    </div>
                </div>
                <div className="container content-item-list py-2 d-flex flex-column px-3">
                    { Manager.generateUsers() }
                </div>
            </div>
        </Fragment>
    );
};

export const page = "admin";
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index( { user, list } ) {
    Manager.pushAll( list );
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
        auth = 'Bearer ' + access_token,
        user = await getUserData( access_token, context.res ),
        list = ( await axios.get( '/listuser/', {
            headers: {
                Authorization: auth
            }
        } ) ).data;
    return {
        props: {
            list,
            user
        }
    };
};