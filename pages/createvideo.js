import UploadX from "@/Comp/UploadX";
import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import {rh} from "@/lib/RH";
import {Modal} from "react-bootstrap";
import Swal from "sweetalert2";
import {FaKey} from "react-icons/fa";
import Sidex from "@/Comp/Sidex";

export async function getServerSideProps() {
    //Making a get request to an API endpoint to get posts.
    const response = await axios.get(rh.api+"api/categories");
    const responsex = await axios.get(rh.api+"api/language");
    const responsez = await axios.get(rh.api+"api/publisher");

    return {
        props: {
            cat: response.data,
            lang:responsex.data,
            prod:responsez.data

        },
    };
}


export default (prop) => {

const [bnrx,setbnr]=useState({bnr:"",app:""})
    const  [isOpen,setIsOpen]=useState(false)
    const  [data    ,setdata]=useState([])
    const  [seris,setseris]=useState({name:"Is it Series ?",id:""})


    return <>


        <Sidex>
        <Modal show={isOpen}  fullscreen={false}  centered={true}  onEscapeKeyDown={ip=>{ip.preventDefault()}} >
            <Modal.Header className="bg2" >

                <div className="w-100 h3 ">
                    <div className="text-center">Add New Series</div>
                </div>
                <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>

            </Modal.Header>
            <Modal.Body className="bg2 " >


                <div className="border rounded-4 d-flex align-items-center justify-content-around mt-2 py-2 lx" onClick={o=>{

                    setseris({name:"Is it Series ?",id:""});
                    setIsOpen(false)
                }}>


                    <img src={rh.ImUrl+"img_1.png"} alt="" className="rounded-4" height={100}/>

                    <div className="h4">DESELECT </div>


                </div>


                {
                    data.map((v,i)=>{
                        return <div className="border rounded-4 d-flex align-items-center justify-content-around mt-2 py-2 lx" key={i} onClick={o=>{

                            setseris(v);
                            setIsOpen(false)
                        }}>


                            <img src={rh.ImUrl+v.dp} alt="" className="rounded-4" height={100}/>

                            <div className="h4">{v.name}</div>


                    </div>
                    })
                }



            </Modal.Body>

        </Modal>


        <div className="rounded p-4 bg2">


            <div className="row justify-content-center">


                <div className="col-12  col-md-6 mt-2">
                    <div className="">BANNER :</div>

                    <div className="border p-4 d-flex align-items-center justify-content-center rounded "
                         style={{height: "250px"}}>

                        <div className="position-relative h-100 w-100">

                            <div className="d-flex justify-content-center ">
                            {  bnrx.bnr? <img src={rh.ImUrl+bnrx.bnr} alt="" height={150}/> :  <div style={{
                                textAlign: "center",
                                fontSize: "80pt"
                            }}>+
                            </div>}
                        </div>

                            <div className="position-absolute bottom-0 w-100">


                                <UploadX cb={(bnr)=>{

                                    let u= {...bnrx};
                                    u.bnr=bnr;
                                    setbnr(u);



                                }}/></div>
                        </div>

                    </div>


                </div>       <div className="col-12  col-md-6 mt-2">
                    <div className="">APP IMAGE :</div>

                    <div className="border p-4 d-flex align-items-center justify-content-center rounded "
                         style={{height: "250px"}}>

                        <div className="position-relative h-100 w-100">

                            <div className="d-flex justify-content-center ">
                            {  bnrx.app? <img src={rh.ImUrl+bnrx.app}  height={150} alt=""/> : <div style={{
                                textAlign: "center",
                                fontSize: "80pt"
                            }}>+
                            </div>

                            }
                            </div>


                            <div className="position-absolute bottom-0 w-100">


                                <UploadX cb={(bnr)=>{

                                    let u= {...bnrx};
                                    u.app=bnr;
                                    setbnr(u);



                                }}/></div>
                        </div>

                    </div>


                </div>


                <div className="col-12 col-lg-4 col-md-6 mt-2">

                    <div className="">Video ID:</div>

                    <input type="text" name="VIDEOID" className="form-control rtx"/>

                </div>


                <div className="col-12 col-lg-4 col-md-6 mt-2">

                    <div className="">TITLE :</div>
                    <input type="text" name="TITLE" className="form-control rtx"/>

                </div>

                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className="">PRODUCER :</div>

                    <select name="PRODUCER" className="form-control rtx">

                    <option value="" >SELECT PRODUCER</option>

                    {prop.prod?.map((nam,inx)=>{

                        return  <option value={nam.name} key={inx}>{nam.name}</option>


                    })}

                </select>
                </div>


                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> DIRECTOR :</div>
                    <input type="text" name="DIRECTOR" className="form-control rtx"/>

                </div>
                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> DURATION :</div>
                    <input type="text" name="DURATION" className="form-control rtx"/>

                </div>
                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> AWARDS :</div>
                    <input type="text" name="AWARDS" className="form-control rtx"/>

                </div>
                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> RATING :</div>
                    <input type="text" name="RATING" className="form-control rtx" />

                </div>

                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> RELEASE YEAR :</div>
                    <input type="text" name="YEAR" className="form-control rtx"/>

                </div>

                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> CAST :</div>
                    <input type="text" name="CAST" className="form-control rtx"/>

                </div>

                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> SESSION :</div>
                    <input type="text" name="SESSION" className="form-control rtx"/>

                </div>

                <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> LANGUAGE :</div>


                    <select name="LANGUAGE" className="form-control rtx">

                        <option value="" >SELECT LANGUAGE</option>

                        {prop.lang?.data.map((nam,inx)=>{

                            return  <option value={nam.name} key={inx}>{nam.name}</option>


                        })}

                    </select>

                </div>
 <div className="col-12 col-lg-4 col-md-6 mt-2">
                    <div className=""> CATEGORY :</div>


                    <select name="CATEGORY" className="form-control rtx">

                        <option value="" >SELECT CATEGORY</option>

                        {prop.cat?.data.map((nam,inx)=>{

                            return  <option value={nam._id}  key={inx}>{nam.name}</option>


                        })}

                    </select>

                </div>


                <div className="col-12 mt-2">

                    <div className=""> DESCRIPTION :</div>


                    <textarea className=" mt-1 form-control rtx" name="DESCRIPTION" id="" rows="7"></textarea>

                </div>


<div className="col-4 d-flex align-items-center">



    <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={seris.name!=="Is it Series ?"} onChange={()=>{

          const up= document.getElementById("loadingx")
            up.style.display="flex";

 axios.get("/api/genre").then(t=>{

     up.style.display="none"

     setdata(t.data)

     setIsOpen(true)


 })


            // setseris("")
            //
            // setseris("")
            //
            // setIsOpen(true)


        }}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{seris.name}</label>
    </div>

</div>
<div className="col-7 mt-2">
    <div className="btn btn-outline-light w-100" onClick={(i)=> {

        let fg = document.querySelectorAll(".rtx")


        const rs = {};


        fg.forEach((v, i) => {
                rs[v.name] = v.value;
            }
        );


        rs["SERIES"] = seris._id;
        rs["BNR"] = bnrx.bnr;
        rs["APP"] = bnrx.app;


        console.log(rs);
        const up = document.getElementById("loadingx")
        up.style.display = "flex";

        axios.post("/api/createvideo",rs).then(t => {

            up.style.display = "none";

            window.location.href="/admin/videos"


        })
    }

    }>

        SUBMIT
    </div>
</div>
                <div className="my-5"></div>

            </div>
        </div>
        </Sidex>
    </>

}