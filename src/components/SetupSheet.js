import React from 'react';
import { Form, Text,  Checkbox, } from 'react-form';



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
    hello: !values.hello || !values.hello.match( /Hello World/ ) ? "Input must contain 'Hello World'" : null
  };
};

const warningValidator = (values) => {
  return {
    hello: !values.hello ||
           !values.hello.match( /^Hello World$/ ) ? "Input should equal 'Hello World'" : null
  };
};

const successValidator = (values) => {
  return {
    hello: values.hello && values.hello.match( /Hello World/ ) ? "Thanks for entering 'Hello World'!" : null
  };
};

export default class FormWithCustomInput extends React.Component {
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
              <Text field="openLimit" id="openLimit" />
              <label htmlFor="openSpeed">Open Speed 1</label>
              <Text field="openSpeed1" id="openSpeed1" />
              <label htmlFor="openForce1">Open Force 1</label>
              <Text field="openForce1" id="openForce1" />
              <label htmlFor="openDistance1">Open Distance 1</label>
              <Text field="openDistance1" id="openDistance1" />
              <label htmlFor="openSpeed2">Open Speed 2</label>
              <Text field="openSpeed2" id="openSpeed2" />
        
              <label htmlFor="openForce2">Open Force 2</label>
              <Text field="openForce2" id="openForce2" />
              <label htmlFor="openDistance2">Open Distance 2</label>
              <Text field="openDistance2" id="openDistance2" />
              <label htmlFor="openSpeed3">Open Speed 3</label>
              <Text field="openSpeed3" id="openSpeed3" />
              <label htmlFor="openForce3">Open Force 3</label>
              <Text field="openForce3" id="openForce3" />
              <label htmlFor="openDistance3">Open Distance 3</label>
              <Text field="openDistance3" id="openDistance3" />
              <label htmlFor="closeSpeed">Close Speed 1</label>
              <Text field="closeSpeed1" id="closeSpeed1" />

              <label htmlFor="closeForce1">Close Force 1</label>
              <Text field="closeForce1" id="closeForce1" />
              <label htmlFor="closeDistance1">Close Distance 1</label>
              <Text field="closeDistance1" id="closeDistance1" />
              <label htmlFor="closeSpeed2">Close Speed 2</label>
              <Text field="closeSpeed2" id="closeSpeed2" />
              <label htmlFor="closeForce2">Close Force 2</label>
              <Text field="closeForce2" id="closeForce2" />
              <label htmlFor="openDistance2">Close Distance 2</label>
              <Text field="closeDistance2" id="closeDistance2" />
              <label htmlFor="closeSpeed3">Close Speed 3</label>
              <Text field="closeSpeed3" id="closeSpeed3" />
              <label htmlFor="openForce3">Close Force 3</label>
              <Text field="openForce3" id="openForce3" />
              <label htmlFor="closeDistance3">Close Distance 3</label>
              <Text field="closeDistance3" id="closeDistance3" />
              <label htmlFor="closeSlowDown">Mold Close Slow Down</label>
              <Text field="closeSlowDown" id="closeSlowDown" />
              <label htmlFor="breakAwayDistance">Break Away Distance</label>
              <Text field="breakAwayDistance" id="breakAwayDistance" />
              <label htmlFor="breakAwayVelocity">Break Away Velocity</label>
              <Text field="breakAwayVelocity" id="breakAwayVelocity" />
              <label htmlFor="moldTouch">Mold Touch</label>
              <Text field="moldTouch" id="moldTouch" />

              <label htmlFor="moldProtect">Mold Protect PSI.</label>
              <Text field="moldProtect" id="moldProtect" />
              <label htmlFor="tonnage">Tonnage</label>
              <Text field="tonnage" id="tonnage" />
              <label htmlFor="22">Cool Time</label> 
              <Text field="22" id="22" />
              {/* cool time should be dependant on recovery time. Must be .5 seconds higher than recovery time */}
              <h1>EJECT</h1>
              <label htmlFor="pulses">Pulses</label>
              <Text field="pulses" id="pulses" />
              <label htmlFor="ejectStart">Eject Start Position</label>
              <Text field="ejectStart" id="ejectStart" />
              <label htmlFor="ejectForwardPos">Eject Forward Position</label>
              <Text field="ejectForwardPos" id="ejectForwardPos" />
              <label htmlFor="ejectBack">Eject Enable Start</label>
              <Text field="ejectBack" id="ejectBack" />
              <label htmlFor="ejectFS1">Eject Forward Speed 1</label>
              <Text field="ejectFS1" id="ejectFS1" />
              <label htmlFor="22">Eject Forward Force 1</label>
              <Text field="22" id="22" />
              <label htmlFor="changeOver1">Forward Change Over </label>
              <Text field="changeOver1" id="changeOver1" />
              <label htmlFor="ejectFS2">Eject Forward Speed 2</label>
              <Text field="ejectFS2" id="ejectFS2" />
              <label htmlFor="22">Eject Forward Force 2</label>
              <Text field="22" id="22" />
              <label htmlFor="22">Eject Forward Dwell</label> 
              <Text field="22" id="22" />
              <label htmlFor="13">Eject Retract Speed 1</label>
              <Text field="13" id="13" />
              <label htmlFor="22">Eject Retract Force 1</label>
              <Text field="22" id="22" />
              <label htmlFor="14">Retract Change Over</label>
              <Text field="14" id="14" />
              <label htmlFor="15">Eject Retract Speed 2</label>
              <Text field="15" id="15" />
              <label htmlFor="22">Eject Retract Force 2</label>
              <Text field="22" id="22" />
              <h1>INJECTION</h1>
              <label htmlFor="16">Shot Size</label>
              <Text field="16" id="16" />
              <label htmlFor="17">High Limit Injection Pressure</label>
              <Text field="17" id="17" />
              <label htmlFor="18">Injection Speed 1</label>
              <Text field="18" id="18" />
              <label htmlFor="19">Injection Change Over 1</label>
              <Text field="19" id="19" />
              <label htmlFor="20">Injection Speed 2</label>
              <Text field="20" id="20" />

              <label htmlFor="21">Injection Change Over 2</label>
              <Text field="21" id="21" />
              <label htmlFor="22">Injection Speed 3</label>
              <Text field="22" id="22" />
              <label htmlFor="23">Injection Change Over 3</label>
              <Text field="23" id="23" />
              <label htmlFor="24">Injection Speed 4</label>
              <Text field="24" id="24" />
              <label htmlFor="25">Injection Change Over 4</label>
              <Text field="25" id="25" />

              <label htmlFor="26">Injection Speed 5</label>
              <Text field="26" id="26" />
              <label htmlFor="27">Injection Change Over 5</label>
              <Text field="27" id="27" />
              <label htmlFor="28">Transfer Position</label>
              <Text field="28" id="28" />
              <h1>HOLD</h1>
              <label htmlFor="29">Hold PSI 1</label>
              <Text field="29" id="29" />
              <label htmlFor="30">Hold Time 1</label>
              <Text field="30" id="30" />
              <label htmlFor="31">Hold PSI 2</label>
              <Text field="31" id="31" />
              <label htmlFor="32">Hold Time 2</label>
              <Text field="32" id="32" />
              <label htmlFor="33">Hold PSI 3</label>
              <Text field="33" id="33" />
              <label htmlFor="22">Hold Time 3</label>
              <Text field="22" id="22" />

              <label htmlFor="22">Clamp Open Time</label> 
              <Text field="22" id="22" />
              <h1>RECOVERY</h1>
              <label htmlFor="22">Screw RPM</label>
              <Text field="22" id="22" />
              <label htmlFor="22">Back PSI</label>
              <Text field="22" id="22" />  
              <label htmlFor="22">Decompression Speed</label>
              <Text field="22" id="22" />
              <label htmlFor="22">Decompression Distance</label>
              <Text field="22" id="22" />            
              <h1>AIR</h1>
              <label htmlFor="22">Air Start Position</label>
              <Text field="22" id="22" />
              <label htmlFor="22">Air Duration</label>
              <Text field="22" id="22" />
              <label htmlFor="22">Air Start</label>
              <Text field="22" id="22" />
              <h1>Rack</h1>
              <label htmlFor="22">Injection Before Tonnage</label> 
              <Text field="22" id="22" />
              <label htmlFor="22">Injection Before Tonnage Set Point</label> 
              <Text field="22" id="22" />
              {/* Set Point should be dependant on Clamp tonnage. Must be within 50 tons. */}
              <label htmlFor="22">Rack Start Position</label> 
              <Text field="22" id="22" />
              <label htmlFor="22">Rack In Speed</label> 
              <Text field="22" id="22" />
              <label htmlFor="22">Rack In Pressure</label> 
              <Text field="22" id="22" />
              <label htmlFor="22">Rack Out Speed</label> 
              <Text field="22" id="22" />
              <label htmlFor="22">Rack Out Pressure</label> 
              <Text field="22" id="22" />
              <h1>Features</h1>
              {/* should use radio buttons for yes/no answers */}

              
                <label htmlFor="eject" className="mr-2">Hydraulic Eject</label>
                <Checkbox field="eject" id="eject" className="d-inline-block" />
                <label htmlFor="sprueBreak" className="mr-2">Sprue Break</label>
                <Checkbox field="sprueBreak" id="sprueBreak" className="d-inline-block" />
                <label htmlFor="extruder" className="mr-2">High Speed Extruder Motor</label>
                <Checkbox field="extruder" id="extruder" className="d-inline-block" />
                <label htmlFor="soak" className="mr-2">Soak Timer</label>
                <Checkbox field="soak" id="soak" className="d-inline-block" />


              <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

