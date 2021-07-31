import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from '../@account-root';
import getUserData from './../@request';
import Cookies from 'cookie';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Tools = {
    id: 0,
    get key() {
        return ++this.id;
    },
    list: [],
    getCurrent( date ) {
        return `${date.getDate()}/${date.getMonth() + 1 }/${date.getMonth()}`;
    },
    push( data ) {
        const 
            date = new Date( data.created_at ),
            current = this.getCurrent( date );
        return this.list.push( {
            node: data.node,
            val: data.data,
            date,
            current
        } );
    },
    get() {
        this.id = 0;
        this.list.push( { current: '' } );
        const 
            res = [];
        let
            current = '',
            nodes = [],
            dates = [],
            values = [];
                for( const item of this.list ) {
                    if ( item.current != current && current ) {
                        res.push( <div className="container table-item py-3 d-flex flex-column align-items-center justify-content-center mb-3 shadow" key={ Tools.key }>
                            <div className="table-item-title d-block py-3 pl-3 w-100"> Date: { current } </div>
                            <div className="container d-block">
                                <div className="row p-0 m-0">
                                    <div className="col col-4 d-flex flex-column align-items-center px-2 pt-1">
                                        <div className="col-title container text-center py-2"> Données </div>
                                        <div className="col-items-container d-flex flex-column align-items-center pt-3">
                                            { values }
                                        </div>
                                    </div>
                                    <div className="col col-4 d-flex flex-column align-items-center px-2 pt-1">
                                        <div className="col-title container text-center py-2"> Noeud </div>
                                        <div className="col-items-container d-flex flex-column align-items-center pt-3">
                                            { nodes }
                                        </div>
                                    </div>
                                    <div className="col col-4 d-flex flex-column align-items-center px-2 pt-1">
                                        <div className="col-title container text-center py-2"> Date </div>
                                        <div className="col-items-container d-flex flex-column align-items-center pt-3">
                                            { dates }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> );
                        dates = nodes = values = [ ];
                    }

                    current = item.current;
                    values.push( <div className="col-items mb-2" key={ Tools.key }>
                        { item.val }
                    </div> );
                    dates.push( <div className="col-items mb-2" key={ Tools.key }>
                        { item.current }
                    </div> );
                    nodes.push( <div className="col-items mb-2" key={ Tools.key }>
                        { item.node }
                    </div> );
                } 
            console.log( res.length )
        return res;
    }, 
    addAll( tables ) {
        this.list = [];
        for( const item of tables )
            Tools.push( item );
        return this;
    }
};

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/private/account.data.css" />
            </Head>
            <div className="container-fluid d-flex flex-column py-3">
                { Tools.get() }
            </div>
        </Fragment>
    );
};

export const page = "show-data";
/** 
    * @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props 
    *
*/
export default function Index( { user, tables } ) {
    Tools.addAll( tables );
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
        url = "/listData/",
        tables = ( await axios.get( url, {
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        } ) ).data;
    return {
        props: {
            tables,
            user
        }
    };
};