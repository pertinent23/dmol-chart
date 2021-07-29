import axios from "axios";
import cookie from "react-cookie";

export default async function getUserData( key, res ) {
    try{ 
        const 
            auth = 'Bearer '.concat( key ),
            request = await axios.get( '/currentuser/', {
                mode: 'cors',
                headers: {
                    Authorization: auth
                }
            } ),
            data = request.data;
        return { 
            ...data,
            profil: axios.defaults.urlImg.concat( data.profile_image ), 
            about: data.about_me 
        };
    } catch( e ){
        res.statusCode = 302;
        return res.setHeader( 'Location', `/sign-in` );
    }
};

export function parseCookies( req ) {
    return cookie.parse( req ? req.headers.cookie || "" : document.cookie );
}