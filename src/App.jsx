import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Table.css'
import Crud from './Table'
import Pop from './popup' 

function App() {
  let [status,setStatus] = useState(false);

  const [fieldData,setFieldData] = useState({})

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (rowDetails) => {
    setShow(true)
    if(rowDetails){
      setFieldData(rowDetails);
    } else {
      setFieldData({
        name:null,
        email:null,
        phoneNo:null,
        location:null,
        qualification:null
      })
    }
  };
  // 

  return (
    <div className='p-4'>
    <Pop ref={status} setref={setStatus} PopShow={show} PopClose={handleClose} tempData={fieldData} setTempData={setFieldData}/>
    <Crud PopClick={handleShow} update={status} setUpdate={setStatus} PopShow={show} />
    </div>
  )
}

export default App
