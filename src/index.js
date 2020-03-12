import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScreenComp from './Screen';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
	<>
		<ScreenComp />
		<Provider store={store}>
			<App />
		</Provider>
	</>, 
	document.getElementById('root')
);

