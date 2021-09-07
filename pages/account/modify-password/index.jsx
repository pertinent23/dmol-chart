import AccountRoot from "./../@account-root";
import { useState } from "react";

export function Field( { name, value, placeholder, type } ) {
    const [ final, setFinal ] = useState( value || '' );
    return (
        <div className="d-flex flex-column justify-content-center align-items-start mx-2 mx-sm-3 mx-md-4 field mb-3 pb-2 field-item shadow">
            <div className="field-head d-flex align-items-center w-100 pb-2 pt-4">
                <i className="bi bi-chevron-right mx-3"></i>
                { name }
            </div>
            <div className="field-body d-flex pl-3 pl-sm-4 pl-md-5 pr-2">
                <input 
                    type={ type } 
                    name={ placeholder } 
                    value={ final } 
                    onChange={ e => setFinal( e.target.value ) }  
                    className="field-input pl-3 mr-4 mb-2"
                />
            </div>
        </div>
    );
};

export default function AccountModifyPassword() {
    const 
        [ loader, setLoader ] = useState( false ),
        [ error, setError ] = useState( "" );
    return (
        <AccountRoot id="modify-pass" icon="shield-lock-fill" title="mon mot de passe">
            <div className="d-flex justify-content-center mx-2 mx-sm-3 mx-md-4 mb-4 field profil-container">
                <img src="/img/pres/tissu.jpg" alt="back" className="img profil-container-back" />
                <div className="profil-img-container d-flex justify-content-center align-items-center">
                    <img src="/img/user/user1.svg" alt="profil image" className="img profil-img" />
                </div>
            </div>
            <div className="w-100 py-3 field-list">
                <Field type="password" placeholder="old-pass" name="Ancien mot de passe" value="" />
                <Field type="password" placeholder="new-pass1" name="Nouveau mot de passe" value="" />
                <Field type="password" placeholder="new-pass2" name="Nouveau mot de passe" value="" />
                <div className="error container-fluid pt-4 d-flex justify-content-center align-items center text-danger">
                    { error }
                </div>
                <div className="container-fluid pt-4 d-flex justify-content-center align-items center content-button">
                    <div className="btn submit-data d-flex align-items-center" onClick={ () => setLoader( !loader ) }>
                        <div className={ "spinner-border text-light mr-3 ".concat( loader ? "d-flex" : "d-none" ) } role="status">
                            <span className="sr-only"></span>
                        </div> 
                        Envoyer 
                        <i className="bi bi-clipboard-check ml-2"></i>
                    </div>
                </div>
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