import React, { useState, useContext } from 'react';
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    });



    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar  } = useContext(RecetasContext);

    // onChange

    const onChange= e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    // onSubmit

    const onSubmit = e => {
        e.preventDefault();

        buscarRecetas(busqueda);
        guardarConsultar(true);

    }

    return ( 
        <form className="col-12"
        
            onSubmit={onSubmit}
        >

            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o Ingrediente</legend>
            </fieldset>

            <div className="row">

                <div className="col-md-4">
                    <input 
                        type='text'
                        onChange={onChange}
                        placeholder= 'Inserte bebida alcoholica '
                        name='nombre'
                        className="form-control"
                    />
                </div>
                

                <div className="col-md-4">
                    <select
                        name='categoria'
                        className="form-control"
                        onChange={onChange}
                    >
                        <option> -- Seleccionar -- </option>
                        {categorias.map( categoria => (
                            <option key={categoria.strCategory} name={categoria.strCategory} >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type='submit'
                        className="btn btn-block btn-primary"
                        value="Buscar Cocktail"
                    />
                </div>



            </div>

        </form>
     );
}
 
export default Formulario;