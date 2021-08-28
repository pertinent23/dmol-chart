import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../@nav';
import Link from 'next/link';

export function Share() {
    return (
        <div className="d-flex-justify-content-center align-items-center position-absolute w-100 h-100 share">
            <div className="share-box d-flex position-absolute">
                <div className="share-item d-flex justify-content-center align-items-center p-2">
                    <i className="bi bi-reply-fill"></i>
                </div>
                <div className="share-item d-flex justify-content-center align-items-center p-2">
                    <a href="#">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
                <div className="share-item d-flex justify-content-center align-items-center p-2">
                    <a href="#">
                        <i className="bi bi-twitter"></i>
                    </a>
                </div>
                <div className="share-item d-flex justify-content-center align-items-center p-2">
                    <a href="#">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );  
};

export function Item( { img, title } ) {
    return (
        <div className="article-item my-2 px-2 py-2 w-100">
            <div className="article-head w-100">
                <div className="article-img w-100 overflow-hidden">
                    <img src={ img } alt="article-image" className="img-responsive w-100" />
                    <Share/>
                </div>
            </div>
            <div className="article-body w-100 px-2">
                <div className="article-title py-2 pt-3"> { title } </div>
                <div className="article-details d-flex align-items-center py-2">
                    <div className="detail-item d-flex align-items-center"> By antony </div>
                    <div className="detail-item d-flex align-items-center"> 15/06/2015 </div>
                    <div className="detail-item d-flex align-items-center">
                        <i className="bi bi-chat-right-quote-fill d-flex align-items-center"></i>
                        03 comment
                    </div>
                    <div className="detail-item d-flex align-items-center">
                        <i className="bi bi-tags-fill"></i>
                        Lorem,ipsum,dolor
                    </div>
                </div>
                <div className="article-data py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                    Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                    Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
                    Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit 
                    amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
                    Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. 
                    Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit 
                    sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                    Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam 
                    sodales hendrerit.
                </div>
                <div className="content-button w-100 d-flex justify-content-between align-items-center">
                    <div className="btn more px-0 py-2 d-flex align-items-center">
                        Plus
                        <i className="bi bi-arrow-right ml-2"></i>
                    </div>
                    <div className="infos d-flex align-items-center">
                        <div className="info-item px-2 d-flex align-items-center">
                            <i className="mr-1 bi bi-heart"></i>
                            2k
                        </div>
                        <div className="info-item px-2 d-flex align-items-center">
                            <i className="mr-1 bi bi-chat-right-text-fill"></i>
                            250
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function TitleItem( { id, name } ) {
    return (
        <div className="article-item d-flex flex-column w-100 justify-content-start align-items-start" id={ id }>
            <div className="list-title ml-2 pt-4 nav-link"> { name } </div>
            <div className="list-bar mt-4 ml-2 mb-5"></div>
        </div>
    );
};

export const page = 'article';
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Home (props) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
                <link rel="stylesheet" href="/css/page.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <div className="header-page d-flex flex-column py-4">
                    <div className="header-head py-4 pl-0 pl-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                        <i className="bi bi-receipt mr-3 header-icon"></i>
                        <span className="header-title"> ARTICLES </span>
                    </div>
                    <div className="header-body d-flex justify-content-center py-3 py-md-4">
                        <div className="d-flex-justify-content-center align-items-center share">
                            <div className="share-box d-flex">
                                <div className="share-item d-flex justify-content-center align-items-center p-2 p-sm-3 p-md-4 m-sm-1 m-md-2">
                                    <i className="bi bi-reply-fill"></i>
                                </div>
                                <div className="share-item d-flex justify-content-center align-items-center p-2 p-sm-3 p-md-4 m-sm-1 m-md-2">
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </div>
                                <div className="share-item d-flex justify-content-center align-items-center p-2 p-sm-3 p-md-4 m-sm-1 m-md-2">
                                    <a href="#">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </div>
                                <div className="share-item d-flex justify-content-center align-items-center p-2 p-sm-3 p-md-4 m-sm-1 m-md-2">
                                    <a href="#">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                                <div className="share-item d-flex justify-content-center align-items-center p-2 p-sm-3 p-md-4 m-sm-1 m-md-2">
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                                <div className="share-item d-flex justify-content-center align-items-center p-2 p-sm-3 p-md-4 m-sm-1 m-md-2">
                                    <a href="#">
                                        <i className="bi bi-google"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation main={ page } />
                <div className="w-100 content-parts d-flex flex-column">
                    <div className="w-100 part second-part d-flex flex-column justify-content-center align-items-center pt-5 mt-3">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <TitleItem id="recent-articles" name="Articles recents" />
                                <Item img="/img/pres/img1.jpg" title="IOT" />
                                <TitleItem id="polular-articles" name="Articles populaire" />
                                <Item img="/img/pres/img5.jpg" title="INTERNET" />
                                <TitleItem id="other-articles" name="Autres articles" />
                                <Item img="/img/pres/img4.jpg" title="JAVA" />
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