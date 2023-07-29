import React, { useState } from 'react'
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import '.././node_modules/bootstrap/dist/js/bootstrap.bundle'


function App() {
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleButton = (event) => {
    event.preventDefault()

    const { itemsValue } = data
    console.log(data)
  }


  return (
    <div className='App'>
      <Header />
      <main className='mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 bg-light py-4">
              <div className="container bg-primary py-4">
                <form className='container'>
                  <div className="row">
                    <div className="col-9">
                      <div className="container">
                        <input type="text" name="itemsValue" onChange={handleChange} className='form-control w-100' placeholder='Add New Task' required />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="container-fluid">
                        <button className='btn btn-light text-primary w-100 fw-bold' onClick={handleButton}>Add Task</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-8 offset-lg-2 bg-light py-3 mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3 className='text-primary my-3 fw-bold'>TASKS LISTS</h3>
                    <div className="container bg-primary" style={{height:"30vh"}}>
                      <div className="row">
                        <div className="col-8 mt-2">
                          <div className="container bg-light fw-bold text-primary h-100 pt-1">
                            Item 1
                          </div>
                        </div>
                        <div className="col-2 mt-2">
                          <button className='btn btn-light text-primary fw-bold w-100'>Edit</button>
                        </div>
                        <div className="col-2 mt-2">
                          <button className='btn btn-light text-primary fw-bold w-100'>Delete</button>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default App;
