import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from './Component/TopBar/TopBar';
import './App.css'
import HomePage from './Container/HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import ClassRoomPage from './Container/ClassRoomPage/ClassRoomPage';
import ModuleProgress from './Container/ModuleProgress/ModuleProgress';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<TopBar />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage}></Route>
						<Route exact path='/home' component={HomePage}></Route>
						<Route path="/classroom" component={ClassRoomPage} />
						<Route path="/modules" component={ModuleProgress} />
						<Route path="/jobs" />

					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
