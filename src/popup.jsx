import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Pop(Data){
  console.log(Data.tempData,"REsult")

  const updateData = () => {
    
fetch(`https://67d7ed2f9d5e3a10152c9d4e.mockapi.io/staffs/Details/${Data.tempData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(Data.tempData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("success")
  Data.setref(!Data.ref)
}).catch(error => {
  // handle error
})
{Data.PopClose()}
  }

  const createUser = () => {
      
    fetch('https://67d7ed2f9d5e3a10152c9d4e.mockapi.io/staffs/Details', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(Data.tempData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("Added new data")
      Data.setref(!Data.ref)
    }).catch(error => {
      // handle error
    })
    Data.PopClose()
  }


   return(
    <>
    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={Data.PopShow} onHide={Data.PopClose}>
        <Modal.Header closeButton>
          {Data.tempData.id ? <Modal.Title>Update Data</Modal.Title> : <Modal.Title>Add Data</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Update your Name"
                autoFocus
                defaultValue={Data.tempData.name}
                onChange={(changingvalue)=> Data.setTempData({...Data.tempData,name: changingvalue.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Update your Email"
                autoFocus
                defaultValue={Data.tempData.email}
                onChange={(changingvalue)=> Data.setTempData({...Data.tempData,email: changingvalue.target.value})}
              />
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Update your Location"
                autoFocus
                defaultValue={Data.tempData.location}
                onChange={(changingvalue)=> Data.setTempData({...Data.tempData,location: changingvalue.target.value})}
              />
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Update your Mobile Number"
                autoFocus
                defaultValue={Data.tempData.phoneNo}
                onChange={(changingvalue)=> Data.setTempData({...Data.tempData,phoneNo: changingvalue.target.value})}
              />
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Update your qualification"
                autoFocus
                defaultValue={Data.tempData.qualification}
                onChange={(changingvalue)=> Data.setTempData({...Data.tempData,qualification: changingvalue.target.value})}
              />
            </Form.Group>
            </Form.Group>
            </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={Data.PopClose}>
            Close
          </Button>
          {Data.tempData.id ? <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> : <Button variant="success" onClick={createUser}>
            Add
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
   )
}