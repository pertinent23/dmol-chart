import { Fragment } from 'react';
import Reader from './index';
import { SharePage, baseText } from './../../@api';

export function ParticularShare() {
    return (
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
    );
};

export function ArticleText( { text, children } ) {
    return (
        <div className="article-text w-100 my-3">
            { text || children || baseText }
        </div>
    );  
};

export function ArticleTitle( { title, children } ) {
    return (
        <span className="container-fluid py-2 article-title"> 
            { title || children || "Nom de l'article" } 
        </span>
    );
};

export function ArticleSubTitle( { title, children } ) {
    return (
        <span className="container-fluid py-2 article-subtitle">
            { title || children || "Sous-title de l'article" }
        </span>
    );
};

export function ArticleAuthor( { profil, name } ) {
    return (
        <div className="author container-fluid d-flex align-items-center mt-3">
            <div className="author-head d-flex justify-content-center align-items-center h-100">
                <div className="author-icon d-flex justify-content-center align-items-center">
                    <img src={ profil || "/img/user/user2.svg" } alt="author img" className="img author-icon-img" />
                </div>
            </div>
            <div className="author-body d-flex flex-column justify-content-center align-items-center">
                <div className="container-fluid d-flex align-items-center pt-3">
                    <span className="author-name"> { name || "Nom de L'auteur" } </span>
                    <span className="author-follow ml-3">
                        <i className="bi bi-bookmark-heart"></i>
                    </span>
                </div>
                <div className="share-article d-flex justify-content-center align-items-center pt-1 pb-3">
                    <SharePage />
                </div>
            </div>
        </div>
    );  
};

export function ArticleCaption( { caption, children, undeline } ) {
    return (
        <div className="article-caption w-100 my-4 pt-3 d-flex flex-column"> 
            { caption || children || "Titre" }
            { undeline && <div className="article-caption-bar mt-3 mb-3"></div> }
        </div>
    );
};

export function ArticleList( { ordered, list, type, position } ) {
    let i = 0;
    const 
        getList = ( list ) => {
            return list.map( ( val ) => (
                <li className="py-1" key={ i++ }>
                    { val }
                </li>
            ) );
        },
        Wrapper = ( { className, style, children  } ) => {
            return ordered ? (
                <ol { ...{ className, style } }> 
                    { children } 
                </ol>
            ) : (
                <ul { ...{ className, style } }> 
                    { children }
                </ul>
            );
        };
    return (
        <div className="article-list w-100 my-3">
            <Wrapper 
                className="w-100 px-0 pl-4 pt-2" 
                style={ {
                    listStyleType: type,
                    listStylePosition: position
                } }
            >
                { getList( list || [ ] ) } 
            </Wrapper>
        </div>
    );  
};

export const ArticleListPositions = {
    INSIDE: 'inside',
    OUTSIDE: 'outside'
};

export const ArticleListImage = ( src ) => (
    `url( ${ src } )`
);

export const ArticleListType = {
    SPACE_COUNTER: 'space-counter',
    DISC: 'disc',
    CIRCLE: 'circle',
    GEORGEAN: 'georgian',
    DECIMAL: 'decimal',
    DECIMAL_LEADING_ZERO: 'decimal-leading-zero',
    LOWER_ROMAN: 'lower-roman',
    UPPER_ROMAN: 'upper-roman',
    LOWER_GREEK: 'lower-greek',
    LOWER_ALPHA: 'lower-alpha',
    UPPER_ALPHA: 'upper-alpha',
};

export function ArticleImage( { src, alt, children, className } ) {
    alt = alt || "Nom de l'image";
    return (
        <Fragment>
            <div className={ "article-image article-image-fluid w-100 d-flex justify-content-center align-items-center my-3 ".concat( className || "" ) } data-title={ alt }>
                <img { ...{ src, alt } } className="img article-img" />
                { children }
            </div>
        </Fragment>
    );
};

export function ArticleMainImage( { src, alt } ) {
    alt = alt || "Nom de l'image";
    return (
        <div className="article-main-image container-fluid d-flex align-items-center">
            <img { ...{ src, alt } } className="img article-main-img" />
        </div>
    );
};

export function ArticleVideo( { alt, image, video } ) {
    const src = image;
    return (
        <Fragment>
            <ArticleImage { ...{ src, alt } } className="article-video" >
                <div className="pay-box container-fluid position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <div className="pay-icon d-flex justify-content-center align-items-center">
                        <i className="bi bi-play-fill ml-2 mt-1"></i>
                    </div>
                </div>
            </ArticleImage>
        </Fragment>
    );
};

export function ArticleTools( { date, like, comment } ) {
    return (
        <div className="d-flex flex-column container-fluid article-tools py-3 sticky mt-0 mt-md-5">
            <div className="w-100 article-tools-head mb-3">
                <div className="pt-0 pt-md-3 article-tools-share">
                    <div className="d-flex-justify-content-center align-items-center share">
                        <ParticularShare />
                    </div>
                </div>
                <div className="pt-4 pl-2 article-tools-data"> { date || "15 mai 2021" } </div>
                <button className="px-4 py-2 mt-4 mb-3 pl-2 article-follow btn btn-outline d-flex align-items-center"> 
                    follow 
                    <i className="ml-2 bi bi-bookmark-heart"></i>
                </button>
            </div>
            <div className="w-100 article-tools-body d-flex justify-content-center align-items-center py-3 pt-3 px-5">
                <div className="article-tool-item d-flex align-items-center justify-content-center">
                    <i className="d-block mr-2 bi bi-suit-heart"></i>
                    { like || "720" }
                </div>
                <div className="article-tool-item article-tool-item-chat d-flex align-items-center justify-content-center">
                    <i className="d-block mr-2 bi bi-chat-fill"></i>
                    { comment || "2.3k" }
                </div>
            </div>
        </div>
    );
};

export default Reader;