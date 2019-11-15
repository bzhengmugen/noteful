import React from 'react';
import Note from './Note'
export default function NoteFolder(props){
    return(
        <div className='NoteFolder'>
            <button onClick={() => this.props.history.goBack()}>back</button>
            <ul>
            {props.notes.map(note =>
            <li key={note.id}>
                <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
                />
            </li>
            )}
            </ul>
        </div>
    );
}


NoteFolder.defaultProps = {
    history: {
        goBack: () => {}
    }
}