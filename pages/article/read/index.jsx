import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../../@nav';

export const page = 'article';
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Home (props) {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/page.css" />
                <link rel="stylesheet" href="/css/article.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <div className="header-page d-flex flex-column py-4">
                    <div className="header-head py-4 pl-0 pl-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                        <i className="bi bi-receipt-cutoff mr-3 header-icon"></i>
                        <span className="header-title"> E-TECH </span>
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
                    <div className="w-100 content-main-data d-flex flex-column justify-content-center align-items-center pt-5 mt-3">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <div className="article d-flex flex-column align-items-center w-100">
                                    <span className="container-fluid py-2 article-title"> { "Nom de l'article" } </span>
                                    <span className="container-fluid py-2 article-subtitle"> { "Sous-title de l'article" } </span>
                                    <div className="author container-fluid d-flex align-items-center mt-3">
                                        <div className="author-head d-flex justify-content-center align-items-center h-100">
                                            <div className="author-icon d-flex justify-content-center align-items-center">
                                                <img src="/img/user/user2.svg" alt="author img" className="img author-icon-img" />
                                            </div>
                                        </div>
                                        <div className="author-body d-flex flex-column justify-content-center align-items-center">
                                            <div className="container-fluid d-flex align-items-center pt-3">
                                                <span className="author-name"> { "Nom de L'auteur" } </span>
                                                <span className="author-follow ml-3">
                                                    <i className="bi bi-bookmark-heart"></i>
                                                </span>
                                            </div>
                                            <div className="share-article d-flex justify-content-center align-items-center pt-1 pb-3">
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
                                    </div>
                                    <div className="article-main-image container-fluid d-flex align-items-center">
                                        <img src="/img/form/form7.jpg" alt="Nom de l'image" className="img article-main-img" />
                                    </div>
                                    <div className="article-body container-fluid py-2 mb-4">
                                        <div className="article-text w-100 my-3">
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
                                        <div className="article-caption w-100 my-4 pt-3 d-flex flex-column"> 
                                            Mauris ac mauris sed pede 
                                            <div className="article-caption-bar mt-3 mb-3"></div>
                                        </div>
                                        <div className="article-image article-image-fluid w-100 d-flex justify-content-center align-items-center my-3" data-title="Nom de l'image">
                                            <img src="/img/form/form12.jpg" alt="Nom de l'image" className="img article-img" />
                                        </div>
                                        <div className="article-text w-100 my-3">
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
                                        <div className="article-image article-video article-image-fluid w-100 d-flex justify-content-center align-items-center my-3" data-title="Nom de l'image">
                                            <img src="/img/form/form8.jpg" alt="Nom de l'image" className="img article-img" />
                                            <div className="pay-box container-fluid position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                                                <div className="pay-icon d-flex justify-content-center align-items-center">
                                                    <i className="bi bi-play-fill ml-2 mt-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="article-list w-100 my-3">
                                            <ul className="w-100 px-0 pl-4 pt-2">
                                                <li className="py-1"> Lorem ipsum dolor sit amet </li>
                                                <li className="py-1"> consectetur adipiscing elit </li>
                                                <li className="py-1"> amet erat. Duis semper </li>
                                                <li className="py-1"> sodales. Vestibulum ante </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2 px-md-4 pb-4 d-flex flex-column align-items-center align-items-md-start article-second-col">
                                <div className="d-flex flex-column container-fluid article-tools py-3 sticky mt-0 mt-md-5">
                                    <div className="w-100 article-tools-head mb-3">
                                        <div className="pt-0 pt-md-3 article-tools-share">
                                            <div className="d-flex-justify-content-center align-items-center share">
                                                <div className="share-box d-flex">
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
                                                    <div className="share-item d-flex justify-content-center align-items-center p-2">
                                                        <a href="#">
                                                            <i className="bi bi-instagram"></i>
                                                        </a>
                                                    </div>
                                                    <div className="share-item d-flex justify-content-center align-items-center p-2">
                                                        <a href="#">
                                                            <i className="bi bi-google"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-4 pl-2 article-tools-data"> 15 mai 2021 </div>
                                        <button className="px-4 py-2 mt-4 mb-3 pl-2 article-follow btn btn-outline d-flex align-items-center"> 
                                            follow 
                                            <i className="ml-2 bi bi-bookmark-heart"></i>
                                        </button>
                                    </div>
                                    <div className="w-100 article-tools-body d-flex justify-content-center align-items-center py-3 pt-3 px-5">
                                        <div className="article-tool-item d-flex align-items-center justify-content-center">
                                            <i className="d-block mr-2 bi bi-suit-heart"></i>
                                            720
                                        </div>
                                        <div className="article-tool-item article-tool-item-chat d-flex align-items-center justify-content-center">
                                            <i className="d-block mr-2 bi bi-chat-fill"></i>
                                            2.3k
                                        </div>
                                    </div>
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