import React from 'react';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleToDoList from './containers/VisibleToDoList'
import './style.css';

class App extends React.Component {
  render() {
    return (
    	<div class="container">
	      <div className="row">
	        <div className="col s12 m6">
	          <div className="card purple darken-3">
	            <div className="card-content white-text">
	              <span className="card-title">To Do List</span>
	                <AddTodo />
	                <VisibleToDoList />
	                <Footer />
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
     )
  }
}

export default App;
