import React, { Component } from 'react';
import Header from '../Header';
import Search from '../Search';
import Results from '../Results';
import API from '../../utils/API';

class MainPage extends Component {
    // equivalent to useState
    state = {
        search: "",
        result: [],
    };

    // When this component mounts, send back the first 40 employee profiles, like useEffect
    componentDidMount() {
        this.searchEmployees();
    };

    searchEmployees = () => {
        API.search()
            .then(res => {
                console.log("RES.data.result: ", res);
                this.setState({ result: res.data.results })
                console.log(this.state.result)
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    };

    // When the form is submitted, search the Random User API for the value of `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    // Function to sort name alphabetically when clicking on table header
    sortByName = () => {
        var alphabetical = this.state.result.sort(comparefunc);
        function comparefunc(a, b) {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            if (nameA > nameB) {
                return 1;
            } else if (nameA < nameB) {
                return -1;
            }
            return 0;
        }
        this.setState({ result: alphabetical });
    }

    handleSearchChange = (event) => {
        event.preventDefault();
        let sorted = event.target.value;
        const filteredList = this.state.result.filter((result) => {
            let values = Object.values(result).join("").toLowerCase();
            return values.indexOf(sorted.toLowerCase()) !== -1;
        })
        this.setState({ result: filteredList });
    };

    render() {
        return (
            <div>
                <Header />
                <Search
                    handleSearchChange={this.handleSearchChange}
                />
                <Results
                    results={this.state.result}
                    sortByName={this.sortByName}
                />
            </div>
        );
    };
};

export default MainPage;