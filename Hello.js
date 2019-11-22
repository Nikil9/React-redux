import React, {Component} from 'react'; 
import { Modal, ModalBody, ModalHeader, Input } from 'reactstrap';

const organizations= ["testorg23","IanTest111","Manitoba Blue Cross","Mednet Jordan","Mega Assistance","Amusement Parks Liability","Shanghai Cseth Insurance Services","MEDEX Global Group","SROrg1","SRORG1"]

class Hello extends Component{
  constructor(props){
    super(props);
    this.state={search:""}
    this.updateSearch=this.updateSearch.bind(this)
  }

  updateSearch(event){
    this.setState({ search: event.target.value });
  }

  render(){
    const {search}=this.state;
    
    return(
      <div>
      <h4>Search: <input type="text" onChange={this.updateSearch}/></h4>
       {organizations
              .filter(item => (search ? item.indexOf(search) > -1 : true))
              .map((value, index) => {
                return (
                  <div
                    key={index}
                    id={value}
                    style={{ flex: '0 0 16.64%', paddingLeft: '10px' }}
                  >
                    {value}
                  </div>
                );
              })}
       </div>
    );
  } 
 
}

export default Hello;