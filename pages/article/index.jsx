import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../@nav';
import { ArticleItem, PageHeader } from './../@api';

export function TitleItem( { id, name } ) {
    return (
        <div className="article-item d-flex flex-column w-100 justify-content-start align-items-start" id={ id }>
            <div className="list-title ml-2 pt-4 nav-link"> { name } </div>
            <div className="list-bar mt-4 ml-2 mb-5"></div>
        </div>
    );
};

export const page = 'article';
export default function Article() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
                <link rel="stylesheet" href="/css/page.css" />
                <link rel="stylesheet" href="/css/article.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <PageHeader icon="receipt" title="ARTICLES" />
                <Navigation main={ page } />
                <div className="w-100 content-parts d-flex flex-column">
                    <div className="w-100 part second-part d-flex flex-column justify-content-center align-items-center pt-5 mt-3">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <TitleItem id="recent-articles" name="Articles recents" />
                                <ArticleItem img="/img/pres/img1.jpg" title="IOT" />
                                <TitleItem id="polular-articles" name="Articles populaire" />
                                <ArticleItem img="/img/pres/img5.jpg" title="INTERNET" />
                                <TitleItem id="other-articles" name="Autres articles" />
                                <ArticleItem img="/img/pres/img4.jpg" title="JAVA" />
                                <div className="article-item d-flex w-100 justify-content-start">
                                    <nav aria-label="Page navigation example">
                                      <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="bi bi-chevron-right"></i>
                                            </a>
                                        </li>
                                      </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2 px-md-3 d-none d-md-flex flex-column align-items-center align-items-md-start">
                                <div className="list-group container-fluid py-4 mt-5 d-flex flex-column justify-content-center align-items-center menu sticky" id="menuss">
                                    <a className="menu-item list-group-item container-fluid border-0 py-4 mt-3 d-flex align-items-center" href="#recent-articles"> 
                                        <i className="bi bi-chevron-right mr-3"></i>
                                        <span className="text-center d-flex"> Articles récent </span> 
                                    </a>
                                    <a className="menu-item list-group-item container-fluid border-0 py-4 mt-3 d-flex align-items-center" href="#polular-articles"> 
                                        <i className="bi bi-chevron-right mr-3"></i>
                                        <span className="text-center d-flex"> Articles Populaire </span> 
                                    </a>
                                    <a className="menu-item list-group-item container-fluid border-0 py-4 mt-3 d-flex align-items-center" href="#other-articles"> 
                                        <i className="bi bi-chevron-right mr-3"></i>
                                        <span className="text-center d-flex"> Autres articles </span>  
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {}
    };
};