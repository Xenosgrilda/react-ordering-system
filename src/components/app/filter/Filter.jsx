import React from "react";
import './Filter.css';

import TextInputIcon from "../../forms/TextInputIcon";
import CheckBox from "../../forms/CheckBox";

export default class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                search: {
                    value: ''
                },
                brands: props.brands.map( brand => { return { name: brand.toLowerCase(), brand: brand, value: false} } )
            }
        };
    }

    changeHandler(e){
        const { name, value } = e.target;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        })
    }

    changeCheckboxHandler = e =>{
        const { name } = e.target;
        const brands = [ ...this.state.formControls.brands ];

        let i = null;
        const [ brand ] = brands.filter( (b, index) => {
            if (b.name === name){
                i = index;
                return b;
            }

            return null;
        });

        brand.value = !brand.value;
        brands[i] = brand;

        console.log(brands);

        this.setState({
            formControls: {
                ...this.state.formControls,
                brands: brands
            }
        });
    };

    render() {
        const{ brands } = this.state.formControls;
        return (
        <div className='kabum-page-filter'>
            <span className='kabum-page-filter-title'>Filtros</span>
            <form>
                <div className='form-group mt-4'>
                    <label className='mb-2' htmlFor='search-item'>Buscar</label>
                    <TextInputIcon name='search' value={this.state.search}
                       onChange={this.changeHandler} id="search-item" placeholder="GeForce GTX..."/>
                </div>

                <div className='form-group mt-4'>
                    <div className='mb-2'>Marcas</div>
                    {brands && brands.length > 0 ? brands.map( (brand, i) => {
                        return (
                            <CheckBox key={i} id={'brand' + i} name={brand.name}
                                      labelName={brand.name}
                                      onChange={this.changeCheckboxHandler}
                            />
                        )
                    }) : null}

                </div>
            </form>
        </div>
        );
    }
}
