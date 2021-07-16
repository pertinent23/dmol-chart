import Head from 'next/head';
import { Fragment } from 'react';
import PageRoot from './../@account-root';

function AddData() {
    return (
        <div className="text-light container py-4">
            Account data
        </div>
    );
};

export const page = "account-data";
export default function Index() {
    return (
        <Fragment>
            <PageRoot page={ page }>
                <AddData />
            </PageRoot>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: { }
        }
    };
};