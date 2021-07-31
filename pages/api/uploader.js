export default function handler( req, res ) {
    if ( req.method.toLowerCase() === 'post' ) {
        try{
            if ( !req.files ) {
                return res.send( {
                    status: false,
                    message: 'No file uploaded'
                } );
            } else{
                const
                    profil = req.files.profil;
                    profil.mv( './../../public/img/uploads/' + profil.name );
                return res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: profil.name,
                        mimetype: profil.mimetype,
                        size: profil.size
                    }
                });
            }
        } catch( e ) {
            return res.status( 500 ).send( err );
        }
    }
    return res.status( 200 ).send( 'This app api can\'t be get', { 
        'Content-Type': 'text/plain'
    } );
};