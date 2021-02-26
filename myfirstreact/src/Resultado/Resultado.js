import React from  'react';

class Resultado extends React.Component{

    render() {
        return(
            <div>
                <p>El resultado de multiplicar por {this.props.multiplicador} es de: {this.props.numero}</p>
            </div>
        )
    }
}


export default Resultado;