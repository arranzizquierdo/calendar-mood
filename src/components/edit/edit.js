import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./edit.scss";

class Edit extends Component {
    render() {
        const {
            handleMood,
            showMessage,
            handleChangeInput,
            handleSubmit,
            disableButton,
        } = this.props;

        return (
            <div className="edit-container">
                <form action="calendarMood" className="edit-form">
                    <div className="edit-item">
                        <label htmlFor="date-local" className="edit-label">Fecha</label>
                        <input
                            className="edit-input"
                            type="date"
                            defaultValue={this.getDate}
                            name="date"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="edit-item">
                        <label htmlFor="mood" className="edit-label">Estado</label>
                        <div className="edit-input">
                            <input
                                type="radio"
                                name="mood"
                                value=":)"
                                onClick={handleMood}
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="happy">:)</label>
                        </div>
                        <div className="edit-input">
                            <input
                                type="radio"
                                name="mood"
                                value=":("
                                onClick={handleMood}
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="sad">:(</label>
                        </div>

                    </div>

                    <div className={`${showMessage()}`}>
                        <label className="edit-label">Ha sido un buen día!</label>
                        <input
                        className="edit-input"
                            type="textarea"
                            placeholder="GENIAL!!apunta el porqué :)"
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>

                    <Link to="/">
                        <button
                            onClick={handleSubmit}
                            disabled={disableButton()}
                            className="edit-button"
                        >
                            Guardar
            </button>
                    </Link>

                    <button className="edit-button">Cancelar</button>
                </form>
            </div>
        );
    }
}

export default Edit;
