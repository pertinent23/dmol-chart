import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from './../@nav';
import Link from 'next/link';
import { PageHeader } from '../@api';


export function Item( { title, children  } ) {
    return (
        <div className="col-12 col-md-6 col-lg-4 category-item d-flex justify-content-center align-items-center p-2">
            <div className="category-item-box d-flex flex-column shadow border">
                <div className="category-design">
                    <div className="category-design-item d-flex justify-content-center align-items-center">
                        <i className="bi bi-columns-gap"></i>
                    </div>
                </div>
                <div className="title pl-3 py-3 py-md-4 d-flex align-items-center">
                    <i className="bi bi-chevron-right mr-2 mr-md-3"></i>
                    { title }
                </div>
                <div className="category-content-box pb-5 pt-2 px-3 d-flex">
                    { children }
                </div>
            </div>
        </div>
    );
};

export function SubItem( { name, link } ) {
    return (
        <Link href={ link }>
            <a className="catrgory-content-box-item"> { name } </a>
        </Link>
    );
};

export const page = 'category';
export default function Category() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/page.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <PageHeader icon="columns-gap" title="Categories" />
                <Navigation main={ page } />
                <div className="content-category-items w-100">
                    <div className="w-100 px-0 py-3">
                        <div className="row mx-0">
                            <Item title="Programmation">
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                                <SubItem name="HTML" link="#" />
                                <SubItem name="JavaScript" link="#" />
                                <SubItem name="jQuery" link="#" />
                                <SubItem name="Laravel" link="#" />
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                                <SubItem name="HTML" link="#" />
                                <SubItem name="JavaScript" link="#" />
                                <SubItem name="jQuery" link="#" />
                                <SubItem name="Laravel" link="#" />
                            </Item>
                            <Item title="Mobile">
                                <SubItem name="Flutter" link="#" />
                                <SubItem name="Notification" link="#" />
                                <SubItem name="Kivy" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="Kotlin" link="#" />
                                <SubItem name="Swift" link="#" />
                                <SubItem name="Android" link="#" />
                                <SubItem name="Objective-c" link="#" />
                                <SubItem name="MAC-OS" link="#" />
                                <SubItem name="WINDONS MOBILE" link="#" />
                                <SubItem name="Flutter" link="#" />
                                <SubItem name="Notification" link="#" />
                                <SubItem name="Kivy" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="Kotlin" link="#" />
                            </Item>
                            <Item title="IOT">
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                                <SubItem name="HTML" link="#" />
                                <SubItem name="JavaScript" link="#" />
                                <SubItem name="jQuery" link="#" />
                                <SubItem name="Laravel" link="#" />
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                                <SubItem name="HTML" link="#" />
                                <SubItem name="JavaScript" link="#" />
                                <SubItem name="jQuery" link="#" />
                                <SubItem name="Laravel" link="#" />
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                            </Item>
                            <Item title="Cyber">
                                <SubItem name="Flutter" link="#" />
                                <SubItem name="Notification" link="#" />
                                <SubItem name="Kivy" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="Kotlin" link="#" />
                                <SubItem name="Swift" link="#" />
                                <SubItem name="Android" link="#" />
                                <SubItem name="Objective-c" link="#" />
                                <SubItem name="MAC-OS" link="#" />
                                <SubItem name="WINDONS MOBILE" link="#" />
                                <SubItem name="Flutter" link="#" />
                                <SubItem name="Notification" link="#" />
                                <SubItem name="Kivy" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="Kotlin" link="#" />
                            </Item>
                            <Item title="Internet">
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                                <SubItem name="HTML" link="#" />
                                <SubItem name="JavaScript" link="#" />
                                <SubItem name="jQuery" link="#" />
                                <SubItem name="Laravel" link="#" />
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                                <SubItem name="HTML" link="#" />
                                <SubItem name="JavaScript" link="#" />
                                <SubItem name="jQuery" link="#" />
                                <SubItem name="Laravel" link="#" />
                                <SubItem name="PHP" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="CSS" link="#" />
                            </Item>
                            <Item title="IA">
                                <SubItem name="Flutter" link="#" />
                                <SubItem name="Notification" link="#" />
                                <SubItem name="Kivy" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="Kotlin" link="#" />
                                <SubItem name="Swift" link="#" />
                                <SubItem name="Android" link="#" />
                                <SubItem name="Objective-c" link="#" />
                                <SubItem name="MAC-OS" link="#" />
                                <SubItem name="WINDONS MOBILE" link="#" />
                                <SubItem name="Flutter" link="#" />
                                <SubItem name="Notification" link="#" />
                                <SubItem name="Kivy" link="#" />
                                <SubItem name="JAVA" link="#" />
                                <SubItem name="Kotlin" link="#" />
                            </Item>
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