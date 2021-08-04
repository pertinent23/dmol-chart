import { useCookies } from 'react-cookie';
import { useState, Fragment, useEffect } from 'react';
import axios from 'axios';

const Manager = {
    arr: [],
    async push( item ) {
        const 
            { nameNet, id } = item,
            list = await this.getNode( id );
            this.arr.push(
                <div className="container-fluid sticky-note-data-item d-flex flex-column px-0" key={ id }>
                    <div className="sticky-note-item-head d-flex justify-content-start align-items-center py-2">
                        <i className="bi bi-chevron-right mr-2"></i>
                        { nameNet } : { id }
                    </div>
                    <div className="sticky-note-body pl-4">
                        { list }
                    </div>
                </div>
            );
        return this;
    },
    generateItem() {
        return (
            <Fragment>
                { this.arr }
            </Fragment>
        );
    },
    async getNetWorks( id, setState ) {
        this.arr = [ ];
        const
            auth = Manager.auth,
            result = Manager.cookies.networks || ( await axios.get( '/userNetwork/' + encodeURIComponent( id ) + "/", {
                headers: {
                    Authorization: auth
                }
            }  ) ).data;
                for( const item of result )
                    await this.push( item );
                console.log( result );
            Manager.setCookies( 'networks', JSON.stringify( result ) );
        return setState( this.generateItem() );
    },
    async getNode( id ) {
        const 
            auth = Manager.auth,
            result = [],
            url = "/usernodeNetwork/" + encodeURIComponent( id ) + "/",
            nodes = Manager.cookies[ id ] || ( await axios.get( url, {
                headers: {
                    Authorization: auth
                }
            } ) ).data;
                for( const item of nodes ) 
                    result.push(
                        <div className="sticky-note-subitem-head d-flex justify-content-start align-items-center pl-2 py-2" key={ item.id + 'i' }>
                            <i className="bi bi-chevron-right mr-2"></i>
                            { item.name } : { item.id }
                        </div>
                    );
                Manager.setCookies( '' + id, JSON.stringify( nodes ) );
        return result;
    }
};

let load = 0;
/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
export default function Sticky( { state, setState } ) {
    const 
        [ cookies, setCookies ] = useCookies( [ 'sticky-note' ] ),
        [ cook ] = useCookies( [ 'user' ] ),
        [ note, setNote ] = useState( cookies.note === 'true' ),
        [ display, setDisplay ] = useState( 'hide-i' ),
        [ appear, setAppear ] = useState( 'hide' ),
        [ content, setContent ] = useState(
            <div className="spinner-border text-light my-4" role="status">
                <span className="sr-only"></span>
            </div>
        ),
        options = { checked: note },
        data = cook.data;
        useEffect( () => {
            const { pk } = data.user;
                Manager.auth = 'Bearer ' + data.access_token;
                Manager.getNetWorks( pk, setContent );
                    setDisplay( note ? 'show-i' : state );
                    setAppear( note ? 'hide' : 'show' );
                if( note )
                    setState( 'show-i' );
            return () => {};
        }, [ note, state, setState, data ] );
        Manager.cookies = cookies;
        Manager.setCookies = function ( name, value ) {
            return setCookies( name, value, {
                maxAge: 3600 * 24 * 5,
                path: '/'
            } );
        };
        load++;
    return (
        <div className={ "sticky-note d-flex flex-column justify-content-center align-items-center position-fixed ".concat( display ) }>
            <div className="container-fluid py-2 sticky-note-head d-flex justify-content-center align-items-center">
                <i className="bi bi-pencil-square"></i>
                Sticky-Note
            </div>
            <div className="container-fluid sticky-note-data d-flex flex-column justify-content-center align-items-center py-3">
                { content }
            </div>
            <div className="container-fluid content-choice d-flex justify-content-start align-items-center py-2 pl-3 pt-3">
                <label className="d-block checkbox-container mr-2" htmlFor="stay-opened">
                    <input type="checkbox" name="stay-opened" id="stay-opened" { ...options } onChange={ event => {
                        const 
                            note = event.target.checked;
                                setNote( note );
                        return setCookies( 'note', note, {
                            maxAge: 3600 * 24 * 5,
                            path: '/'
                        } );
                    } } />
                    <span className="checkmark"></span>
                </label>
                <label htmlFor="stay-opened" className="d-block"> garder ouvert </label>
            </div>
            <div className={ "container-fluid content-button d-flex justify-content-center align-items-center ".concat( appear ) }>
                <div className="btn px-3 py-0 d-flex justify-content-center align-items-center my-2 mt-3" onClick={ () => setState( 'hide-i' ) }>
                    <i className="bi bi-power mr-2"></i>
                    Fermer
                </div>
            </div>
        </div>
    );
};