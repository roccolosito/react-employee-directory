import React from 'react';
import './style.css';

function Results(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col"><a onClick={() => props.name.sortByName()}>First Name</a></th>
                    <th scope="col"><a onClick={() => props.name.sortByName()}>Last Name</a></th>
                    <th scope="col">Email</th>
                    <th scope="col">Cell</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((result => (
                    <tr key={result.cell}>
                        <td>
                            <img
                                src={result.picture.thumbnail}
                                alt="{result.name.first + ' ' + result.name.last}"
                                width="25px"
                            />
                        </td>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.email}</td>
                        <td>{result.cell}</td>
                        <td>{result.dob.age}</td>
                    </tr>
                )))};
        </tbody>
        </table>
    );
};

export default Results;