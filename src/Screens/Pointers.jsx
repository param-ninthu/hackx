import React ,{useState,useEffect} from 'react';
import ReactMapGL ,{Marker,Popup} from 'react-map-gl';
import * as loc from './../assets/JsonData/locations.json'
import Map from './../components/Map/Mapp'

const Pointers = () => {
    
    let [viewport , setViewport] = useState({
        latitude : 37.75,
        longitude : -122.43,
        zoom:8,
        height:"100vh",
        width:"100%",
    });

    return (
        <div>
            <h2 className="page-header">
                Pointers
            </h2>
            <div className="row">
                <div className="col-12" >
                    <div className="card">
                        <div className="card__body">
                                {/* <ReactMapGL 
                                    mapboxApiAccessToken={"pk.eyJ1IjoibmludGh1IiwiYSI6ImNrdTZvMjhrczA5amkydnA3Zmszb2I0eTcifQ.IC6LSHiw2Yl_c11MiyHVTw"}
                                    {...viewport}
                                    onViewportChange={(newViewport)=> setViewport(newViewport)}>

                                </ReactMapGL> */}
                                <Map/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Pointers;
