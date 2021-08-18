import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import Navigation from './@nav';

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
        <div className="article-item my-2 px-0 py-2">
            <div className="article-head w-100">
                <div className="article-img w-100">
                    <img src={ img } alt="article-image" className="img-responsive" />
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
                <div className="content-button w-100">
                    <div className="btn more px-0 py-2 d-flex align-items-center">
                        Plus
                        <i className="bi bi-arrow-right ml-2"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const page = 'home';
export default function Home () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <div className="container-fluid header d-flex justify-content-center align-items-center">
                    <div className="d-flex header-icon justify-content-center align-items-center my-4">
                        <Image src="/img/other/africa.svg" layout="fill" />
                    </div>
                    <div className="d-block header-title ml-3"> E-TECH  </div>
                </div>
                <Navigation main={ page } />
                <div className="w-100 content-parts d-flex flex-column">
                    <div className="w-100 part first-part d-flex justify-content-center align-items-center">
                        <div className="part-image d-flex justify-content-center align-items-center">
                            <img src="/img/other/img3.jpg" alt="main" className="img img-main" />
                        </div>
                        <div className="part-data d-flex position-absolute flex-column justify-content-center align-items-center w-100 h-100">
                            <div className="container-fluid text-center part-title">
                                Developement web
                            </div>
                            <div className="container-fluid text-center part-description pt-4 px-5">
                                Les actualités en developement web
                            </div>
                            <div className="container-fluid d-flex justify-content-center pt-2">
                                <div className="btn more mt-4 px-4 py-1 d-flex align-items-center"> 
                                    Plus
                                    <i className="bi bi-arrow-right ml-2"></i> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 part second-part d-flex justify-content-center align-items-center py-5">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <Item img="/img/pres/img1.jpg" title="IOT" />
                                <Item img="/img/pres/img5.jpg" title="INTERNET" />
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
                            <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start">
                                <div className="options mt-2 py-4 d-flex flex-column align-items-center">
                                    <div className="option-title py-4"> Derniers articles </div>
                                    <div className="bar"></div>
                                    <div className="option-items container-fluid py-3">
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img5.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> INTERNET </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img4.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> JAVA </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img6.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> MOBILE </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img1.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> IOT </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid py-4 mt-5">
                                    <div className="search-option d-flex">
                                        <input type="text" name="search" id="search-option" className="pl-3" placeholder="Recherche..." />
                                        <div className="btn d-flex justify-content-center align-items-center">
                                            <i className="bi bi-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="options mt-2 py-4 mt-5 d-flex flex-column align-items-center">
                                    <div className="option-title py-4"> Categories </div>
                                    <div className="bar"></div>
                                    <div className="option-items container-fluid py-3">
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            Mobile
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 4 </div>
                                        </div>
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            IOT
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 6 </div>
                                        </div>
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            Internet
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 3 </div>
                                        </div>
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            PHP
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 9 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid py-4 mt-5 d-flex flex-column justify-content-center align-items-center newsletter sticky">
                                    <div className="title container-fluid py-2"> NewsLetter </div>
                                    <div className="description container-fluid py-2"> Souscrivez pour être au courant de nos prochaines publications </div>
                                    <input type="text" className="my-3 pl-3 py-3 mt-5" placeholder="Votre Email: " />
                                    <div className="btn py-3 mt-4" id="subscribe"> Souscrire </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};