import React from  'react';

class Number extends React.Component{

    render() {
        return(
            <div>
                <p>Este es el número que está ahora mismo {this.props.numero}</p>
                <p>Cambie el Número:</p>
                <input type="number" onChange={this.props.cambiando}/>
            </div>
        )
    }
}


export default Number;