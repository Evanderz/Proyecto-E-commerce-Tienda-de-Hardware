import React, { useState } from 'react'

const Formulario = ({ nombre, nombreCambiado, apellido, apellidoCambiado, mail, mailCambiado, telefono, telefonoCambiado }) => {


    return (

        <>

            <h2 className='m-4'>Ingrese sus datos para la compra:</h2>
            <form>
                <li className='m-4'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        className=''
                        type="text"
                        id="nombre"
                        name="nombre"
                        onChange={(e) => { nombreCambiado(e.target.value) }}
                        value={nombre}

                    />
                </li>
                <li className='m-4'>
                    <label htmlFor="nombre">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        onChange={(e) => { apellidoCambiado(e.target.value) }}
                        value={apellido}
                    />
                </li>
                <li className='m-4'>
                    <label htmlFor="mail">E-Mail:</label>
                    <input
                        type="text"
                        id="mail"
                        name="mail"
                        value={mail}
                        onChange={(e) => { mailCambiado(e.target.value) }}
                    />
                </li>
                <li className='m-4'>
                    <label htmlFor="nombre">Telefono:</label>
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={telefono}
                        onChange={(e) => { telefonoCambiado(e.target.value) }}
                    />
                </li>

            </form>


        </>

    )

}

export default Formulario