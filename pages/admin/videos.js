import React, {useEffect, useRef, useState} from "react";


import Swal from "sweetalert2";

import axios from "axios";
import {FaEnvelope, FaKey, FaTrash} from "react-icons/fa";

import {FaPencil} from "react-icons/fa6";
import {Modal} from "react-bootstrap";
import Sidex from "@/Comp/Sidex";
import {rh} from "@/lib/RH";
import UploadX from "@/Comp/UploadX";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)

    const [getc,setc] = useState({});

    const [dp,setdp] = useState(null);





    function loaddataU(s="u") {

        axios.get("/api/createvideo").then(value => {


            setudat(value.data.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<Sidex>








        <div className="container-fluid py-3 bg-white rounded">


            <div className="px-lg-3 text-center">

                <div className="d-flex justify-content-between align-items-center">
                    <div className="h4 text-dark">Videos List</div>
                    <div className="btn btn-primary float-end my-2" onClick={u=>{


                        window.location.href="/createvideo"

                    }}>Add</div>

                </div>

                <table className="table table-bordered table-striped table-light align-items-center align-middle">
                    <thead>
                    <tr>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>


                    {getudat.map( (et,ind)=>{



                        return <tr key={ind}>
                            <td><img src={rh.ImUrl+"/"+et.BNR} alt="" width={150} height={100}/></td>
                            <td>{et.TITLE}</td>

                            <td className=" ">
                                <div className="d-flex justify-content-evenly align-items-center">




                                    <FaPencil onClick={y=>{


                                        window.location.href="/createvideo?_id="+et._id
                                        // axios.delete("/api/createvideo?_id="+et._id).then(o=>{
                                        //
                                        //     window.location.reload()
                                        // })

                                    }}/>



                                    <FaTrash onClick={y=>{


                                        axios.delete("/api/createvideo?_id="+et._id).then(o=>{

                                            window.location.reload()
                                        })

                                    }}/>


                                </div>
                            </td>


                        </tr>


                    })
                    }
                    </tbody>
                </table>
            </div></div></Sidex>

}