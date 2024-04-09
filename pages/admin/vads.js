import React, {useEffect, useRef, useState} from "react";


import Swal from "sweetalert2";

import axios from "axios";
import {FaEnvelope, FaKey, FaTrash} from "react-icons/fa";

import {FaPencil} from "react-icons/fa6";
import {Modal} from "react-bootstrap";
import Sidex from "@/Comp/Sidex";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [getadat,setadat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)

    const [getc,setc] = useState({});





    function loaddataU(s="u") {

        axios.get("/api/adv").then(value => {


            setadat(value.data);

        })

        axios.get("/api/vads").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<Sidex>





        <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
            <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                <div className="w-100 h3"><div className="text-center">Video Add</div>
                </div>
                <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                <div className="card  bg-transparent p-5" style={{  }}  >



                    {/*{getc?._id?<input type="hidden"  name="_id" className="form-control mt-1" placeholder="Name" defaultValue={getc?._id} />:""}*/}

                    <input type="text"  name="name" className="form-control mt-1 ryc" placeholder="Name" defaultValue={getc?.name} />
                    <input type="text"  name="credit" className="form-control mt-1 ryc" placeholder="Credit" defaultValue={getc?.email}/>
                    <input type="text" name="vid" className="form-control mt-1 ryc" placeholder="Video ID"  defaultValue={getc?.phone} />
                    <input type="text" name="time" className="form-control mt-1 ryc" placeholder="Video Time { in secound } "  defaultValue={getc?.time} />
                    <select  name="adv" className="form-control mt-1 ryc"   defaultValue={getc?.adv}>

                        {getadat.map(p=><option value={p.name}>{p.name}</option>)}
                    </select>

                    <div className="mt-3 align-self-center">

                        <div className="btn btn-primary" onClick={event => {


                            let r= document.querySelectorAll(".ryc")

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

                                        return await axios.post(`/api/vads${getc?._id?"?_id="+getc?._id:""}`, dat).then(r => {

                                            Swal.fire("Success", getc?._id? "Video Add Created":"Video Add Updated", "success").then(y=>{

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





        <div className="container-fluid py-3 bg2 rounded">


            <div className="container  text-center">

                <div className="d-flex justify-content-between align-items-center">
                    <div className="h4  ">Ads List</div>
                    <div className="">
                    <div className="btn btn-primary  my-2" onClick={u=>{

                        setc({})
                        setIsOpen(true)
                    }}>Add</div>
                        <div className="btn btn-success  my-2 mx-2" onClick={async u => {

                            const up = document.getElementById("loadingx")
                            up.style.display = "flex";

                            await axios.post("/api/vads", {
                                name: "Google ADS",
                                credit: 1000000,
                                time: "---",
                                adv: "----"
                            }).then(y => {
                                window.location.reload()
                            })

                            up.style.display = "none";
                        }}>Google</div> <div className="btn btn-danger  my-2 " onClick={async u => {
                        const up = document.getElementById("loadingx")
                        up.style.display = "flex";

                        await axios.post("/api/vads",{name:"Blank ADS",credit:1000000,time:"---",adv:"----"}).then(y=>{
                            window.location.reload()
                        })

                        up.style.display = "none";

                    }}>Blank</div>
                </div>
                </div>

                <table className="table table-bordered table-striped   ">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Skip Time</th>
                        <th scope="col">Advertiser</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>


                    {getudat.map( (et,ind)=>{



                        return <tr key={ind}>
                            <td>{et.name}</td>
                            <td>{et.credit}</td>
                            <td>{et.time}</td>
                            <td>{et.adv}</td>
                            <td className=" ">
                                <div className="d-flex justify-content-evenly align-items-center">
                                    {/*<FaKey onClick={p=>{*/}

                                    {/*    localStorage.setItem("sales",JSON.stringify(et))*/}
                                    {/*    window.location="/sales"*/}

                                    {/*}}/>*/}




                                    {/*<FaEnvelope onClick={o=>{*/}

                                    {/*    xxxtt(et.email)*/}
                                    {/*    setIsOpenE(true)*/}


                                    {/*}}/>*/}

                                    <FaTrash onClick={y=>{


                                        axios.delete("/api/vads?_id="+et._id).then(o=>{

                                            window.location.reload()
                                        })

                                    }}/>


                                    { et.name!=="Google ADS" &&   et.name !=="Blank ADS" ? <FaPencil onClick={y => {

                                        setIsOpen(true)


                                        setc(et)

                                        console.log(et)


                                    }}/>:""}


                                </div>
                            </td>


                        </tr>


                    })
                    }
                    </tbody>
                </table>
            </div></div></Sidex>

}