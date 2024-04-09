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

        axios.get("/api/language").then(value => {


            setudat(value.data.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<Sidex>





        <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
            <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                <div className="w-100 h3"><div className="text-center">Language</div>
                </div>
                <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                <div className="card  text-white bg-transparent p-5" style={{

                }}>




                    {dp?<img src={rh.ImUrl+dp} alt={""}/>:""}

                    {getc?._id?<input type="hidden"  name="_id" className="form-control mt-1" placeholder="Name" defaultValue={getc?._id} />:""}

                    <b>Thumb:</b>
                    <UploadX cb={setdp}/>

                    <b>Name:</b>
                    <input type="text"   name="name" className="form-control mt-1" placeholder="Name" defaultValue={getc?.name} />

                    <div className="mt-3 align-self-center">

                        <div className="btn btn-primary" onClick={event => {


                            let r= document.querySelectorAll("input")

                            let dat={}

                            if (dp){dat.dp=dp;}

                            r.forEach(rx=>{
                                dat[rx.name]=rx.value
                            })



                            Swal.fire(
                                {title:"Details are",html: '<div style="white-space: pre-wrap;">'+JSON.stringify(dat) +"</div>",icon:"info",

                                    showCancelButton:true,
                                    showLoaderOnConfirm:true,

                                    preConfirm:async () => {

                                        Swal.showLoading()

                                        return await axios.post(`/api/language${getc?._id?"?_id="+getc?._id:""}`, dat).then(r => {

                                            Swal.fire("Success", getc?._id?"Language Updated":"Language Created", "success").then(y=>{

                                                window.location.reload()
                                                setIsOpen(false)
                                            })


                                        })


                                    }


                                })



                        }}
                        ><FaKey/> Register </div>

                    </div>
                </div>

            </Modal.Body>

        </Modal>





        <div className="container-fluid py-3 bg-white rounded">


            <div className="px-lg-3 text-center">

                <div className="d-flex justify-content-between align-items-center">
                    <div className="h4">language List</div>
                    <div className="btn btn-primary float-end my-2" onClick={u=>{

                        setc({})
                        setIsOpen(true)
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
                            <td><img src={rh.ImUrl+"/"+et.dp} alt="" width={150} height={100}/></td>
                            <td>{et.name}</td>

                            <td className=" ">
                                <div className="d-flex justify-content-evenly align-items-center">





                                    {/*<FaEnvelope onClick={o=>{*/}

                                    {/*    xxxtt(et.email)*/}
                                    {/*    setIsOpenE(true)*/}


                                    {/*}}/>*/}

                                    <FaTrash onClick={y=>{


                                        axios.delete("/api/language?_id="+et._id).then(o=>{

                                            window.location.reload()
                                        })

                                    }}/>


                                    <FaPencil onClick={y=>{

                                        setIsOpen(true)


                                        setc(et)

                                        console.log(et)


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