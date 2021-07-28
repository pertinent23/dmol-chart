import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

export const page = 'home';
export default function Home () {
    return (
        <Fragment>
            <Link href="/account/graphs/day" className="text-light"> ici </Link>
        </Fragment>
    );
};