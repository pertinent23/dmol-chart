import AccountRoot from "./@account-root";

export function Field( { name, value } ) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-start mx-2 mx-sm-3 mx-md-4 field mb-3 pb-2 field-item shadow">
            <div className="field-head d-flex align-items-center w-100 pb-2 pt-4">
                <i className="bi bi-chevron-right mx-3"></i>
                { name }
            </div>
            <div className="field-body pl-5 pr-2">
                { value }
            </div>
        </div>
    );
};

export default function AccountHome() {
    return (
        <AccountRoot id="home" icon="bricks" title="Profile">
            <div className="d-flex justify-content-center mx-2 mx-sm-3 mx-md-4 mb-4 field profil-container">
                <img src="/img/pres/tissu.jpg" alt="back" className="img profil-container-back" />
                <div className="profil-img-container d-flex justify-content-center align-items-center">
                    <img src="/img/user/user1.svg" alt="profil image" className="img profil-img" />
                </div>
            </div>
            <div className="w-100 py-3 field-list">
                <Field name="A propos de moi" value="Nom de l'utilisateur" />
                <Field name="Nom" value="Nom de l'utilisateur" />
                <Field name="Email" value="Email de l'utilisateur" />
                <Field name="Profession" value="Profession de l'utilisateur" />
                <div className="container-fluid d-flex justify-content-center align-items-center secured py-3 py-md-5 mt-5">
                    <i className="bi bi-shield-lock-fill mr-3"></i>
                    Informations protégées
                </div>
            </div>
        </AccountRoot>
    );
};

export async function getServerSideProps() {
    return {
        props: {}
    };
};