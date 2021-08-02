import axios from "axios";
import cookie from "react-cookie";

export default async function getUserData( key, res ) {
    try{ 
        const 
            auth = `Bearer ${ key }`,
            request = await axios.get( '/currentuser/', {
                mode: 'cors',
                headers: {
                    Authorization: auth
                }
            } ),
            data = request.data;
        return { 
            ...data,
            profil: '/img/user/user1.svg',// axios.defaults.urlImg.concat( data.profile_image ), 
            about: data.about_me 
        };
    } catch( e ){
        res.statusCode = 302;
        return res.setHeader( 'Location', `/sign-in` );
    }
};

export function parseCookies( req ) {
    return cookie.parse( req ? req.headers.cookie || "" : document.cookie );
};

export async function refreshToken( cookies, setCookie ) {
    const 
        data = cookies.data,
        { refresh_token, access_token } = data,
        auth = 'Bearer ' + access_token,
        access = ( await axios.post( '/user/token/refresh/', {
                refresh: refresh_token
            }, {
                headers: {
                    Authorization: auth,
                    'Content-Type': 'application/json'
                }
            } ) ).data.access;
        data.access_token = access;
    return setCookie( 'data', JSON.stringify( data ), {
        maxAge: 3600 * 24,
        path: '/'
    } );
};