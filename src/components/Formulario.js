import React, { useState } from 'react';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })

    const { nombre, categoria} = busqueda;


    // onChange

    const onChange= e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <form className="col-12">

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
                        onChange=''
                    >
                        <option> -- Seleccionar -- </option>
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