import React from  'react';

class Resultado extends React.Component{

    render() {
        return(
            <div>
                <p>Resulatdo de la multiplicación {this.props.numero}</p>
            </div>
        )
    }
}


export default Resultado;