import React from 'react';
import { Form, Text, Col, Container, Row, Checkbox, } from 'react-form';
import { Input } from 'reactstrap';


const Message = ({ color, message }) => {
  return (
    <div className="mb-4" style={{ color }}>
      <h1>Setup Sheet</h1>
    </div>
  );
}

// Define your custom input
// Note, the ...rest is important because it allows you to pass any
// additional fields to the internal <input>.
export class CustomTextWrapper extends React.Component {

  render() {

    const {
      fieldApi,
      onInput,
      ...rest
    } = this.props;

    const {
      getValue,
      getError,
      getWarning,
      getSuccess,
      setValue,
      setTouched,
    } = fieldApi;

    const error = getError();
    const warning = getWarning();
    const success = getSuccess();

    return (
      <div>
        <input
          value={getValue()}
          onInput={( e ) => {
            setValue(e.target.value);
            if ( onInput ) {
              onInput( e );
            }
          }}
          onBlur={() => {
            setTouched();
          }}
          {...rest} />
        { error ? <Message color="red" message={error} /> : null }
        { !error && warning ? <Message color="orange" message={warning} /> : null }
        { !error && !warning && success ? <Message color="green" message={success} /> : null }
      </div>
    );
  }
}

// Use the form field and your custom input together to create your very own input!
// const CustomText = FormField(CustomTextWrapper);

const errorValidator = (values) => {
  return {
    hello: !values.hello || !values.hello.match( /Input/ ) ? "Input must contain 'Info'" : null
  };
};

const warningValidator = (values) => {
  return {
    hello: !values.hello ||
           !values.hello.match( /^Input$/ ) ? "Input should equal 'Info'" : null
  };
};

const successValidator = (values) => {
  return {
    hello: values.hello && values.hello.match( /Input/ ) ? "Thanks for entering 'Info'!" : null
  };
};

export default class FormWithCustomInput extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    // http://localhost:3001/api/SetupSheet
    // https://proprocessorserver.herokuapp.com
    fetch("http://localhost:3001/api/Additive/api/SetupSheet", {
      method: 'POST',
      body: JSON.stringify({Press:this.state}),
      headers: new Headers({
          'Content-Type': 'application/json', 
          authorization: this.props.sessionToken
        })

  }).then(
      (response) => response.json()
  ).then((data) => {
      // this.props.setToken(data.sessionToken)
    console.log("yeah",data)
  }) 
  
  
}
  render() {
    return (
      <div>
        <Form
          validateWarning={warningValidator}
          validateSuccess={successValidator}
          validateError={errorValidator}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form5">
            <h1>CLAMP</h1>

                      
                        <label htmlFor="openLimit">Open Limit</label>
                        <Text field="openLimit" id="openLimit" name="openLimit"/>

                        <label htmlFor="openSpeed">Open Speed 1</label>
                        <Text field="openSpeed1" id="openSpeed1" name="openSpeed1"/>
                        <label htmlFor="openForce1">Open Force 1</label>
                        <Text field="openForce1" id="openForce1" name="openForce1"/>
                        <br />
                        <label htmlFor="openDistance1">Open Distance 1</label>
                        <Text field="openDistance1" id="openDistance1" name="openDistance1"/>
                        <label htmlFor="openSpeed2">Open Speed 2</label>
                        <Text field="openSpeed2" id="openSpeed2" name="openSpeed2"/>
                  
                        <label htmlFor="openForce2">Open Force 2</label>
                        <Text field="openForce2" id="openForce2" name="openForce2"/>
                        <br />
                        <label htmlFor="openDistance2">Open Distance 2</label>
                        <Text field="openDistance2" id="openDistance2" name="openDistance2"/>
                        <label htmlFor="openSpeed3">Open Speed 3</label>
                        <Text field="openSpeed3" id="openSpeed3" name="openSpeed3"/>
                        <label htmlFor="openForce3">Open Force 3</label>
                        <Text field="openForce3" id="openForce3" name="openForce3"/>
                        <br />
                        <label htmlFor="openDistance3">Open Distance 3</label>
                        <Text field="openDistance3" id="openDistance3" name="openDistance3"/>
                        <label htmlFor="closeSpeed">Close Speed 1</label>
                        <Text field="closeSpeed1" id="closeSpeed1" name="closeSpeed1"/>
                        
                        <label htmlFor="closeForce1">Close Force 1</label>
                        <Text field="closeForce1" id="closeForce1" name="closeForce1"/>
                        <br />
                        <label htmlFor="closeDistance1">Close Distance 1</label>
                        <Text field="closeDistance1" id="closeDistance1" name="closeDistance1"/>
                        <label htmlFor="closeSpeed2">Close Speed 2</label>
                        <Text field="closeSpeed2" id="closeSpeed2" name="closeSpeed2"/>
                        <label htmlFor="closeForce2">Close Force 2</label>
                        <Text field="closeForce2" id="closeForce2" name="closeForce2"/>
                        <br />
                        <label htmlFor="openDistance2">Close Distance 2</label>
                        <Text field="closeDistance2" id="closeDistance2" name="closeDistance2"/>
                        
                        <label htmlFor="closeSpeed3">Close Speed 3</label>                       
                        <Text field="closeSpeed3" id="closeSpeed3" name="closeSpeed3"/>
                        <label htmlFor="openForce3">Close Force 3</label>
                        <Text field="openForce3" id="openForce3" name="openForce3"/>
                        <br />
                        <label htmlFor="closeDistance3">Close Distance 3</label>
                        <Text field="closeDistance3" id="closeDistance3" name="closeDistance3"/>
                        <label htmlFor="closeSlowDown">Mold Close Slow Down</label>
                        <Text field="closeSlowDown" id="closeSlowDown" name="closeSlowDown"/>
                        <label htmlFor="breakAwayDistance">Break Away Distance</label>
                        <Text field="breakAwayDistance" id="breakAwayDistance" name="breakAwayDistance"/>
                        <br />
                        <label htmlFor="breakAwayVelocity">Break Away Velocity</label>                        
                        <Text field="breakAwayVelocity" id="breakAwayVelocity" name="breakAwayVelocity"/>
                        <label htmlFor="moldTouch">Mold Touch</label>
                        <Text field="moldTouch" id="moldTouch" name="moldTouch"/>
                        <br />
                        <label htmlFor="moldProtect">Mold Protect PSI.</label>
                        <Text field="moldProtect" id="moldProtect" name="moldProtect"/>
                        <label htmlFor="tonnage">Tonnage</label>
                        <Text field="tonnage" id="tonnage" name="tonnage"/>
                        <label htmlFor="cool">Cool Time</label> 
                        <Text field="cool" id="cool" name="cool"/>
   
                        {/* cool time should be dependant on recovery time. Must be .5 seconds higher than recovery time */}
                        <h1>EJECT</h1>

                        <label htmlFor="pulses">Pulses</label>
                        <Text field="pulses" id="pulses" name="pulses"/>
                        <label htmlFor="ejectStart">Eject Start Position</label>
                        <Text field="ejectStart" id="ejectStart" name="ejectStart"/>
                        <label htmlFor="ejectForwardPos">Eject Forward Position</label>
                        <Text field="ejectForwardPos" id="ejectForwardPos" name="ejectForwardPos"/>
                        <br />
                        <label htmlFor="ejectBack">Eject Enable Start</label>
                        <Text field="ejectBack" id="ejectBack" name="ejectBack"/>
                        <label htmlFor="ejectFS1">Eject Forward Speed 1</label>
                        <Text field="ejectFS1" id="ejectFS1" name="ejectFS1"/>
                        
                        <label htmlFor="ejectFF1">Eject Forward Force 1</label>
                        <Text field="ejectFF1" id="ejectFF1" name="ejectFF1"/>
                        <br />
                        <label htmlFor="changeOver1">Forward Change Over </label>
                        <Text field="changeOver1" id="changeOver1" name="changeOver1"/>
                        <label htmlFor="ejectFS2">Eject Forward Speed 2</label>
                        <Text field="ejectFS2" id="ejectFS2" name="ejectFS2"/>
                        <label htmlFor="ejectFF2">Eject Forward Force 2</label>
                        <Text field="ejectFF2" id="ejectFF2" name="ejectFF2"/>
                        <br />
                        <label htmlFor="ejectDwell">Eject Forward Dwell</label> 
                        <Text field="ejectDwell" id="ejectDwell" name="ejectDwell"/>
                        <label htmlFor="ejectRS1">Eject Retract Speed 1</label>
                        <Text field="ejectRS1" id="ejectRS1" name="ejectRS1"/>
                        <label htmlFor="ejectRF1">Eject Retract Force 1</label>
                        <Text field="ejectRF1" id="ejectRF1" name="ejectRF1"/>
                        <br />
                        <label htmlFor="retractCO">Retract Change Over</label>
                        <Text field="retractCO" id="retractCO" name="retractCO"/>
                        <label htmlFor="ejectRS2">Eject Retract Speed 2</label>
                        <Text field="ejectRS215" id="ejectRS2" name="ejectRS2"/>
                        <label htmlFor="ejectRF2">Eject Retract Force 2</label>
                        <Text field="ejectRF2" id="ejectRF2" name="ejectRF2"/>

                    <h1>INJECTION</h1>

                        <label htmlFor="shotSize">Shot Size</label>
                        <Text field="shotSize" id="shotSize" name="shotSize"/>
                        <label htmlFor="injPressure">High Limit Injection Pressure</label>
                        <Text field="injPressure" id="injPressure" name="injPressure"/>
                        <label htmlFor="injS1">Injection Speed 1</label>
                        <Text field="injS1" id="injS1" name="injS1"/>
                        <br />
                        <label htmlFor="injCO1">Injection Change Over 1</label>
                        <Text field="injCO1" id="injCO1" name="injCO1"/>
                        <label htmlFor="injS2">Injection Speed 2</label>
                        <Text field="injS2" id="injS2" name="injS2"/>
                      
                        <label htmlFor="injCO2">Injection Change Over 2</label>
                        <Text field="injCO2" id="injCO2" name="injCO2"/>
                        <br />
                        <label htmlFor="injS3">Injection Speed 3</label>
                        <Text field="injS3" id="injS3" name="injS3"/>
                        <label htmlFor="injCO3">Injection Change Over 3</label>
                        <Text field="injCO3" id="injCO3" name="injCO3"/>
                        <label htmlFor="injS4">Injection Speed 4</label>
                        <Text field="injS4" id="injS4" name="injS4"/>
                        <br />
                        <label htmlFor="injCO4">Injection Change Over 4</label>
                        <Text field="injCO4" id="injCO4" name="injCO4"/>

                        <label htmlFor="injS5">Injection Speed 5</label>
                        <Text field="injS5" id="injS5" name="injS5"/>
                        <label htmlFor="injCO5">Injection Change Over 5</label>
                        <Text field="injCO5" id="injCO5" name="injCO5"/>
                        <br />
                        <label htmlFor="xfer">Transfer Position</label>
                        <Text field="xfer" id="xfer" name="xfer"/>

                    <h1>HOLD</h1>

                        <label htmlFor="holdPsi1">Hold PSI 1</label>
                        <Text field="holdPsi1" id="holdPsi1" name="holdPsi1"/>
                        <label htmlFor="holdT1">Hold Time 1</label>
                        <Text field="holdT1" id="holdT1" name="holdT1"/>
                        <label htmlFor="holdPsi2">Hold PSI 2</label>
                        <Text field="holdPsi2" id="holdPsi2" name="holdPsi2"/>
                        <br />
                        <label htmlFor="holdT2">Hold Time 2</label>
                        <Text field="holdT2" id="holdT2" name="holdT2"/>
                        <label htmlFor="holdPsi3">Hold PSI 3</label>
                        <Text field="holdPsi3" id="holdPsi3" name="holdPsi3"/>
                        <label htmlFor="holdT3">Hold Time 3</label>
                        <Text field="holdT3" id="holdT3" name="holdT3"/>
                        <br />
                        <label htmlFor="clampOT">Clamp Open Time</label> 
                        <Text field="clampOT" id="clampOT" name="clampOT"/>

                    <h1>RECOVERY</h1>

                        <label htmlFor="screwRpm">Screw RPM</label>
                        <Text field="screwRpm" id="screwRpm" name="screwRpm"/>
                        <label htmlFor="backPsi">Back PSI</label>
                        <Text field="backPsi" id="backPsi" name="backPsi"/> 
                        <br /> 
                        <label htmlFor="decompSpeed">Decompression Speed</label>
                        <Text field="decompSpeed" id="decompSpeed" name="decompSpeed"/>
                        <label htmlFor="decompDist">Decompression Distance</label>
                        <Text field="decompDist" id="decompDist" name="decompDist"/>   
              
                    <h1>AIR</h1>

                        <label htmlFor="airStart">Air Start Position</label>
                        <Text field="airStart" id="airStart" name="airStart"/>
                        <label htmlFor="airTime">Air Duration</label>
                        <Text field="airTime" id="airTime" name="airTime"/>
                        <label htmlFor="airDelay">Air Delay</label>
                        <Text field="airDelay" id="airDelay" name="airDelay"/>

                    <h1>Rack</h1>

                        <label htmlFor="injBeforeTon">Injection Before Tonnage</label> 
                        <Text field="injBeforeTon" id="injBeforeTon" name="injBeforeTon"/>
                        <label htmlFor="iBTSP">Injection Before Tonnage Set Point</label> 
                        <Text field="iBTSP" id="iBTSP" name="iBTSP"/>
                        {/* Set Point should be dependant on Clamp tonnage. Must be within 50 tons. */}
                        <label htmlFor="rackStartPos">Rack Start Position</label> 
                        <Text field="rackStartPos" id="rackStartPos" name="rackStartPos"/>
                        <br />
                        <label htmlFor="rackInSpeed">Rack In Speed</label> 
                        <Text field="rackInSpeed" id="rackInSpeed" name="rackInSpeed"/>
                        <label htmlFor="rackInPsi">Rack In Pressure</label> 
                        <Text field="rackInPsi" id="rackInPsi" name="rackInPsi"/>
                        <label htmlFor="rackOutSpeed">Rack Out Speed</label> 
                        <Text field="rackOutSpeed" id="rackOutSpeed" name="rackOutSpeed"/>
                        <br />
                        <label htmlFor="rackOutPsi">Rack Out Pressure</label> 
                        <Text field="rackOutPsi" id="rackOutPsi" name="rackOutPsi"/>

                  
                    <h1>Features</h1>
                    {/* should use radio buttons for yes/no answers */}

                    
                      <label htmlFor="eject" className="mr-2">Hydraulic Eject</label>
                      <Checkbox field="eject" id="eject" className="d-inline-block" name="eject"/>
                      <label htmlFor="injBeforeTonnage" className="mr-2">injection Before Tonnage</label>
                      <Checkbox field="injBeforeTonnage" id="injBeforeTonnage" className="d-inline-block" name="injBeforeTonnage"/>
                      <label htmlFor="sprueBreak" className="mr-2">Sprue Break</label>
                      <Checkbox field="sprueBreak" id="sprueBreak" className="d-inline-block" name="sprueBreak"/>
                      <label htmlFor="extruder" className="mr-2">High Speed Extruder Motor</label>
                      <Checkbox field="extruder" id="extruder" className="d-inline-block" name="extruder"/>
                      <label htmlFor="soak" className="mr-2">Soak Timer</label>
                      <Checkbox field="soak" id="soak" className="d-inline-block" name="soak"/>

                <br />
                <br />
              <button type="submit" className="mb-4 btn btn-primary">Save</button>
              <button type="submit" className="mb-4 btn btn-primary">Update</button>
              <button type="submit" className="mb-4 btn btn-primary">Delete</button>
              <button type="submit" className="mb-4 btn btn-primary">Print</button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

