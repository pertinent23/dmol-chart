import { Fragment, useState } from 'react';
import { CodeBlock, tomorrowNight, a11yLight, atomOneLight, github, irBlack, anOldHope, hybrid, atomOneDark, googlecode } from "react-code-blocks";
import Reader from './index';
import { SharePage, baseText } from './../../@api';

export const defaultCode = 
`interface Point {
    x: number;
    y: number;
}
  
function formatPoint(p: Point): string {
    let str = 'x:' + p.x;
    str += ', y:' + p.y;
    return str;
}

type Props = {
    message?: string;
    point: Point;
};

class PointLogger extends React.Component<Props> {
    formatMessage = (point: Point, message: string | undefined, ): string =>
        message
            ? message.replace(/({point})/, formatPoint(point))
            : formatPoint(point);

    render() {
        const { message, point } = this.props;
        return <div id="point-logger">{this.formatMessage(point, message)}</div>;
    }
}

const coords = { x: 12, y: 26 };

ReactDOM.render(<PointLogger message="Position {point}" point={coords} />, mountNode);`;

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

export const ArticleCodeTheme = {
    a11yLight: a11yLight,
    atomOneLight: atomOneLight,
    github: github,
    tomorrowNight: tomorrowNight,
    irBlack: irBlack,
    anOldHope: anOldHope,
    hybrid: hybrid,
    atomOneDark: atomOneDark,
    googlecode: googlecode
};

export const ArticleCodeLanguage = {
    abap : "", actionscript: "", ada: "", arduino: "", autoit: "", c: "", clojure: "", cs: "", cpp: "", coffeescript: "", csharp: "",
    css: "", cuda: "", d: "", dart: "", delphi: "", elixir: "", elm: "", erlang: "", fortran: "", foxpro: "", fsharp: "",
    go: "", graphql: "", gql: "", groovy: "", haskell: "", haxe: "", html: "", java: "", javascript: "", json: "", julia: "", jsx: "", 
    js: "", kotlin: "", latex: "", lisp: "", livescript: "", lua: "", mathematica: "", makefile: "", matlab: "", objectivec: "", objective: "", 
    objective: "", objectpascal: "", ocaml: "", octave: "", perl: "", php: "", powershell: "", prolog: "", puppet: "", python: "", qml: "", 
    r: "", racket: "", restructuredtext: "", rest: "", ruby: "", rust: "", sass: "", less: "", scala: "", scheme: "", shell: "", smalltalk: "", 
    sql: "", standardml: "", sml: "", swift: "", tcl: "", tex: "", text: "", tsx: "", ts: "", typescript: "", vala: "", vbnet: "", verilog: "", 
    vhdl: "", xml: "", xquery: "", yaml: ""
};

export const DefaultTheme = {
    lineNumberColor: `#abb2bf`,
    lineNumberBgColor: `red`,
    backgroundColor: `#282c34`,
    textColor: `#000000`,
    substringColor: `#e06c75`,
    keywordColor: `#c678dd`,
    attributeColor: `#98c379`,
    selectorAttributeColor: `#e06c75`,
    docTagColor: `#c678dd`,
    nameColor: `#e06c75`,
    builtInColor: `#e6c07b`,
    literalColor: `#56b6c2`,
    bulletColor: `#61aeee`,
    codeColor: `#abb2bf`,
    additionColor: `#98c379`,
    regexpColor: `#98c379`,
    symbolColor: `#61aeee`,
    variableColor: `#d19a66`,
    templateVariableColor: `#d19a66`,
    linkColor: `#61aeee`,
    selectorClassColor: `#d19a66`,
    typeColor: `#d19a66`,
    stringColor: `#98c379`,
    selectorIdColor: `#61aeee`,
    quoteColor: `#5c6370`,
    templateTagColor: `#abb2bf`,
    deletionColor: `#e06c75`,
    titleColor: `#61aeee`,
    sectionColor: `#e06c75`,
    commentColor: `#5c6370`,
    metaKeywordColor: `#abb2bf`,
    metaColor: `#61aeee`,
    functionColor: `#abb2bf`,
    numberColor: `#d19a66`,
};

export function ArticleCode( { code, language, children, theme } ) {
    return (
        <div className="article-text w-100 my-3">
            <CodeBlock
                text={ code || children || defaultCode }
                language={ language || "javascript" }
                showLineNumbers={ true }
                wrapLines={ true }
                theme={ ArticleCodeTheme[ theme ] || tomorrowNight }
                codeBlock={ true }
            />
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

export function ArticleComment( { setReply } ) {
    const [ replyVisible, setReplyVisible ] = useState( false );
    return (
        <div className="w-100 px-md-3 article-comment py-3 d-flex flex-column">
            <div className="article-comment-author d-flex align-items-start">
                <div className="article-comment-author-icon mx-2 mr-3"></div>
                <div className="article-comment-author-data d-flex flex-column">
                    <div className="article-comment-author-detail d-flex justify-content-between align-items-center">
                        <span className="d-flex align-items-center"> 
                            Author Name 
                            <i className="bi bi-chevron-right ml-2"></i>
                        </span>
                        <span className="d-flex align-items-center"> 10 may 2020 </span>
                    </div>
                    <div className="article-comment-author-comment-container w-100 pt-2">
                        <span className="article-comment-author-comment d-block p-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                        </span>
                    </div>
                    <div className="article-comment-author-option w-100 d-flex pt-1">
                        <div className="article-comment-author-option-item px-3" onClick={ () => setReply( 'Author Name' ) }> reply </div>
                        <div className="article-comment-author-option-item px-3"> like </div>
                    </div>
                </div>
            </div>
            <div className="article-comment-reply-container py-md-3 d-flex flex-column">
                <div className="article-comment-reply-container-bar w-100 d-flex justify-content-end align-items-center">
                    <div className={ "article-comment-reply-bar ".concat( replyVisible ? "open" : "close" ) }></div>
                    <span 
                        className={ "article-comment-reply-switch mx-3 d-flex justify-content-center align-items-center ".concat( replyVisible ? "open" : "close" ) }
                        onClick={ () => setReplyVisible( !replyVisible ) }
                    >
                        <i className="bi bi-chevron-up"></i>
                    </span>
                </div>
                <div className={ "article-comment-reply-list d-flex flex-column pl-4 pl-md-5 ".concat( replyVisible ? "open" : "close" ) }>
                    <div className="article-comment-author d-flex align-items-start my-2">
                        <div className="article-comment-author d-flex align-items-start">
                            <div className="article-comment-author-icon mx-2 mr-3"></div>
                            <div className="article-comment-author-data d-flex flex-column">
                                <div className="article-comment-author-detail d-flex justify-content-between align-items-center">
                                    <span className="d-flex align-items-center"> 
                                        Author Name 
                                        <i className="bi bi-chevron-right ml-2"></i>
                                    </span>
                                    <span className="d-flex align-items-center"> 10 may 2020 </span>
                                </div>
                                <div className="article-comment-author-comment-container w-100 pt-2">
                                    <span className="article-comment-author-comment d-block p-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-comment-author d-flex align-items-start my-2">
                        <div className="article-comment-author d-flex align-items-start">
                            <div className="article-comment-author-icon mx-2 mr-3"></div>
                            <div className="article-comment-author-data d-flex flex-column">
                                <div className="article-comment-author-detail d-flex justify-content-between align-items-center">
                                    <span className="d-flex align-items-center"> 
                                        Author Name 
                                        <i className="bi bi-chevron-right ml-2"></i>
                                    </span>
                                    <span className="d-flex align-items-center"> 10 may 2020 </span>
                                </div>
                                <div className="article-comment-author-comment-container w-100 pt-2">
                                    <span className="article-comment-author-comment d-block p-3">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-comment-author d-flex align-items-start my-2">
                        <div className="article-comment-author d-flex align-items-start">
                            <div className="article-comment-author-icon mx-2 mr-3"></div>
                            <div className="article-comment-author-data d-flex flex-column">
                                <div className="article-comment-author-detail d-flex justify-content-between align-items-center">
                                    <span className="d-flex align-items-center"> 
                                        Author Name 
                                        <i className="bi bi-chevron-right ml-2"></i>
                                    </span>
                                    <span className="d-flex align-items-center"> 10 may 2020 </span>
                                </div>
                                <div className="article-comment-author-comment-container w-100 pt-2">
                                    <span className="article-comment-author-comment d-block p-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function ArticleCommentManager( { liked, setLiked, commentsVisible, setCommentVisible } ) {
    const [ reply, setReply ] = useState( '' );
    return (
        <div className={ "article-comment-container position-fixed justify-content-center w-100 h-100 shadow ".concat( commentsVisible ? "d-flex" : "d-none" ) }>
            <div className="article-comment-container-main w-100 h-100 d-flex flex-column border-left border-right">
                <div className="w-100 d-flex flex-column article-comment-list overflow-auto">
                    <div className="container-fluid article-comment-close-container d-flex justify-content-end pt-2">
                        <i className="bi bi-x article-comment-close" onClick={ () => setCommentVisible( false ) }></i>
                    </div>
                    <div className="article-comment-list-header container-fluid d-flex align-items-center justify-content-center py-5">
                        <i className="bi bi-receipt"></i>
                        <span className="ml-3"> E-TECH </span>
                    </div>
                    <div className="article-comment-list-bar container-fluid d-flex justify-content-between align-items-center border-bottom py-2 sticky">
                        <span className="article-comment-list-bar-user d-flex align-items-center"> 
                            { "nom de l'utilisateur" } 
                            <i className="bi bi-chevron-right ml-2"></i>
                        </span>
                        <span className="article-comment-list-bar-add-like" onClick={ function () {
                            setLiked( !liked );
                        } }>
                            <i className={ "bi bi-hand-thumbs-up".concat( liked ? "-fill" : "" ) }></i>
                        </span>
                    </div>
                    <div className="container-fluid article-comment-list-data d-flex flex-column">
                        <ArticleComment { ...{ setReply } } />
                        <ArticleComment { ...{ setReply } } />
                        <ArticleComment { ...{ setReply } } />
                    </div>
                </div>
                <div className="w-100 d-flex flex-column article-comment-field-container border-top">
                    <div className={ "container-fluid d-flex article-comment-field-reply ".concat( reply ? "open" : "close" ) }>
                        <div className="article-comment-field-reply-content d-flex align-items-center mt-2 px-2 py-1 ml-md-2 ">
                            <span className="article-comment-fiend-reply-destinater pl-2"> { reply } </span>
                            <span className="article-comment-fiend-reply-close ml-3" onClick={ () => setReply( '' ) }>
                                <i className="bi bi-x"></i>
                            </span>
                        </div>
                    </div>
                    <div className="w-100 d-flex article-comment-field-content-input align-items-center py-2">
                        <span className="pt-2 article-comment-close-field px-1 px-md-2 ml-2 ml-md-3">
                            <i className="bi bi-x article-comment-close" onClick={ () => setCommentVisible( false ) }></i>
                        </span>
                        <input type="text" className="article-comment-field ml-1 pl-3" placeholder="Az" />
                        <span className="pt-2 article-comment-send-data mx-2 mx-md-3">
                            <i className="bi bi-telegram"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function ArticleTools( { date, like, comment } ) {
    const 
        [ commentsVisible, setCommentVisible ] = useState( false ),
        [ liked, setLiked ] = useState( false );
    return (
        <Fragment>
            <ArticleCommentManager { ...{ liked, setLiked, commentsVisible, setCommentVisible } } />
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
                    <div className="article-tool-item d-flex align-items-center justify-content-center" onClick={ function () {
                        setLiked( !liked );
                    } }>
                        <i className={ "d-block mr-2 bi bi-heart".concat( liked ? "-fill" : "" ) }></i>
                        { like || "720" }
                    </div>
                    <div className="article-tool-item article-tool-item-chat d-flex align-items-center justify-content-center" onClick={ () => setCommentVisible( true ) }>
                        <i className="d-block mr-2 bi bi-chat"></i>
                        { comment || "2.3k" }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Reader;