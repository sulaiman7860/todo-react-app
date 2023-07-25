import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import '.././node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className='App'>
      <Header/>
      <main className='mt-5'>
       <div className="container">
        <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2 bg-light py-4">
            <div className="container bg-primary py-4">
            <form className='container'>
              <div className="row">
              <div className="col-9">
              <div className="container">
              <input type="text" id='inputValue' className='form-control w-100' placeholder='Add New Task' required/>
              </div>
              </div>
             <div className="col-3">
             <div className="container-fluid">
             <button className='btn btn-light text-primary w-100 fw-bold'>Add Task</button>
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
                  <div id='taxtList' className="container bg-primary">
                    <div className="row">
                      <div className="col-8 mt-2">
                      <div className="container py-2 bg-light text-primary w-100 ">item 1</div>
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
      <Footer/>
    </div>
  );
}

export default App;
