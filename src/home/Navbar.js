import React from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded"  light expand="md">
                    {/* <NavbarToggler onClick={this.props.logout} /> */}
                    <Collapse isOpen={this.state.isOpen}navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default SiteBar;