import axios from "axios";
import {FaGear} from "react-icons/fa6";
import {Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {DndProvider, useDrag} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";




const VideosCard = ({gear}) => {
    const [{ isDragging }, drag,prev] = useDrag({
        type: 'ITEM', // A unique identifier for the type of item being dragged
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });



    return <div className="col-lg-4 col-md-6 col-12 mt-3 " ref={drag} style={{}}>
        <div className="cbody shadow-sm position-relative rounded-3 "
             style={{backgroundImage: "url('/img.png')"}}>

            <div className="bg-black opacity-75 rounded-bottom-3  position-absolute bottom-0 w-100"
                 style={{height: "70px"}}></div>
            <div className="p-3">
                <div className="h5  text-wrap ">Movie Nddddddddd ddd ddddd ddddddsame</div>

                <div className="h5 s1 position-absolute bottom-0 mb-4 pb-1">Producer</div>
                <div className="h6 s1 position-absolute bottom-0 ">Producer</div>

                <div className="position-absolute align-middle bottom-0 end-0  mb-3">


                    <FaGear className="h4 me-4" onClick={r => {

                        gear(true)
                    }}/>
                </div>

            </div>


        </div>

    </div>
}

export default () => {
    const [isOpen, setIsOpen] = useState(false)

    const [mvdata, mvsettitle] = useState({})
    const [data , setdata] = useState([])


    //
    // useEffect(()=> {
    //
    //     const up = document.getElementById("loadingx")
    //     up.style.display = "flex";
    //
    //     axios.get("/api/createvideo").then(t => {
    //
    //         up.style.display = "none"
    //
    //         setdata(t.data?.data)
    //
    //
    //     })
    // },[])

    return <>


        <Modal show={isOpen} onHide={(i) => {
            setIsOpen(false)
        }}  centered={true} onEscapeKeyDown={ip => {
            ip.preventDefault()
        }}>
            <Modal.Header style={{backgroundColor: "#013571", color: "white"}}>
                <div className="w-100 h3">
                    <div className="text-center">Add New Person</div>
                </div>
                <button onClick={(i) => {
                    setIsOpen(false)
                }} className="bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: "#013571", color: "white"}}>

            </Modal.Body>
        </Modal>


        {/*<div className="form-switch">*/}
        {/*<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>*/}
        {/*</div>*/}

        <DndProvider backend={HTML5Backend}>
        <div className="" style={{minHeight: "80px"}}></div>
        <div className="container">
            <div className="row justify-content-center">


                {data.map((o,p)=>{


                    return <VideosCard gear={setIsOpen}  />

                })}




            </div>


        </div>
        </DndProvider>
    </>

}