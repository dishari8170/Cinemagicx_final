import React, {useEffect, useRef, useState} from "react";


import Swal from "sweetalert2";

import axios from "axios";
import {FaEnvelope, FaKey, FaTrash} from "react-icons/fa";

import {FaPencil} from "react-icons/fa6";
import {Modal} from "react-bootstrap";
import Sidex from "@/Comp/Sidex";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)
    
    const [getc,setc] = useState({});





    function loaddataU(s="u") {

        axios.get("/api/adv").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<Sidex>





            <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
                <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                    <div className="w-100 h3"><div className="text-center">Add New Person</div>
                    </div>
                    <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                    <div className="card  bg-transparent p-5" style={{

                    }}>




                        {/*{getc?._id?<input type="hidden"  name="_id" className="form-control mt-1" placeholder="Name" defaultValue={getc?._id} />:""}*/}

                        <input type="text"  name="name" className="form-control mt-1" placeholder="Name" defaultValue={getc?.name} />
                        <input type="text"  name="email" className="form-control mt-1" placeholder="Email" defaultValue={getc?.email}/>
                        <input type="text" name="phone" className="form-control mt-1" placeholder="Mobile"  defaultValue={getc?.phone} />
                        <input type="text"  name="password" className="form-control mt-1" placeholder="Password"  defaultValue={getc?.password}/>

                        <div className="mt-3 align-self-center">

                            <div className="btn btn-primary" onClick={event => {


                                let r= document.querySelectorAll("input")

                                let dat={}

                                r.forEach(rx=>{
                                    dat[rx.name]=rx.value
                                })



                                Swal.fire(
                                    {title:"Details are",html: '<div style="white-space: pre-wrap;">'+JSON.stringify(dat) +"</div>",icon:"info",

                                        showCancelButton:true,
                                        showLoaderOnConfirm:true,

                                        preConfirm:async () => {

                                            Swal.showLoading()

                                            return await axios.post(`/api/adv${getc?._id?"?_id="+getc?._id:""}`, dat).then(r => {

                                                Swal.fire("Success", getc?.pass?"Publisher Updted":"Publisher Created", "success").then(y=>{

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


                <div className="container  text-center">

                    <div className="d-flex justify-content-between align-items-center">
                    <div className="h4">Publisher List</div>
                        <div className="btn btn-primary float-end my-2" onClick={u=>{

                        setc({})
                        setIsOpen(true)
                    }}>Add</div>

                    </div>

                    <table className="table table-bordered table-striped table-light">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>


                        {getudat.map( (et,ind)=>{



                            return <tr key={ind}>
                                <td>{et.name}</td>
                                <td>{et.phone}</td>
                                <td>{et.email}</td>
                                <td className=" ">
                                    <div className="d-flex justify-content-evenly align-items-center">
                                        <FaKey onClick={p=>{

                                            localStorage.setItem("sales",JSON.stringify(et))
                                            window.location="/sales"

                                        }}/>




                                        {/*<FaEnvelope onClick={o=>{*/}

                                        {/*    xxxtt(et.email)*/}
                                        {/*    setIsOpenE(true)*/}


                                        {/*}}/>*/}

                                        <FaTrash onClick={y=>{


                                            axios.delete("/api/adv?_id="+et._id).then(o=>{

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