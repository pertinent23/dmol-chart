import AccountRoot from "./../@account-root";
import Link from "next/link";

export function PageNavItem( { icon, name, href, active } ) {
    return (
        <Link href={ "/account/more/".concat( href ) }>
            <div className={ "d-flex align-items-center page-nav-item px-3 px-md-4 py-3 ".concat( href === active ? "active" : "" ) }>
                <i className={ "mr-1 bi bi-".concat( icon ) }></i>
                { name }
            </div>
        </Link>
    );
};

export function PageNav( { active } ) {
    return (
        <div className="page-nav w-100 d-flex align-items-center overflow-auto mb-4 sticky border-bottom">
            <PageNavItem icon="receipt" name="Mes articles" href="article" { ...{ active } } />
            <PageNavItem icon="hand-thumbs-up" name="Mentions j'aime" href="like" { ...{ active } } />
            <PageNavItem icon="journal-bookmark" name="Mes commentaies" href="comment" { ...{ active } } />
        </div>
    );
};

export const Titles = {
    article: 'Mes articles',
    like: "Mention j'aime",
    comment: "Mes commetaires"
};

export const Contents = {
    article() {
        return;
    },
    like() {
        return;
    },
    comment() {
        return;
    },
    default() {
        return (
            <div className="mt-5 px-5 py-5 none-items d-flex justify-content-center align-items-start w-100">
                <div className="d-flex justify-content-center align-items-center">
                    <i className="bi bi-hourglass-split mr-2"></i>
                    Aucun elements pour le moment
                </div>
            </div>
        );
    }
}

export default function AccountMore( { page } ) {
    return (
        <AccountRoot id="more" icon="columns" title={ Titles[ page ] }>
            <div className="d-flex justify-content-center mx-2 mx-sm-3 mx-md-4 mb-4 field profil-container">
                <img src="/img/pres/tissu.jpg" alt="back" className="img profil-container-back" />
                <div className="profil-img-container d-flex justify-content-center align-items-center">
                    <img src="/img/user/user1.svg" alt="profil image" className="img profil-img" />
                </div>
            </div>
            <div className="w-100 pb-3 field-list">
                <div className="d-flex flex-column justify-content-center align-items-start mx-2 mx-sm-3 mx-md-4">
                    <PageNav active={ page } />
                    { Contents[ page ]() || Contents.default() }
                </div>
            </div>
        </AccountRoot>
    );
};

export async function getServerSideProps( context ) {
    const 
        { page } = context.query;
    return {
        props: {
            page
        }
    };
};