import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from "react-bootstrap";

export default class CatDetail extends Component {
    render() {
        if(!this.props.cat) {
            return null;
        }

        return (
            <Modal show={this.props.show_modal} onHide={this.props.toggleCatModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cat Details: {this.props.cat.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <strong>Id:</strong> {this.props.cat.id}
                    </div>
                    <div>
                        <strong>Name:</strong>: {this.props.cat.name}
                    </div>
                    <div>
                        <strong>Age:</strong> {this.props.cat.age}
                    </div>
                    <div>
                        <strong>Category:</strong> {this.props.cat.category}
                    </div>
                    <div>
                        <strong>Description:</strong> {this.props.cat.description}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.toggleCatModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

CatDetail.propTypes = {
    show_modal: PropTypes.bool,
    cat: PropTypes.object
};