import React from 'react'
import logo from './../assets/images/bam.png'
import solar_card from './../assets/JsonData/solar_card.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import ThemeAction from '../redux/actions/ThemeAction'
import { useSelector } from 'react-redux'



const chartOptions={
    series:[{
        name:'Daily',
        data:[40,69,34,70,69,18,67,78]},
        {
        name:'Hourly generation',
        data:[40,23,54,76,50,26,48,35]    
    }
    ],
    options: {
        colors: ['#008FFB', '#00E396', '#fb0b12','#CED4DC'],
        chart:{
            background:'transparent'
            
        },
        dataLabels:{
            enabled:true,
            background:{
                foreColor:'white'
            }
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


const Analytics = () => {
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">
                Solar Measures
            </h2>
            <div className="row">
                <div className="col-2">
                    <div className="card_img">
                        <img src={logo}/>
                    </div>
                </div>
                <div className="col-2">
                    <div className="card_content">
                        <h2 className="page-header">
                            M0001
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                        <div className="card full-height">
                                <Chart
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type = "area"
                                height='100%'
                               
                                />
                        </div>
                </div>
                <div className="col-6">
                    <div className="row">
                            {
                                solar_card.map((item,index) => (
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
                    
                </div>

        </div>
    )
}

export default Analytics
