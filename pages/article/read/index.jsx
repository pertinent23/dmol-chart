import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../../@nav';
import { PageHeader } from './../../@api';
import { 
    ArticleTitle, ArticleSubTitle, ArticleAuthor, ArticleImage, ArticleVideo, 
    ArticleText, ArticleMainImage, ArticleCaption, ArticleList, ArticleTools,
    ArticleCode
} from './@components';

export const page = 'article';
export default function ReadArticle() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/page.css" />
                <link rel="stylesheet" href="/css/article.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <PageHeader icon="receipt-cutoff" title="E-TECH" />
                <Navigation main={ page } />
                <div className="w-100 content-parts d-flex flex-column">
                    <div className="w-100 content-main-data d-flex flex-column justify-content-center align-items-center pt-5 mt-3">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <div className="article d-flex flex-column align-items-center w-100">
                                    <ArticleTitle />
                                    <ArticleSubTitle />
                                    <ArticleAuthor />
                                    <ArticleMainImage src="/img/form/form7.jpg" />
                                    <div className="article-body container-fluid py-2 mb-4">
                                        <ArticleText />
                                        <ArticleCaption caption="Mauris ac mauris sed pede" undeline />
                                        <ArticleImage src="/img/form/form12.jpg" />
                                        <ArticleText />
                                        <ArticleVideo image="/img/form/form8.jpg" />
                                        <ArticleList list={ [
                                            'Lorem ipsum dolor sit amet',
                                            'consectetur adipiscing elit',
                                            'amet erat. Duis semper',
                                            'sodales. Vestibulum ante'
                                        ] } />
                                        <ArticleCode language="jsx" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2 px-md-4 pb-4 d-flex flex-column align-items-center align-items-md-start article-second-col">
                                <ArticleTools />
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