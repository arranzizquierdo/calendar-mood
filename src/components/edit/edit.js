import React, { Component } from 'react';

import './edit.scss';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    getDate(){
        const func = new Date();
        let date = (func.getDate() + "/" + (func.getMonth()+1) + "/" + func.getFullYear()); 
        return date;
    }
    render() { 
        const { handleMood, showMessage, sendData } = this.props;
        return ( 
            <div className="edit-container">
            <form action="calendarMood">
                <label htmlFor="date-local">
                Fecha
                </label>
                <input type="date" defaultValue={this.getDate}/>
                <label htmlFor="mood">
                    Estado
                </label>
                <input type="radio" name="mood" value=":)" onClick={handleMood}/>
                <label htmlFor="happy">:)</label>
                <input type="radio" name="mood" value=":(" onClick={handleMood}/>
                <label htmlFor="sad">:(</label>
                <label>Mensaje</label>
                <input type="textarea" placeholder="por qué es un buen día?" className={showMessage()}/>
                <button type="button" onClick={sendData}>Guardar</button>
                <button>Cancelar</button>
            </form>
            </div>
         );
    }
}
 
export default Edit;