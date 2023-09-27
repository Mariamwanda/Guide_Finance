import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";
class Utilisateur extends React.Component {
  
    // static propTypes = {
    //   getData: PropTypes.func
    // };
  
    constructor(props){
      super(props);
      this.state = {
        name: "",
        email: "",
        city: ""
      };
    }
      
    handelSubmit(e){
      e.preventDefault();
      console.log(this.state.email);
      
      this.props.getData({
        name: this.state.name,
        email: this.state.email,
        city: this.state.city
      });
    }
    
    shouldComponentUpdate(nextProps, nextState){
      // if(nextProps.name )
      
      return true;
    }
    
    render () {
      return (
        <form onSubmit={(e)=> this.handelSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" ref="name" className="form-control" id="exampleInputPassword1" placeholder="Name" defaultValue={this.state.name} />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" ref="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" defaultValue={this.state.email} />
          </div>
          <div className="form-check">
            <label >City</label>
            <input type="text" ref="city" className="form-control" id="exampleCheck1"  defaultValue={this.state.city}/>
          </div>
          <br />
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
       
      );
     
    }
    
  }
  
  class Studentlist extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }
    
    render(){
      let data = this.props.data ? this.props.data : [];
      console.log("data: ", data);
      return (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length == 0 ?
                    (<tr>
                          <td colSpan="4" style={{textAlign: "center", fontWeight: "bold"}}>No Data</td>
                      </tr>)
                  :
                data.map((d, i) => {
                  return (<tr key={i+1}>
                          <td>{i}</td>
                          <td>{d.name}</td>
                          <td>{d.email}</td>
                          <td>{d.city}</td>
                      </tr>);
                })
              }
            </tbody>
          </table>
        </div>
       )
    }
  }
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        list: []
      };
    }
    masterData(data){
      console.log("masterData: ", data);
      let list = this.state.list;
      list.push(data)
      this.setState({"list": list});
    }
    render (){
      // console.log();
      return (<div>
          <Utilisateur getData={(data)=> this.masterData(data)}/>
          <Studentlist data={this.state.list}/>
        </div>);
    }
       

  }
  
  ReactDOM.render(<App />, document.getElementById('app'));
  
   /* constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        city: ""
      };
    }
  
    handleInputChange(event) {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.name);
      // Envoyez ces données où vous en avez besoin.
      
    }
  
    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className="form-check">
            <label>City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              defaultValue={this.state.city}
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    }*/
  

  export default Utilisateur;
  