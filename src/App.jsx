import React from "react";
import { ProgressBar, Pagination } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-md-9 col-md-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="/">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <h4>rumor transfer pemain</h4>
            </div>
            <div className="col-md-2">
              <div className="text-right">
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="/">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lala</td>
                  <td>lolo</td>
                  <td>lele</td>
                  <td><ProgressBar now={60} striped label={'50'} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Lala</td>
                  <td>lolo</td>
                  <td>lele</td>
                  <td><ProgressBar now={60} striped label={'50'} />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lala</td>
                  <td>lolo</td>
                  <td>lele</td>
                  <td><ProgressBar now={60} striped label={'50'} />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Lala</td>
                  <td>lolo</td>
                  <td>lele</td>
                  <td><ProgressBar now={60} striped label={'50'} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>
              <Pagination.Item>{7}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
          <div>
            <p>
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
              </button>
              <span className="d-inline-block" tabindex="0" data-toggle="tooltip" title="Akses Sport1.0">
              <button className="btn btn-primary">Versi</button>
            </span>
            </p>
            <div className="collapse" id="collapseExample">
              <div class="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
