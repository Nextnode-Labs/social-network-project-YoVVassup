import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import UsersContainer from "./components/users/UsersContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const App = (props) => {
    return (
        <div className="app-wrapper"> {/*grid-nogutter // убирает промежутки*/}
            <div className="mx-0 mt-0 mb-0 p-1 shadow-4" style={{height: '60px'}}><Header/></div>
            <div className="grid">
            <div className="col-fixed pr-2" style={{width: '200px'}}><Navbar/></div>
                <div className="col mt-2">
                    <div className={'app-wrapper-content'}>
                        <Route path={"/dialogs"}
                               render={() => <DialogsContainer/>}/>
                        <Route path={"/profiles"}
                               render={() => <Profile/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;
