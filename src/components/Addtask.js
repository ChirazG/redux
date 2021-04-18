import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Addtask = () => {
    return (
        <div className="mb-3">
            
            <div className="row">
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Add a task" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add</button>
  </form>
</nav>
</div>
                
        </div>
    )
}

export default Addtask
