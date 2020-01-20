import React from "react";
import './Page.css';
import Filter from "../filter/Filter";

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    };

    onFilterChange = filterForm => {

    };

    render() {
        return (
            <div className='kabum-page-container mt-4'>
                <Filter brands={['Samsung', 'Acer', 'Nvidia', 'Asus', 'Gigabyte']} onFilterChange={this.onFilterChange}/>
            </div>
        )
    }
}

