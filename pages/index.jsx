import Head from 'next/head';
import Link from 'next/link';
import { DoughnutChart, LineChart, VerticalBarChart, HorizontalBarChart, PolarChart, PieChart } from './account/graphs/@graphs';
import { Fragment } from 'react';
import Image from 'next/image';

export const Data = {
    doughnut: [ 25, 75 ],
    polar: [ 10, 30, 45, 20, 75 ],
};

export const page = 'home';
export default function Home () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
            </Head>
            <div className="container-fluid bar d-none"></div>
            <div className="container-fluid page-head py-3 d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-brightness-low-fill mb-4"></i>
                <span className="page-title"> Solar-tracking </span>
            </div>
            <div className="container-fluid py-3 text-center part-title mt-5"> Diagrammes  </div>
            <div className="container content-graph-description my-5 py-3 shadow">
                <div className="row py-3">
                    <div className="col d-flex justify-content-center align-items-center px-3 py-2">
                        <PolarChart width="300" heigh="200" name="Diagramme polaire" data={ Data.polar } />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center px-3 py-2">
                        <DoughnutChart width="300" heigh="200" name="DoughnutChart" data={ Data.doughnut } />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center px-3 py-2">
                        <PieChart width="300" heigh="200" name="Diagramme circulaire" data={ Data.polar } />
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col d-flex justify-content-center align-items-center px-3 py-2">
                        <VerticalBarChart width="300" heigh="200" name="Diagramme polaire" data={ Data.polar } />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center px-3 py-2">
                        <HorizontalBarChart width="300" heigh="200" name="Diagramme polaire" data={ Data.polar } />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center px-3 py-2">
                        <LineChart width="300" heigh="200" name="Diagramme polaire" data={ Data.polar } />
                    </div>
                </div>
            </div>
            <div className="container-fluid py-3 text-center part-title mt-5"> Options  </div>
            <div className="container content-options my-5 py-5 shadow">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center option py-3 mt-5">
                        <i className="bi bi-person-lines-fill my-3"></i>
                        <div className="name mb-3"> Modifier votre compte </div>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center option py-3 mt-5 mt-md-0">
                        <i className="bi bi-journal-check mb-3"></i>
                        <div className="name mb-3"> Gérer vos réseaux </div>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center option py-3 mt-5">
                        <i className="bi bi-columns-gap mb-3"></i>
                        <div className="name mb-3"> Gérer vos données </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-3 text-center part-title mt-5"> En toute securité  </div>
            <div className="container secure text-center py-5">
                <i className="bi bi-shield-check"></i>
            </div>
            <div className="container d-flex justify-content-center py-4 content-button">
                <Link href="/sign-in">
                    <a className="btn py-2 px-4 d-flex align-items-center shadow">
                        Connection
                        <i className="bi bi-box-arrow-in-right ml-3"></i>
                    </a>
                </Link>
            </div>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center py-5 mt-3">
                <div className="content-icon">
                    <Image src="/img/solar.png" layout="fill" />
                </div>
                <span className="py-4 copyright mt-5"> &copy; Copyright { ( new Date() ).getFullYear() } </span>
            </div>
        </Fragment>
    );
};