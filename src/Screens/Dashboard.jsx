import React ,{useEffect} from 'react'
import { onSnapshot, collection } from "firebase/firestore";

import db from '../utils/firebase'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import statusCards from '../assets/JsonData/status-card-data.json' 
import Badge from '../components/badge/Badge'
import ThemeAction from '../redux/actions/ThemeAction'

const chartOptions={
    series:[{
        name:'NO2',
        data:[1, 0.523, 0.531, 0.1, 0.64, 0.25, 0.8, 0.2]},
        {
        name:'CO',
        data:[40,23,54,76,50,26,48,35]    
    },
    {
        name:'O3',
        data:[0.08 ,0.075, 0.070,0.509, 1.019, 0.764, 1.528, 2.038]    
    },
    {
        name:'Particulate Pollutants',
        data:[350.4, 250.4, 150.4, 55.4, 35.4, 12, 35 ,22.6]    
    }],
    options: {
        colors: ['#008FFB', '#00E396', '#fb0b12','#d68102'],
        chart:{
            background:'transparent'
            
        },
        dataLabels:{
            enabled:false,
            
        },
        stroke:{
            curve:'smooth'
        },
        xaxis:{
            categories:['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
            labels:{
                style:{
                    colors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',]
                }    
            }
        },
        yaxis:{
            labels:{
                style:{
                    colors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',]
                }    
            }
        },
        legend: {
            position: 'top',
            labels: {
                colors:['#008FFB', '#00E396'] ,
                useSeriesColors: false
            },
        },
        grid: {
            show: false
        },
        tooltip:{
            fillSeriesColor:'true',
            x:{show:false}
            
        }   
        
    }

}

const topCustomers = {
    head: [
        'model',
        'lon & lat',
        'location'
    ],
    body: [
        {
            "username": "m0001",
            "order": "6.87, 79.86",
            "price": "Wellawate"
        }
    ]
}

const renderCustomerHead=(item,index)=>(
    <th key={index}>{item}</th>
)

const renderCustomerBody=(item,index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "post id",
        "lon & lat",
        "Model",
        "date fixed",
        "status"
    ],
    body: [
        {
            id: "~P001",
            loc: "6.87, 79.86",
            date: "17 Jun 2021",
            price: "M0001",
            status: "good"
        },
        {
            id: "~P002",
            loc: "6.87, 79.87",
            date: "1 Jun 2021",
            price: "M0001",
            status: "low"
        },
        {
            id: "~P003",
            loc: "6.87, 79.86",
            date: "27 Jun 2021",
            price: "M0001",
            status: "average"
        },
        {
            id: "~P004",
            loc: "6.87, 79.86",
            date: "1 Jun 2021",
            price: "M0001",
            status: "low"
        },
        {
            id: "~P001",
            loc: "6.87, 79.86",
            date: "27 Jun 2021",
            price: "M0001",
            status: "not working"
        }
    ]
}

const orderStatus = {
    "good": "success",
    "average": "primary",
    "low": "warning",
    "not working": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr >
        <td>{item.id}</td>
        <td>{item.loc}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)


const Dashboard = () => {

   

    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="card full-height">
                            <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type = "line"
                            height='100%'
                            color='white'
                            />
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item,index) => (
                                <div className="col-6" key={index} >
                                    
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                    
                                </div>
                                    ))
                        }
                    </div>
                </div>
                
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Model Location</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item,index)=>renderCustomerHead(item,index)}
                                bodyData={topCustomers.body}
                                renderBody={(item,index)=>renderCustomerBody(item,index)}
                            />
                        </div>
                       
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3> Post Details </h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData ={latestOrders.header}
                                renderHead={(item,index) => renderOrderHead(item,index) }
                                bodyData={latestOrders.body}
                                renderBody={(item,index) => renderOrderBody(item,index) }
                            />
                        </div> 
                        <div className="card__footer">
                            <Link to='/'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
