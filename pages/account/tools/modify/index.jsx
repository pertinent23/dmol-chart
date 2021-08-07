import Head from 'next/head';
import { Fragment, useState } from 'react';
import PageRoot from './../../@account-root';
import { getUserData } from './../../@request';
import Cookies from 'cookie';
import { useCookies } from 'react-cookie';
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
                    <Item { ...item } key={ item.id } auth={ Manager.auth } />
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
        return setState( this.generateSubItem( id ) );
    },
    generateSubItem( id ) {
        const result = [];
            for( const item of this.arr )
                result.push(
                    <SubItem { ...item } key={ item.id } id={ item.id } auth={ Manager.auth } net={ id } />
                );
        return result;
    }
};

function SubItem( { name, id, auth, net } ) {
    const
        [ cookies, setCookie ] = useCookies( [ 'sticky-note' ] ), 
        [ appear, setAppear ] = useState( 'd-flex' );
    return (
        <div className={ "network-subitem list-group-item align-items-center justify-content-between mt-2 w-100 ".concat( appear ) }>
            { name }
            <div className="network-subitem-action modify d-flex justify-content-center align-items-center ml-3" onClick={ async function () {
                    try{
                        const 
                            nodes = cookies[ net ],
                            result = ( nodes || [] ).filter( ( node ) => {
                                return node.id === net ? false : true;
                            } );
                            await axios.delete( '/node/' + encodeURIComponent( id ) + '/' , {
                                headers: {
                                    Authorization: auth
                                }
                            } );
                            setCookie( '' + net, JSON.stringify( result ), {
                                maxAge: 100,
                                path: '/'
                            }  );
                        setAppear( 'd-none' );
                    } catch( e ) {}
                } }>
                <i className="bi bi-x-octagon-fill mr-4"></i>
            </div>
        </div>
    );
};

function Item( { name, adress, id, auth } ) {
    const 
        [ active, setActive ] = useState( '' ),
        [ appear, setAppear ] = useState( 'd-flex' ),
        [ display, setDisplay ] = useState( 'd-none' ),
        [ form, setForm ] = useState( 'd-none' ),
        [ cookies, setCookie ] = useCookies( [ 'sticky-note' ] ),
        [ content, setContent ] = useState(
            <div className="spinner-border text-light my-4" role="status">
                <span className="sr-only"></span>
            </div>
        );
    return (
        <div className={ "network-item flex-column px-2 py-3 mb-2 ".concat( appear ) }>
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
            <FormNode id={ id } auth={ auth } state={ form } setState={ setForm } />
            <div className="content-button d-flex align-items-center justify-content-end py-3">
                <div className="btn d-flex justify-content-center align-items-center py-0 px-3 add-node mr-3" onClick={ () => setForm( 'd-flex' ) }>
                    <i className="bi bi-pen-fill mr-2"></i>
                    Noeud
                </div>
                <div className="btn d-flex justify-content-center align-items-center py-0 px-3 mr-3 delete" onClick={ async function () {
                    try{
                        const 
                            networks = cookies.networks,
                            result = ( networks || [] ).filter( ( net ) => {
                                return net.id === id ? false : true;
                            } );
                            await axios.delete( '/network/' + encodeURIComponent( id ) + '/' , {
                                headers: {
                                    Authorization: auth
                                }
                            } );
                            setCookie( 'networks', JSON.stringify( result ), {
                                maxAge: 100,
                                path: '/'
                            }  );
                        setAppear( 'd-none' );
                    } catch( e ) {}
                } }>
                    <i className="bi bi-x-octagon-fill mr-2"></i>
                    Supprimer
                </div>
            </div>
        </div>
    );
};

function FormNetwork( { pk, auth, state, setState } ) {
    const 
        datas = { user: pk },
        router = useRouter(),
        [ error, setError ] = useState( '' ),
        [ cookies, setCookies ] = useCookies( [ 'sticky-note' ] ), 
        changeListener = event => {
            const 
                target = event.target,
                name = target.name,
                value = target.value;
            datas[ name ] = value;
        };
    return (
        <div className={ "container-fluid form flex-column align-items-center py-2 ".concat( state ) }>
            <input type="text" onChange={ changeListener } className="d-block my-2 py-3" name="user" value={ pk } />
            <input type="text" onChange={ changeListener } className="d-block my-2 py-3" minLength={ 1 } maxLength={ 49 } name="nameNet" placeholder="Nom du réseau: " />
            <input type="text" onChange={ changeListener } className="d-block my-2 py-3" minLength={ 1 } maxLength={ 49 } name="adress" placeholder="Adresse: " />
            <div className="container d-flex justify-content-center align-items center text-danger py-2"> { error } </div>
            <div className="btn d-flex justify-content-center align-items-center create mt-3 px-3" onClick={ async function () {
                try{
                    const 
                        result = ( await axios.post( '/network/', JSON.stringify( datas ), {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: auth
                            }
                        } ) ).data,
                        networks = cookies.networks || [];
                        networks.push( result );
                            setCookies( 'networks', JSON.stringify( networks ), {
                                maxAge: 3600 * 24 * 5,
                                path: '/'
                            } );
                            setError( '' );
                    setState( 'd-none' );
                    return router.reload();
                } catch( e ) {
                    setError( 'Failed to create a new network' );
                }
            } }>
                <i className="bi bi-check mr-2"></i>
                Créer
            </div>
        </div>
    );
};

function FormNode( { id, auth, state, setState } ) {
    const 
        datas = { network: id },
        router = useRouter(),
        [ error, setError ] = useState( '' ),
        [ cookies, setCookies ] = useCookies( [ 'sticky-note' ] ), 
        changeListener = event => {
            const 
                target = event.target,
                name = target.name,
                value = target.value;
            datas[ name ] = value;
        };
    return (
        <div className={ "container-fluid form flex-column align-items-center py-2 ".concat( state ) }>
            <input type="text" onChange={ changeListener } className="d-block my-2 py-3" name="network" value={ id } />
            <input type="text" onChange={ changeListener } className="d-block my-2 py-3" minLength={ 1 } maxLength={ 49 } name="name" placeholder="Nom du noeud: " />
            <input type="text" onChange={ changeListener } className="d-block my-2 py-3" minLength={ 1 } maxLength={ 49 } name="description" placeholder="Description: " />
            <div className="container d-flex justify-content-center align-items center text-danger py-2"> { error } </div>
            <div className="btn d-flex justify-content-center align-items-center create mt-3 px-3" onClick={ async function () {
                try{
                    const 
                        result = ( await axios.post( '/node/', JSON.stringify( datas ), {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: auth
                            }
                        } ) ).data,
                        nodes = cookies[ id ] || [];
                        nodes.push( result );
                            setCookies( id + '', JSON.stringify( nodes ), {
                                maxAge: 3600 * 24 * 5,
                                path: '/'
                            } );
                            setError( '' );
                        setState( 'd-none' );
                    return router.reload();
                } catch( e ) {
                    setError( 'Failed to create a new network' );
                }
            } }>
                <i className="bi bi-check mr-2"></i>
                Créer
            </div>
        </div>
    );
};

function AddData( { pk, auth } ) {
    const [ display, setDisplay ] = useState( 'd-none' );
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/private/account.graph.css" />
            </Head>
            <div className="container-fluid py-2">
                <div className="page-title d-flex align-items-center justify-content-center mb-2 py-2"> 
                    <i className="bi bi-columns-gap ml-2 mr-4"></i>
                    Réseaux et noeuds
                </div>
                <div className="container content-item-list py-2 d-flex flex-column px-0">
                    { Manager.generateItem() }
                </div>
                <FormNetwork pk={ pk } auth={ auth } state={ display } setState={ setDisplay } />
                <div className="container-fluid d-flex justify-content-center align-items-center py-3">
                    <div className="btn d-flex justify-content-center align-items-center py-2 px-4 add-network mr-3" onClick={ () => (
                        setDisplay( 'd-flex' )
                    ) }>
                        <i className="bi bi-pen-fill mr-2"></i>
                        Réseau
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const page = "account-data";
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Index( { user, networks, auth, pk } ) {
    Manager.auth = auth;
    Manager.pushAll( networks );
    return (
        <Fragment>
            <PageRoot page={ page } userdata={ user }>
                <AddData pk={ pk } auth={ auth } />
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
            user,
            pk
        }
    };
};