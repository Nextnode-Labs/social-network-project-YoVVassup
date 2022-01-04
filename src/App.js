import React from 'react'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";

import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'> {/*grid-nogutter // убирает промежутки*/}
                <div className='mx-0 mt-0 mb-0 p-1 shadow-4' style={{height: '60px'}}><HeaderContainer/></div>
                <div className='grid'>
                    <div className='col-fixed pr-2' style={{width: '200px'}}><Navbar/></div>
                    <div className='col mt-2'>
                        <div className={'app-wrapper-content'}>
                            <Route path={'/dialogs'}
                                   render={() => <DialogsContainer/>}/>
                            <Route path={'/profile/:userId?'}
                                   render={() => <ProfileContainer/>}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                            <Route path={'/login'} render={() => <LoginPage/>}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
