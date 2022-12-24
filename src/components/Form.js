import React from 'react'

const Form = (props) => {

    //desestructuracion de propiedades
    const { inputs, setInputs } = props;

    //Funcion que se llamara cuando sucede el evento onchange en el input
    const onChange = (e) => {
        //Setear el valor del state con lo escrito en el input

        //Spread todos los inputs y modificar solo el necesario obteniendo el nombre del atributo name del input
        setInputs({...inputs, [e.target.name]:e.target.value });

        console.log(e.target.name);
    
    };

    return (
        <form>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name='firstName' />
            </div>

            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name='lastName' />
            </div>
            
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="email" name='email' />
            </div>

            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name='password' />
            </div>

            <div className='form-group'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name='confirmPassword' />
            </div>
            
        </form>
    )
}

export default Form