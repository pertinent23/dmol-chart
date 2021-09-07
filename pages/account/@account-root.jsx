import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../@nav';
import { PageHeader } from '../@api';
import Link from 'next/link';


export const page = 'account';

export function MenuItem( { icon, name, link, id } ) {
    return (
        <Link href={ link }>
            <div className={ "menu-item list-group-item border-0 py-2 px-4 my-2 d-flex align-items-center ".concat( Menu.active === id ? "active" : "" ) }> 
                <i className={ "bi mr-3 bi-".concat( icon ) }></i>
                <span className="text-center d-flex"> { name } </span> 
            </div>
        </Link>
    );
};

export function Menu( { active } ) {
    Menu.active = active;
    return (
        <div className="list-group container-fluid py-2 mt-5 d-flex flex-column justify-content-center align-items-start menu sticky">
            <MenuItem icon="bricks" name="Profile" link="/account" id="home" />
            <MenuItem icon="clipboard-check" name="Modifier mes informations" link="/account/modify" id="modify" />
            <MenuItem icon="shield-lock-fill" name="Modifier mon mot de passe" link="/account/modify-password" id="modify-pass" />
            <MenuItem icon="receipt" name="Articles ecris" link="/account/more/article" id="more" />
            <MenuItem icon="pencil-square" name="ecrire un article" link="/article/writte" id="writte-an-article" />
        </div>
    );  
};

export default function AccountRoot( { children, icon, title, id } ) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/page.css" />
                <link rel="stylesheet" href="/css/account.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <PageHeader icon={ icon } title={ title } />
                <Navigation main={ page } />
                <div className="w-100 content-parts d-flex flex-column">
                    <div className="w-100 part second-part d-flex flex-column justify-content-center align-items-center pt-5 mt-3">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <div className="w-100 form"> 
                                    { children }
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2 px-md-3 d-flex flex-column align-items-center align-items-md-start">
                                <Menu active={ id } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};