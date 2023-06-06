import React from 'react';
import Create from '../Admin/Create';
class Api extends React.Component{
    constructor(props){
    super(props)
    this.state={data:[]
    }
  }
  async componentDidMount(){
    const Response=await fetch('https://63a5721a318b23efa793a770.mockapi.io/api/produce');
    const json=await Response.json();
    this.setState({data:json})
  }
  render(){
    return(
      <div className='container'>
        <h3>Hiển thị thông tin từ API</h3>
        <button className='btn btn-primary'>Thêm</button>
        <table className='table'>
        <thead>
        <tr>
            <th>Created At</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Quantity</th>
            <th>Sửa</th>
            <th>Xóa</th>
        </tr>
    </thead>
        <tbody>
          {this.state.data.map(e =>(
            <tr key={e.id}>
                <td>{e.createdAt}</td>
                <td>{e.name}</td>
                <td><img src={e.avatar} alt={e.name} /></td>
                <td>{e.quatity}</td>
                <td>
                  <button className='btn btn-primary'> Sửa </button>
                  </td>
                  <td>   <button className='btn btn-primary'>Xóa</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
  }
  export default Api ;