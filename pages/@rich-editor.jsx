import { useState } from "react";

export const styles = {
    editorField: {
        border: '1px solid #DDDDDD',
        outline: 'none',
        borderRadius: '3px',
        backgroundColor: '#F8F8F8',
        minHeight: '200px',
        userSelect: 'all',
        letterSpacing: '0.13em',
        fontSize: '0.9em'
    },
    editor: {
        backgroundColor: "#FFFFFF",
        borderRadius: '5px'
    },
    editorButtonsContainer: {
        flexWrap: 'wrap'
    },
    editorButton: {
        border: '1px solid #DDDDDD',
        borderRadius: '5px',
        fontSize: '20px'
    }
};


export const BUTTONS_POSITION = {
    BOTTOM: 'flex-column-reverse',
    TOP: 'flex-column'
};


export const EditorButton = {
    extends: {
        createNode( style, type ) {
            const 
                node = document.createElement( type || 'span' );
                node.contentEditable = true;
                    style.display = 'inline-block';
                    style.position = 'relative';
                    style.userSelect = "text";
                    for( let item in style ) 
                        node.style[ item ] = style[ item ];
            return node;
        },
        replaceText( chars, node, range, parent ) {
            let 
                newNode = node.cloneNode( true );
                newNode.textContent = chars.shift();
                range.insertNode( newNode );
                const 
                    next = newNode.nextSibling;
                        for( const item of chars ) {
                            newNode = node.cloneNode();
                            newNode.textContent = item;
                            parent.insertBefore( newNode, next );
                        }
            return parent;
        },
        getDefaulOnPress( detail, style ) {
            return function () {
                if ( detail.text ) {
                    const 
                        range = detail.range,
                        node = EditorButton.extends.createNode( style ),
                        chars = detail.text.split( '' );
                        /*node.textContent = detail.text;
                            range.deleteContents();
                            range.insertNode( node );*/
                            EditorButton.extends.replaceText( chars, node, range, detail.parent );
                    return true;
                }
            };
        }
    },
    Button( { icon, onPress, style, compact } ) {
        return (
            <div 
                className="editor-button d-flex justify-content-center align-items-center py-1 px-2 m-1" 
                onClick={ onPress }
                style={ compact( styles.editorButton, style ) }
            >
                <i className={ "bi bi-".concat( icon ) }></i>
            </div>
        );
    },
    Bold( { detail, style, compact } ) {
        return (
            <EditorButton.Button
                { ...{ style, compact } } 
                icon="type-bold"
                onPress={ EditorButton.extends.getDefaulOnPress( detail, {
                    fontWeight: 'bold'
                } ) }
            />
        )
    },
    Italic( { detail, style, compact } ) {
        return (
            <EditorButton.Button
                { ...{ style, compact } } 
                icon="type-italic"
                onPress={ EditorButton.extends.getDefaulOnPress( detail, {
                    fontStyle: 'italic'
                } ) }
            />
        )
    }
};

export function Editor( { buttons, buttonPosition, placeholder, style } ) {
    const 
        [ detail, setDetail ] = useState( {
            text: ''
        } ),
        css = style || {},
        compact = ( obj1, obj2 ) => {
            if ( typeof obj2 === 'object' ) {
                for( let item in obj2 )
                    obj1[ item ] = obj2[ item ];
            }
            return obj1;
        },
        getButtons = ( list ) => {
            let i = 0;
            const 
                result = [];
                    for( const Item of list ) 
                        result.push( <Item { ...{ detail, compact } } style={ css.editorButton } key={ i++ } /> );
            return result;
        },
        selectHandle = ( e ) => {
            const 
                selection = document.getSelection() || window.getSelection(),
                text = selection.toString(),
                range = selection.getRangeAt( 0 );
            return !text ? '' : setDetail( {
                text,
                range,
                selection,
                parent: e.target
            } );

        }; 
    return (
        <div 
            className={ "container-fluid py-1 px-2 rich-editor border d-flex align-items-center ".concat( buttonPosition || BUTTONS_POSITION.TOP ) }
            style={ compact( styles.editor, css.editor ) }
        >
            <div 
                className="w-100 py-1 rich-editor-buttons-container d-flex justify-content-start align-items-center" 
                style={ compact( styles.editorButtonsContainer, css.editorButtonsContainer ) }
            >
                { getButtons( buttons || [ ] ) }
            </div>
            <div className="w-100 py-1 rich-editor-field-container" contentEditable={ false }>
                <div 
                    className="rich-editor-field w-100 p-1 pl-2 pt-2 pl-md-3 pt-md-3" 
                    contentEditable={ true } 
                    suppressContentEditableWarning={ true } 
                    style={ compact( styles.editorField, css.editorField ) }
                    onSelect={ selectHandle }
                    onMouseDown={ () => setDetail( {
                        text: ''
                    } ) }

                >
                    <div>{ placeholder || 'Az' }</div>
                </div>
            </div>
        </div>
    );  
};


export default function Demo() {
    return (
        <div className="rich-text-editor-demo container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="main-editor-container d-flex justify-content-center align-items-center py-4" style={ { maxWidth: "600px", flex: 1 } }>
                <Editor 
                    buttonPosition={ BUTTONS_POSITION.BOTTOM } 
                    buttons={ [
                        EditorButton.Bold,
                        EditorButton.Italic
                    ] }
                />
            </div>
        </div>
    );   
};