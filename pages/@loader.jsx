const styles = {
    loader: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0px',
        top: '0px',
        zIndex: 500,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rotor: {
        display: 'block',
        position: 'absolute',
        width: '250px',
        height: '250px',
        borderRadius: '100%',
        border: '3px solid #FFFFFF',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        animationName: "rotate",
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'infinite'
    },
    img: {
        width: '130px'
    }
};

export function getDisplay( _ ) {
    return _ === 'none' ? 'flex' : 'none';  
};

export default function Loader( { children, display } ) {
    return (
        <div className="loader-container d-block">
            <div className='loader' style={ { display: getDisplay( display ), ...styles.loader } } >
                <div className="rotor" style={ styles.rotor }></div>
                <img src="/img/other/loader.svg" alt="loader" style={ styles.img } />
                <style type="text/css">
                    { `@keyframes rotate{
                        0%{
                            transform: rotate( 0deg )
                        }
                        100%{
                            transform: rotate( 360deg )
                        }
                    }` }
                </style>
            </div>
            <div className="page-data" style={{ display: display }}>
                { children }
            </div>
        </div>
    );
};