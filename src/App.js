import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const App = (props) => {

    return (
            <div className="app-wrapper p-grid"> {/*p-nogutter // убирает промежутки*/}
                <div className="p-col-12 p-shadow-12" style={{height:'60px'}}><Header/></div>
                <div className="p-col-fixed" style={{ width: '200px'}}><Navbar/></div>
                <div className="p-col">
                    <div className={'app-wrapper-content'}>
                        <Route path={"/dialogs"}
                               render={() => <Dialogs
                                   store={props.store}/>}/>
                        <Route path={"/profiles"}
                               render={() => <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch} />}/>
                        <Route path={"/news"} render={() => <News />}/>
                        <Route path={"/music"} render={() => <Music />}/>
                        <Route path={"/settings"} render={() => <Settings />}/>
                    </div>
                </div>
            </div>
    )
}
export default App;
