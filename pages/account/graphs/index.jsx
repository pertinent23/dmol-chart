import Head from 'next/head';
import { Fragment, useState } from 'react';
import PageRoot from './../@account-root';
import getUserData from './../@request';
import Cookies from 'cookie';
import { useRouter } from 'next/router';
import axios from 'axios';

const Manager = {
    arr: [],
    pushAll( list ) {
        this.arr = [];
            for( const item of list )
                this.arr.push( {
                    name: item.nameNet || item.name,
                    id: item.id,
                    adress: item.adress
                } );
        return this;
    },
    generateItem() {
        const result = [];
            for( const item of this.arr )
                result.push(
                    <Item { ...item } key={ item.id } />
                );
        return result;
    },
    async getNode( id, setState ) {
        const 
            auth = Manager.auth,
            url = "/usernodeNetwork/" + encodeURIComponent( id ) + "/",
            nodes = ( await axios.get( url, {
                headers: {
                    Authorization: auth
                }
            } ) ).data;
                this.pushAll( nodes );
        return setState( this.generateSubItem() );
    },
    generateSubItem() {
        const result = [];
            for( const item of this.arr )
                result.push(
                    <SubItem { ...item } key={ item.id } />
                );
        return result;
    }
};
function SubItem( { name, id } ) {
    const router = useRouter();
    return (
        <div className="network-subitem list-group-item d-flex align-items-center mt-2 w-100">
            { name }
            <div className="network-subitem-action d-flex justify-content-center align-items-center ml-3" onClick={ () => (
                router.push( "/account/graphs/last?k=" + id )
            ) }>
                <i className="bi bi-arrow-right"></i>
            </div>
        </div>
    );
};

function Item( { name, adress, id } ) {
    const 
        [ active, setActive ] = useState( '' ),
        [ display, setDisplay ] = useState( 'd-none' ),
        [ content, setContent ] = useState(
            <div className="spinner-border text-light my-4" role="status">
                <span className="sr-only"></span>
            </div>
        );
    return (
        <div className="d-flex network-item flex-column px-2 py-3 mb-2">
            <div className="start d-flex flex-row align-items-center">
                <i className="bi bi-chevron-right mr-3 ml-3"></i>
                { name } : { adress }
                <span className={ "network-action d-flex justify-content-center align-items-center my-2 ml-5 p-2 ".concat( active ) } onClick={ function () {
                    Manager.getNode( id, setContent );
                        setActive( active ? '' : 'active' );
                    setDisplay( display === 'd-none' ? 'd-flex' : 'd-none' );
                } }>
                    <i className="bi bi-chevron-up"></i>
                </span>
            </div>
            <div className={ "end flex-column justify-content-center align-items-center list-group px-2 py-2 mt-2 ".concat( display ) }>
                { content } 
            </div>
        </div>
    );
};

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/private/account.graph.css" />
            </Head>
            <div className="container-fluid py-2">
                <div className="page-title d-flex align-items-center justify-content-center justify-content-md-start mb-2 py-2"> 
                    <i className="bi bi-bar-chart-line ml-2 mr-4"></i>
                    Graphiques 
                </div>
                <div className="container content-item-list py-2 d-flex flex-column px-0">
                    { Manager.generateItem() }
                </div>
            </div>
        </Fragment>
    );
};

export const page = "graphs";
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index( { user, networks, auth } ) {
    Manager.auth = auth;
    Manager.pushAll( networks );
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
        user = await getUserData( access_token, context.res ),
        { pk } = user,
        auth = 'Bearer ' + access_token,
        networks = ( await axios.get( '/userNetwork/' + encodeURIComponent( pk ) + "/", {
            headers: {
                Authorization: auth
            }
        }  ) ).data;
    return {
        props: {
            networks,
            auth,
            user
        }
    };
};