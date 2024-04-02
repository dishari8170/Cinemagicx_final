
import React, {useEffect, useRef, useState} from "react";

import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {rh} from "@/lib/RH";

import {FaEnvelope, FaKey, FaPeopleArrows, FaSearch, FaStar, FaTrash, FaUser} from "react-icons/fa";




export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)
    const  [isOpenE,setIsOpenE]=useState(false)

    const  [getstr,setstar]=useState(0)

    const [xtxcc,xxxtt] = useState({});
    const cdata=useRef("")



    const  [getxdat,setxdat]=useState([])


    function loaddataU() {


        axios.get("/api/revx").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<>



        <div className="position-fixed end-0 bottom-0 m-3 m-lg-5 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4" style={{width:"60px",height:"60px",backgroundColor:"#f7a21a"}} onClick={u=>{

            setIsOpen(true)
        }}>


            <div className="h1 fw-bold">+</div>
        </div>



        <div className="d-flex">






            <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}}
                   fullscreen={false}  centered={true}
                   onEscapeKeyDown={ip=>{ip.preventDefault()}}>
                <Modal.Header style={{backgroundColor:"#0f0e4a",color:"white"}}>
                    <div className="w-100 h3">
                        <div className="text-center">Review Contents</div>
                    </div>
                    <button
                        onClick={(i)=>{setIsOpen(false)}}
                        className="bg-transparent border-0 h1 m-0">&times;</button>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#0f0e4a",color:"white"}}>



                    <div className="d-flex justify-content-center">
                    <img src={rh.ImUrl+xtxcc.BNR} width={320} alt=""/>
                    </div>

                    <p>TITLE:</p>
                    <b>{xtxcc.TITLE}</b>
                    <p>By:</p>
                    <b>{xtxcc.PRODUCER}</b>




                    <div className="" style={{minHeight:"200px"}}>
                        <p>Review:</p>
                    <b>{xtxcc.rev}</b>
                    </div>

                    {/*<div className="text-center" style={{minHeight:"200px"}} dangerouslySetInnerHTML={{__html:xtxcc.rev}}></div>*/}





                    <div className="d-flex justify-content-around align-items-center">


                        {Array.from({length: 5}).map((_, index) => {
                            const starValue = index + 1;
                            const isFilled = getstr >= starValue;

                            return (
                                <span
                                    key={index}
                                    style={{cursor: 'pointer'}}
                                    // onMouseEnter={() => setHoveredStar(starValue)}
                                    // onMouseLeave={() => setHoveredStar(0)}
                                    onClick={() => {

                                        setstar(index+1)

                                    }}
                                >
            {isFilled ? (
                <FaStar color="#f7a21a" className="h5"/>
            ) : (
                <FaStar color="#DCDCDC" className="h5"/>
            )}


                                     </span>
                            );
                        })
                        }




                    <div className="btn btn-primary" onClick={(i)=>{

                        axios.post("/api/createvideo",{_id:xtxcc.vid,xstar:getstr}).then(oo=>{

                            window.location.reload();
                        })

                    }}>


                        Set rating

                    </div></div>
                </Modal.Body>

            </Modal>





            <div className="w-100">




                <h4 className="fw-bold w-100 py-3 text-center"
                    style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Reviews </h4>




                <div className="text-center table-responsive">





                    <table className="table table-bordered table-light text-white">
                        <thead>
                        <tr className="text-white">
                            <th scope="col"  className="text-white"  style= {{backgroundColor:"#2C2E43"}}>Title</th>
                            <th scope="col"  className="text-white"  style= {{backgroundColor:"#2C2E43"}}>Name</th>
                            <th scope="col"  className="text-white"  style= {{backgroundColor:"#2C2E43"}}>Star</th>
                            <th scope="col" className="text-white"  style= {{backgroundColor:"#2C2E43"}}>Review</th>
                            <th scope="col"  className="text-white" style= {{backgroundColor:"#2C2E43"}}>Producer</th>
                            <th scope="col"  className="text-white" style= {{backgroundColor:"#2C2E43"}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>


                        {getudat.map( (et,ind)=>{



                            return <tr key={ind}>
                                <td style={{backgroundColor: "#595260"}} className="text-white pt-4">{et.TITLE}</td>
                                <td style={{backgroundColor: "#595260"}} className="text-white pt-4">{et.name}</td>
                                <td style={{backgroundColor: "#595260"}} className="text-white pt-4">


                                    {Array.from({length: 5}).map((_, index) => {
                                        const starValue = index + 1;
                                        const isFilled = et.star >= starValue;

                                        return (
                                            <span
                                                key={index}
                                                style={{cursor: 'pointer'}}
                                                // onMouseEnter={() => setHoveredStar(starValue)}
                                                // onMouseLeave={() => setHoveredStar(0)}
                                                onClick={() => {

                                                }}
                                            >
            {isFilled ? (
                <FaStar color="#f7a21a" className="h5"/>
            ) : (
                <FaStar color="#DCDCDC" className="h5"/>
            )}


                                     </span>
                                        );
                                    })
                                    }<br/>


                                    {Array.from({length: 5}).map((_, index) => {
                                        const starValue = index + 1;
                                        const isFilled = et.xstar >= starValue;

                                        return (
                                            <span
                                                key={index}
                                                style={{cursor: 'pointer'}}
                                                // onMouseEnter={() => setHoveredStar(starValue)}
                                                // onMouseLeave={() => setHoveredStar(0)}
                                                onClick={() => {

                                                }}
                                            >
            {isFilled ? (
                <FaStar color="#f7a21a" className="h5"/>
            ) : (
                <FaStar color="#DCDCDC" className="h5"/>
            )}


                                     </span>
                                        );
                                    })
                                    }


                                </td>
                                <td style={{backgroundColor: "#595260"}} className="text-white pt-4" >{et.rev}</td>
                                <td style={{backgroundColor: "#595260"}} className=" text-white pt-4">{et.PRODUCER}</td>
                                <td style={{backgroundColor: "#595260"}} className=" text-white " >
                                    <div className="d-flex justify-content-around">
                                    <div className="btn btn-outline-light  mt-2" style={{backgroundColor:"#FE0000"}} onClick={r=>{

                                        axios.delete("/api/revx?id="+et._id).then(o=>{

                                            window.location.reload()
                                        })
                                    }}>

                                        <FaTrash/> delete
                                    </div><div className="btn  btn-outline-light  mt-2" style={{backgroundColor:"blue"}} onClick={r=>{


                                    xxxtt(et)
                                    setIsOpen(true)
                                }}>

                                    <FaSearch/> View

                                </div></div>
                                </td>


                            </tr>


                        })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </>
}