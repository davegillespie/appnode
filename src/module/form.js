import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class FormComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      // dataEmployee: {}, // this was added as test
      campName: "",
      campEmail: "",
      campPhone: "",
      campAddress: "",
      // stringRole: "", // this also added as test
      selectRole: 0
    }
  }

 render(){
  // let userId = 0;
  // let userId = this.props.match.params.employeeId;
   return (
     

      <div>
       <div class="form-row justify-content-center">
         <div class="form-group col-md-6">
           <label for="inputPassword4">Name </label>
           <input type="text" class="form-control"  placeholder="Name" value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Email</label>
           <input type="email" class="form-control"  placeholder="Email" value={this.state.campEmail} onChange={(value)=> this.setState({campEmail:value.target.value})}/>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputState">Role</label>
           <select id="inputState" class="form-control" onChange={(value)=> this.setState({selectRole:value.target.value})}>
             <option selected>Choose...</option>
             {/* <option selected value={this.state.dataEmployee.roleId}>{this.state.stringRole}</option> */}
             <option value="1">Admin...</option>
             <option value="2">Project Manager</option>
             <option value="3">Programer</option>
           </select>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Phone</label>
           <input type="number" class="form-control"  placeholder="Phone"  value={this.state.campPhone} onChange={(value)=> this.setState({campPhone:value.target.value})}/>
         </div>
       </div>
       <div class="form-group">
         <label for="inputAddress">Address</label>
         <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.campAddress} onChange={(value)=> this.setState({campAddress:value.target.value})}/>
       </div>
       <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
     </div>



       
    //     <form>
    //     <div class="form-row justify-content-center">
    //      <div class="form-group col-md-6">
    //        <label for="inputPassword4">Name {userId}</label>
    //        <input type="text" class="form-control"  placeholder="Name"/>
    //      </div>
    //      <div class="form-group col-md-6">
    //        <label for="inputEmail4">Email</label>
    //        <input type="email" class="form-control"  placeholder="Email"/>
    //      </div>
    //    </div>
    //    <div class="form-row">
    //      <div class="form-group col-md-6">
    //        <label for="inputState">Role</label>
    //        <select id="inputState" class="form-control">
    //          <option selected>Choose...</option>
    //          <option>...</option>
    //        </select>
    //      </div>
    //      <div class="form-group col-md-6">
    //        <label for="inputEmail4">Phone</label>
    //        <input type="number" class="form-control"  placeholder="Email"/>
    //      </div>
    //    </div>
    //    <div class="form-group">
    //      <label for="inputAddress">Address</label>
    //      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
    //    </div>

    //    <button type="submit" class="btn btn-primary">Sign in</button> 
    //  </form> 
    
   );
 }

    sendSave(){

      if (this.state.selectRole==0) {
        alert("Seleccione el tipo de Role")
      }
      else if (this.state.campPhone=="") {
        alert("Digite el campo de telefono")
      }
      else if (this.state.campName=="") {
        alert("Digite el campo de Nombre")
      }
      else if (this.state.campEmail=="") {
        alert("Digite el campo de email")
      }
      else if (this.state.campAddress=="") {
        alert("Digite el campo de Direccion")
      }
      // else if (this.state.campStringRole=="") {   // this was added
      //   alert("Digite el campo de Direccion")
      // }
      // else if (this.state.dataEmployee=="") {   // this was added
      //   alert("Digite el campo de Direccion")
      // }
      else {

        const baseUrl = "http://localhost:3000/employee/create"

        const datapost = {
          // dataEmployee: this.state.dataEmployee, // this was added
          name : this.state.campName, 
          email : this.state.campEmail,
          phone : this.state.campPhone,
          address : this.state.campAddress,
          // stringRole: this.state.campStringRole,  // this was added
          role  : this.state.selectRole
        }

        axios.post(baseUrl,datapost)
        .then(response=>{
          if (response.data.success===true) {
            alert(response.data.message)
          }
          else {
            alert(response.data.message)
          }
        }).catch(error=>{
          alert("Error 34 "+error)
        })

      }

    }
}


export default FormComponent;