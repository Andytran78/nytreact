import React from 'react';
import Search from './children/Search.js';
import Saved from './children/SavedArticles.js';
import Scrape from './utils/Scrape.js';
import {Link, Route, BrowserRouter} from 'react-router-dom';

class Main extends React.Component{
	render(){
		return(
			<div className='container'>
				<div className='jumbotron'>
					<h1>New York Times Scrubber</h1>
				</div>
				<Link to='/'>
				<button className='btn btn-info'>Home</button>
				</Link>
				<Link to='/saved'>
				<button className='btn btn-success'>Saved Articles</button>
				</Link>

				<div>
					<Route exact path='/' component={Search}/>
					<Route path='/saved' component={SavedArticles}/>
				</div>	
			</div>

		);
	}
};

export default Main;