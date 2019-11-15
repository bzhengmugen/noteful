import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import NoteListNav from './NoteListNav';
import dummnyStore from './dummy-store';
import NoteListMain from './NoteListMain';
import {getNotesForFolder, findNote, findFolder} from './notes-helpers';
import NoteItem from './NoteItem'
import NoteFolder from './NoteFolder';
import Note from './Note'
class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount(){
    setTimeout(() => this.setState(dummnyStore), 500);
  }
  render() {
    const {notes, folders} = this.state;
    return (
      <div className='App'>
        <nav className='app_nav'>
          <Route
            exact path='/'
            component={() => 
            <NoteListNav 
              folders={folders} 
              notes={notes}
            />}
          >

          </Route>
          <Route
            path='/folder/:folderId'
            component={(props) => {
              const {folderId} = props.match.params;
              const folder = getNotesForFolder(notes, folderId);
              return <NoteFolder {...props} notes={folder}/>
            }}
          >

          </Route>
        </nav>
        <header>
        <h1>Noteful</h1>
        
        </header>
        <main className='app_main'>
          <Route
            exact path="/" 
            component={() => <NoteListMain notes={this.state.notes} />}
          >
          
          </Route>
          <Route
            path="/note/:noteId" 
            component={props => {
              const {noteId} = props.match.params;
              const note = findNote(notes, noteId);
              return <NoteItem {...props} note={note} />
            
            }}
          />
          
                
        </main>
      </div>
    );
  }
}
export default App;

