import Root from './@root';

export const baseText = `
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
`;

export const keys = {
    TWITTER_SECRET: "",
    TWITTER_PUPLIC: "",
    FACEBOOK: "896731337930498",
    GOOGLE: "584173251969-2mhb55ak9nrh5bseb58paf4g7jv0js10.apps.googleusercontent.com"
};

export function ShareForArticleItem() {
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

export function ArticleItem( { img, title, by, date, comment, tags, data, like } ) {
    return (
        <div className="article-item my-2 px-2 py-2 w-100">
            <div className="article-head w-100">
                <div className="article-img w-100 overflow-hidden">
                    <img src={ img } alt="article-image" className="img-responsive w-100" />
                    <ShareForArticleItem/>
                </div>
            </div>
            <div className="article-body w-100 px-2">
                <div className="article-title py-2 pt-3"> { title } </div>
                <div className="article-details d-flex align-items-center py-2">
                    <div className="detail-item d-flex align-items-center"> { by || "By antony" } </div>
                    <div className="detail-item d-flex align-items-center"> { date || "15/06/2015" } </div>
                    <div className="detail-item d-flex align-items-center">
                        <i className="bi bi-chat-right-quote-fill d-flex align-items-center"></i>
                        { comment || "03" } comment
                    </div>
                    <div className="detail-item d-flex align-items-center">
                        <i className="bi bi-tags-fill"></i>
                        { tags || "Lorem,ipsum,dolor" }
                    </div>
                </div>
                <div className="article-data py-2">
                    { data || baseText }
                </div>
                <div className="content-button w-100 d-flex justify-content-between align-items-center">
                    <div className="btn more px-0 py-2 d-flex align-items-center">
                        Plus
                        <i className="bi bi-arrow-right ml-2"></i>
                    </div>
                    <div className="infos d-flex align-items-center">
                        <div className="info-item px-2 d-flex align-items-center">
                            <i className="mr-1 bi bi-heart"></i>
                            { like || "2k" }
                        </div>
                        <div className="info-item px-2 d-flex align-items-center">
                            <i className="mr-1 bi bi-chat-right-text-fill"></i>
                            { comment || "250" }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function SharePage() {
    return (
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
    );
};

export function PageHeader( { icon, title } ) {
    return (
        <div className="header-page d-flex flex-column py-4">
            <div className="header-head py-4 pl-0 pl-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                <i className={ `bi mr-3 header-icon bi-${ icon }` }></i>
                <span className="header-title"> { title } </span>
            </div>
            <div className="header-body d-flex justify-content-center py-3 py-md-4">
                <SharePage />
            </div>
        </div>
    );
};

export default Root;