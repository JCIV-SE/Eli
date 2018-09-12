import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props)

		this.state = { query: ''}
		this.onSearchChange = this.onSearchChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  state = {
		query: '',
	}
	
	onSearchChange = e => {
		this.setState({query: e.target.value});
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onChange(this.state.query);
		e.currentTarget.reset();
	}
	
	search = (e) => {
    e.preventDefault()

		let queryData = { fromClient: this.state.query};

		if (queryData.fromClient.length < 1){
			return false;	
		}

    const url = '/api/search';
    const { websites } = this.state;
		const userSearch = { websites };
		
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        websites: JSON.stringify(userSearch),
      },
    })
    .then( res => {
      return res.json()
    })
    .then((json) => {
      console.log('THIS IS DATA BEING RECEIVED', json);
    })
    .catch(err => console.log({err}));
  }

  render() {
		// const { query, errSearch } = this.state
      return (
				<div className="search">
					<div className="search-error-bar">

						<div className="search-error-input-wrapper">
							<input
								className="search-error-input-bar"
								type="text"
								onChange={this.search}
								placeholder="Search Entry"
								// value={query}
							/>
							{/* <button 
								className="searchButton" 
								onClick={this.onSearchChange}
							>
							Find Solutions
							</button> */}
						</div>
					</div>
					{/* <div className="search-error-results">
						<ol className="error-grid"> {
							errSearch.map((errSite) => (
								<li>
									<div>
										<p>{errSite.title}</p>
										<p>{errSite.website}</p>
									</div>
								</li>
							))}
						</ol>
				</div> */}
			</div>
		)
  }
}
