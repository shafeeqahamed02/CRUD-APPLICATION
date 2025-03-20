import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Crud(Data){
    let [TableData,setTableData] = useState(null);

    console.log(TableData,"123");
    useEffect(function(){
      fetch('https://67d7ed2f9d5e3a10152c9d4e.mockapi.io/staffs/Details', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        console.log(res,"ress")
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(tasks => {
        setTableData(tasks)
      }).catch(error => {
        // handle error
      })
    },[Data.update])

    const deleteUser = (id) => {
fetch(`https://67d7ed2f9d5e3a10152c9d4e.mockapi.io/staffs/Details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("Deleted Successfully")
  Data.setUpdate(!Data.update);
}).catch(error => {
  // handle error
})
    }

    const createUser = () => {
      
      fetch('https://67d7ed2f9d5e3a10152c9d4e.mockapi.io/staffs/Details', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(Data.newData)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        alert("Added new data")
        Data.setUpdate(!Data.update);
      }).catch(error => {
        // handle error
      })
    }
    return(
        <>
        <Button variant={'warning'} className='fs-4 mb-3' onClick={() => Data.PopClick()}>Add Data</Button>
        <Table striped bordered hover variant='dark' className='text-center'>
      <thead>
        <tr className='fs-4'>
          <th className='p-2 bg-primary'>S:No</th>
          <th className='p-2 bg-primary'>Name</th>
          <th className='p-2 bg-primary'>Email</th>
          <th className='p-2 bg-primary'>Location</th>
          <th className='p-2 bg-primary'>Phone</th>
          <th className='p-2 bg-primary'>Qualification</th>
          <th className='p-2 bg-primary'>Action</th>
        </tr>
      </thead>
      <tbody>
        {TableData && TableData.reverse().map((data,index)=>{
          return(
            <>
            <tr>
            <td className='p-3'>{index+1}</td>
            <td className='p-3'>{data.name}</td>
            <td className='p-3'>{data.email}</td>
            <td className='p-3'>{data.location}</td>
            <td className='p-3'>{data.phoneNo}</td>
            <td className='p-3'>{data.qualification}</td>
            <td className='p-3'>
            <Button onClick={()=>Data.PopClick(data)} variant='warning me-2 p-1 ps-3 pe-3'>Edit</Button>
            <Button onClick={()=>deleteUser(data.id)} variant='danger p-1 ps-2 pe-2'>Delete</Button>
            </td>
            </tr>
            </>
          )
        })}
        {/* <tr>
          <td className='p-3'>1</td>
          <td className='p-3'>Mark</td>
          <td className='p-3'>Otto</td>
          <td className='p-3'>@mdo</td>
          <td className='p-3'>1</td>
          <td className='p-3'>Mark</td>
          <td className='p-3'>Otto</td>
          <td className='p-3'>@mdo</td>
          <td className='p-3'>
          <Button variant='warning me-2 p-1 ps-3 pe-3'>Edit</Button>
          <Button variant='danger p-1 ps-2 pe-2'>Delete</Button>
          </td>
        </tr> */}
      </tbody>
    </Table>
    </>
    )
}



    
