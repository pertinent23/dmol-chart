import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from '../account/@account-root';
import getUserData from '../account/@request';

function AddData() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/private/account.data.css" />
            </Head>
            <div className="container-fluid py-3">
                <span className="text-light"> test </span>
            </div>
        </Fragment>
    );
};

export const page = "admin";
export default function Index( { user }) {
    return (
        <Fragment>
            <PageRoot page={ page } userdata={ user }>
                <AddData />
            </PageRoot>
        </Fragment>
    );
};

export async function getServerSideProps() {
    const user = await getUserData();
    return {
        props: {
            user
        }
    };
};