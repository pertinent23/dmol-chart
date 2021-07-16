import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import PageRoot from './../@account-root';

export function Item( { id, date, text } ) {
    return (
        <a className={ "nav-item px-4 py-3 ".concat( id === date ? 'active': '' ) } href={ "/account/show-data/".concat( id ) }> { text } </a>
    );
};

export function Nav( { date } ) {
    const obj = new Date();
    return (
        <div className="content-nav d-flex flex-column align-items-end mx-3">
            <div className="nav-brand py-3 pl-2 pt-4"> Statistique </div>
            <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
                <div className="date d-flex justify-content-center align-items-center mr-4">
                    <div className="data-icon">
                        <img src="/img/menu/calendar3.svg" alt="nav-icon" className="img" />
                    </div>
                    <div className="date-content pl-3"> { obj.getDate() }/{ obj.getMonth() + 1 }/{ obj.getFullYear() } </div>
                </div>
                <div className="nav d-block">
                    <Item id="day" text="Jour" date={ date }/>
                    <Item id="week" text="Semaine" date={ date }/>
                    <Item id="month" text="Mois" date={ date }/>
                    <Item id="year" text="Année" date={ date }/>
                </div>
            </div>
        </div>
    );
};

export function AddData() {
    return (
        <div className="text-light container-fluid py-4 px-3 px-md-3">
            <div className="part-title py-2"> Progression </div>
            <div className="row d-flex flex-column flex-lg-row py-3">
                <div className="col mx-lg-1 py-2">
                    <div className="content-chart shadow p-3">
                        <canvas width="300" height="260" id="doughnut"></canvas>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mx-lg-1 py-2">
                    <div className="content-chart shadow p-3">
                        <canvas width="300" height="260" id="polar"></canvas>
                    </div>
                </div>
            </div>
            <div className="part-title py-2"> Données </div>
            <div className="row d-flex flex-column flex-lg-row py-3">
                <div className="col mx-lg-1 py-2">
                    <div className="content-chart shadow p-3">
                        <canvas width="300" height="260" id="bar"></canvas>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mx-lg-1 py-2">
                    <div className="content-chart shadow p-3">
                        <canvas width="300" height="260" id="point"></canvas>
                    </div>
                </div>
            </div>
            <div className="row d-flex flex-column flex-lg-row py-3">
                <div className="col mx-lg-1 py-2">
                    <div className="content-chart shadow p-3">
                        <canvas width="300" height="260" id="circle"></canvas>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mx-lg-1 py-2">
                    <div className="content-chart shadow p-3">
                        <canvas width="300" height="260" id="hbar"></canvas>
                    </div>
                </div>
            </div>
            <div className="part-title py-2"> Enregistrment </div>
            <div className="content-save container-fluid d-flex justify-content-center py-3">
                <div className="save d-flex flex-column justidy-content-center align-items-center mx-3 my-3 px-5 py-2 shadow">
                    <div className="data"> 5 </div>
                    <div className="name"> Aujoud'hui </div>
                </div>
                <div className="save d-flex flex-column justidy-content-center align-items-center mx-3 my-3 px-5 py-2 shadow">
                    <div className="data"> 15 </div>
                    <div className="name"> Cette semaine </div>
                </div>
                <div className="save d-flex flex-column justidy-content-center align-items-center mx-3 my-3 px-5 py-2 shadow">
                    <div className="data"> 105 </div>
                    <div className="name"> Ce moi </div>
                </div>
            </div>
        </div>
    );
};

export const page = "show-data";
export default function Index( { date, data } ) {
    useEffect( () => {
        window.logData( data );
    } );
    return (
        <Fragment>
            <Head>
                <script src="/libs/chart.min.js"></script>
                <script src="/js/show-data.js"></script>
            </Head>
            <PageRoot page={ page }>
                <Nav date={ date } />
                <AddData />
            </PageRoot>
        </Fragment>
    );
};

export async function getServerSideProps( context ) {
    return {
        props: {
            date: context.query.date,
            data: {
                doughnut: [ 30, 70 ],
                polar: [ 10, 50, 15, 30, 60 ],
                bar: [ 10, 50, 15, 30, 5, 60 ],
                point: [ 10, 50, 15, 30, 80 ]
            }
        }
    };
};