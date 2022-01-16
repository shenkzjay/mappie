import React from "react"

//import from react suite
import { Form, ButtonToolbar, Button, Input, DatePicker } from 'rsuite';


const Report = () => {
    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
      );
    return(
        <div className="cardwrap">
        <div className="card">
        <div><h3>Report Events</h3></div>
    <Form>
    <Form.Group controlId="name-6">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" /> 
    </Form.Group>
   
    <Form.Group controlId="textarea">
      <Form.ControlLabel>Description</Form.ControlLabel>
      <Form.Control rows={5} name="textarea" accepter={Textarea} />
    </Form.Group>

      <Form.Group controlId="name-6">
      <Form.ControlLabel>Author</Form.ControlLabel>
      <Form.Control name="name" />
    </Form.Group>

    <Form.Group controlId="name-6">
    <DatePicker placeholder="Select Date" style={{ width: 200 }} />
    </Form.Group>

    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
        </div>
        </div>
    )
}
 




export default Report;