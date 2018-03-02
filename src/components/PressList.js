import React from 'react';
import { Table, Button } from 'reactstrap';


const PressList = (props) => {
    
    props.fetchPressInfo
    return (
        
        <div>
            <h3>History</h3>
            
            <Table hover striped>
                <thead>
                    <tr>

                        <th>Description</th>

                        <th>{console.log(props)}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listPresses.map((listPress, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{listPress.id}</th>
                                    <td>{listPress.description}</td>
                                    <td><Button id={listPress.id} onClick={props.delete} color="danger">Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default PressList;