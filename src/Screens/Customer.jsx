import React from 'react'
import Table from '../components/table/Table'
import CustomerList from '../assets/JsonData/customers-list.json'

const customerTableHead =[
    'Model No',
    'Customer Name',
    'Lon & lat',
    'Locations',
    'no of posts'
    
]

const renderHead =(item,index) => <th key={index}>{item}</th>


const renderBody= (item,index) => (
    <tr key={index}>
        <td>{item.Model_No}</td>
        <td>{item.customer_name}</td>
        <td>{item.Lon__lat}</td>
        <td>{item.Location}</td>
        <td>{item.no_of_posts}</td>
    </tr>
)



const Customer=()=> {
    return (
        <div>
            <h2 className="page-header">
                Customers
            </h2>
            <div className="row">
                <div className="col-12" >
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit="10"
                                headData={customerTableHead}
                                renderHead={(item,index)=>renderHead(item,index)}
                                bodyData={CustomerList}
                                renderBody={(item,index)=>renderBody(item,index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
