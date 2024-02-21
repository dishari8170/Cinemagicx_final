import {DndProvider, useDrag, useDrop} from "react-dnd";
import React, {useEffect, useState} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import axios from "axios";
import {rh} from "@/lib/RH";
import {Modal} from "react-bootstrap";
import {useRouter} from "next/router";
import UploadX from "@/Comp/UploadX";
import {FaArrowDown, FaArrowRight, FaArrowUp, FaPlus, FaTrash} from "react-icons/fa";
import Sidex from "@/Comp/Sidex";


function movestructure(object, keytomove, up = true) {
    const keys = Object.keys(object);
    const index = keys.indexOf(keytomove);

    if (index === -1) {

        return object;
    }

    const newIndex = up ? index - 1 : index + 1;

    if (newIndex < 0 || newIndex >= keys.length) {
        return object
    }

    [keys[index], keys[newIndex]] = [keys[newIndex], keys[index]];

    const reorderedObject = {};
    keys.forEach(key => {
        reorderedObject[key] = object[key];
    });

    return reorderedObject;
}

const DraggableItem = ({data, pos, cat, upitem ,delex,setpropsx}) => {


    const [{isDragging}, drag] = useDrag({
        type: 'item',
        item: {data, pos, cat},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),


    });

    return (
        isDragging ? <></> : <div
            ref={drag}
            className=""
            style={{
                opacity: isDragging ? .5 : 1,
                cursor: 'move',


            }}
        >

            <div className="card bg2  p-2">
                <img src={rh.ImUrl+data.BNR} className="img-fluid rounded-top-1" height={250} style={{maxHeight:"250px"}} alt=""/>

                <div className="card-footer" >

                    <div className="d-flex justify-content-between align-items-center w-100 text-white "  style={{height:"50px"}}>

                        <div className="" >{data.TITLE}</div>

                        <div className="h4">

                            <div className="form-switch d-flex align-items-center ">
                                <input className="form-check-input me-3 mb-2" type="checkbox" defaultChecked={data.paid} onChange={uu=>{

                                setpropsx(cat,pos,   uu.target.checked)
                                }}/>

                                <FaTrash style={{cursor:"pointer"}} onClick={o=>{


                                    delex(cat,pos)


                                }}/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>




        {/*    <div className="cbody shadow-sm position-relative rounded-3 "*/}
        {/*         style={{backgroundImage: "url('"+rh.ImUrl+data.BNR+"')"}}>*/}


        {/*        <div className="bg-black opacity-75 rounded-bottom-3  position-absolute bottom-0  justify-content-between d-flex align-items-center px-2 w-100"*/}
        {/*             style={{height: "70px"}}>*/}

        {/*            <div className="h5 text-white">*/}

        {/*                {data.TITLE}*/}

        {/*            </div>*/}
        {/*            <div className="h5 text-white d-flex align-items-center z-n1">*/}
        {/*                <div className="form-switch">*/}
        {/*                    <input className="form-check-input" type="checkbox" role={"switch"}/>*/}
        {/*                </div>*/}
        {/*                <FaTrash style={{cursor:"pointer"}} onClick={o=>{*/}


        {/*                    delex(cat,pos)*/}


        {/*                }}/>*/}

        {/*            </div>*/}

        {/*        </div>*/}




        {/*            /!*<div className=">*!/*/}

        {/*            /!*    <div className="btn btn-primary">DELEE</div>*!/*/}

        {/*            /!*    /!*<FaGears className="h4 me-4" onClick={r => {*!/*!/*/}


        {/*            /!*    /!*}}/>*!/*!/*/}
        {/*            /!*</div>*!/*/}




        {/*    </div>*/}


        {/*</div>*/}
        </div>
    );
};
const DroppableArea = ({onDrop, cat, pos}) => {
    const [{isOver}, drop] = useDrop({
        accept: 'item',
        drop: (item) => onDrop(item, cat, pos),

        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    if (isOver) {

        document.getElementById(`${cat + pos}`).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }

    return (
        <div
            ref={drop}
            id={cat + pos}
            className="w-75 top-0 position-absolute"
            style={{

                backgroundColor: `${isOver ? '#00ff0022' : ""}`,

                minWidth: "10px",
                minHeight: "250px",
                position: "absolute"
            }}
        >
        </div>
    );
};

export default () => {

    const router = useRouter();

    const [vdata, setdatav] = useState({});

    const [xdata, setdata] = useState([]);

    // const [xdata, setdata] = useState([]);

    useEffect(() => {

        if (router.query._id) {


            const up = document.getElementById("loadingx")
            up.style.display = "flex";


            axios.get("/api/categories?direct=true&limit=10&on=_id&search=" + router.query._id).then(value => {


                setdatav(JSON.parse(value.data.data))
                up.style.display = "none";


            })

        }







    }, [router.query])

    const swappos = () => {

    }
    const [droppedItem, setDroppedItem] = useState(null);

    const handleDrop = (item, cat, pos) => {

        const f = vdata;


        f[item.cat].splice(item.pos, 1)


        f[cat].splice(pos, 0, item.data)


        setdatav({...f});


    };




    const [isOpen, setIsOpen] = useState(false)
    const [isads, setIsads] = useState(false)
    const [isOpenx, setIsOpenx] = useState(false)
    const [isOpenbnr, setIsOpenbnr] = useState(false)
    const [ads, setads] = useState([])
    const [datax, setdatax] = useState([])
    const [tixtle, settitle] = useState({name: "", chec: null})
    const [dp, setdp] = useState("")
    const [currentstring    , setcurrentstring] = useState("")


    function loadads(s = "") {

        const up = document.getElementById("loadingx")
        up.style.display = "flex";

        axios.get("/api/ads?limit=10&on=name&search=" + s).then(value => {


            setads(value.data.data);
            up.style.display = "none";


        })

    }
    function loadvdo(s = "") {

        const up = document.getElementById("loadingx")
        up.style.display = "flex";

        axios.get("/api/createvideo?limit=10&on=TITLE&pro=TITLE,BNR,APP&search=" + s).then(value => {


            setdatax(value.data.data);
            up.style.display = "none";


        })

    }


    const deletx = (cat,pos) => {

        let rto=vdata;

        console.log( rto[cat].splice(pos, 1));

        setdatav({...rto})

    }
    const setpropx = (cat,pos,val) => {



    vdata[cat][pos]["paid"]=val


    }

    const updateserver = async () => {

        const up = document.getElementById("loadingx")
        up.style.display = "flex";
        await axios.post("/api/categories?_id=" + router.query._id, {data: JSON.stringify(vdata)})
        up.style.display = "none";
    }



    const upitem=(cat,pos)=>{

    }

    return <DndProvider backend={HTML5Backend}>


        <Sidex>

        {/*/// Sider Xs*/}



        <Modal show={isads} fullscreen={true} centered={true} onEscapeKeyDown={ip => {
            ip.preventDefault()
        }}>
            <Modal.Header className="bg2">

                <div className="w-100 h3 ">
                    {/*<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>*/}
                    <div className="text-center float-start">Add New Category</div>
                </div>

                <button onClick={(i) => {
                    setIsads(false)
                }} className="bg-transparent border-0 h1 ">&times;</button>

            </Modal.Header>
            <Modal.Body className="bg2">


                <div className="row">
                    <div className="col-12">
                        <div className="h5">Search :</div>
                        <input className="w-100 form-control" id="lk"/>
                    </div>


                    <div className="col-12 text-center">


                        <div className="btn btn-primary mt-3 w-100" onClick={o => {

                            const tp = document.getElementById("lk")
                            loadads(tp.value);



                        }}>Search
                        </div>
                    </div>

                    {ads.map((itm,inxs)=>{

                        return <div key={inxs}  className="col-lg-4 col-md-6 col-12 mt-2 ">


                            <div className="cbody shadow-sm position-relative rounded-3 "
                                 style={{backgroundImage: "url('"+rh.ImUrl+itm.dp+"')"}}>

                                <div className="bg-black opacity-75 rounded-bottom-3  position-absolute bottom-0  justify-content-between d-flex align-items-center px-2 w-100"
                                     style={{height: "70px"}}>

                                    <div className="h5 text-white">

                                        {itm.name}

                                    </div>
                                    <FaPlus className="h2 me-3" onClick={oc=>{

                                        vdata["ADS|" + (Math.random().toString().substring(2, 8))] = itm

                                        setIsads(false)
                                    }}/>
                                </div>
                            </div>

                        </div>
                    })}


                </div>




            </Modal.Body>

        </Modal>




            <Modal show={isOpenbnr} fullscreen={false} centered={true} onEscapeKeyDown={ip => {
            ip.preventDefault()
        }}>
            <Modal.Header className="bg2">

                <div className="w-100 h3 ">
                    {/*<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>*/}
                    <div className="text-center float-start">Add New Category</div>
                </div>

                <button onClick={(i) => {
                    setIsOpenbnr(false)
                }} className="bg-transparent border-0 h1 ">&times;</button>

            </Modal.Header>
            <Modal.Body className="bg2">


<div className="w-100 justify-content-center  d-flex" style={{height:"250px"}}>
    <img src={rh.ImUrl+dp} className="h-100" alt=""/>


</div>


<UploadX cb={(ttx)=>{setdp(ttx)}}/>





                    <div className="col-12 text-center">


                        <div className="btn btn-primary mt-3 w-100" onClick={o => {

                            const up = document.getElementById("loadingx")
                            up.style.display = "flex";

                            axios.post("/api/more",{dp:dp}).then(t=>{


                                vdata[currentstring].push({dp:dp,_id:t.data._id})

                                up.style.display = "none";

                                setIsOpenbnr(false)
                            })

                        }}>Submit
                        </div>




                </div>
            </Modal.Body>

        </Modal>


        <Modal show={isOpen} fullscreen={true} centered={true} onEscapeKeyDown={ip => {
            ip.preventDefault()
        }}>
            <Modal.Header className="bg2">


                        {/*<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>*/}
                        <div className="h3">Add New Items</div>

                <button onClick={(i) => {
                    setIsOpen(false)
                }} className="bg-transparent border-0 h1 ">&times;</button>

            </Modal.Header>
            <Modal.Body className="bg2">
                <div className="row">
                    <div className="col-12">
                        <div className="h5">Search :</div>
                        <input className="w-100 form-control" id="lk"/>
                    </div>


                    <div className="col-12 text-center">


                        <div className="btn btn-primary mt-3 w-100" onClick={o => {

                            const tp = document.getElementById("lk")
                            loadvdo(tp.value);



                        }}>Search
                        </div>
                    </div>

                    {datax.map((itm,inxs)=>{

                        return <div key={inxs}
                                    className="col-lg-4 col-md-6 col-12 mt-2 shadow-sm " >

                            <div className="card bg-white bg2 ">
                                <img src={rh.ImUrl+itm.BNR} className="img-fluid rounded-top-1" style={{maxHeight:"250px",cursor:"pointer"}} alt=""/>

                                <div className="card-footer" style={{backgroundColor:"#031525"}}>

                                    <div className="d-flex justify-content-between align-items-center w-100 text-white "  style={{height:"50px"}}>

                                   <div className="" >{itm.TITLE}</div>

                                        <FaPlus className="h1" onClick={pp=>{
                                            vdata[currentstring].push(itm)
                                            setIsOpen(false)
                                        }}/>
                                    </div>
                                </div>

                            </div>



                        </div>



                            {/*    <div className="bg-black opacity-75 rounded-bottom-3  position-absolute bottom-0  justify-content-between d-flex align-items-center px-2 w-100"*/}
                            {/*         style={{height: "70px"}}>*/}

                            {/*        <div className="h5 text-white">*/}

                            {/*            {itm.TITLE}*/}

                            {/*        </div>*/}
                            {/*        <FaPlus className="h2 me-3" onClick={oc=>{*/}

                            {/*            */}
                            {/*            */}
                            {/*        }}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                    })}


                </div>
            </Modal.Body>

        </Modal>


        <Modal show={isOpenx} fullscreen={false} centered={true} onEscapeKeyDown={ip => {
            ip.preventDefault()
        }}>
            <Modal.Header className="bg2">
                <div className="d-flex justify-content-between align-items-center w-100">

                    <div className="d-flex align-items-center h4">
                        <div className=" ">
                            <div className="form-switch mb-1">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault" defaultChecked={tixtle.chec !== null && tixtle.chec !== "null"}
                                       onChange={async o => {

                                           if (tixtle.chec == null || tixtle.chec === "null") {


                                               const up = document.getElementById("loadingx")
                                               up.style.display = "flex";

                                               const rtc = await axios.post("/api/more", {data: "{}"})
                                               up.style.display = "none";

                                               tixtle.chec = rtc.data._id;
                                           } else {

                                               const rtc = await axios.delete(rh.api + "api/more?_id=" + tixtle.chec)

                                               tixtle.chec = null;
                                           }

                                       }}/>
                            </div>
                        </div>
                        More
                    </div>
                    <div className="h2 me-5">Update Item</div>

                    <button onClick={(i) => {
                        setIsOpenx(false)
                    }} className="bg-transparent border-0 h1 ">&times;</button>
                </div>
            </Modal.Header>
            <Modal.Body className="bg2 pb-5 ">
                <div className="row ">
                    <div className="col-12">
                        <div className="h5">Name :</div>
                        <input className="w-100 form-control" id="lkx" defaultValue={tixtle.name.split("|")[0]}/>
                    </div>


                    <div className="col-12 text-center">


                        <div className="btn btn-primary mt-3 w-100" onClick={o => {


                            //
                            //
                            // if (vdata[tixtle.name]) {
                            //     delete vdata[tixtle.name]
                            //
                            // }


                            const tp = document.getElementById("lkx")


                            if (tp.value.length > 1) {


                                if (tixtle.name === "") {


                                    vdata[tp.value + "|" + tixtle.chec] = []


                                } else {
                                    const updatedObject = {};
                                    for (const key in vdata) {
                                        if (key === tixtle.name) {

                                            if (tixtle.chec == null) {

                                                updatedObject[tp.value] = vdata[key];
                                            } else {
                                                updatedObject[tp.value + "|" + tixtle.chec] = vdata[key];

                                            }


                                        } else {
                                            updatedObject[key] = vdata[key];
                                        }
                                    }

                                    setdatav(updatedObject)


                                }

                            }
                            setIsOpenx(false)

                            settitle({name: "", chec: null})


                        }}>Submit
                        </div>
                    </div>


                </div>
            </Modal.Body>

        </Modal>

        <div className="container-fluid">


            <div className="w-100 bg2 d-flex justify-content-between align-items-center px-2" style={{height: "60px"}}>
                <div className="">


                    <div className="btn btn-primary " onClick={(o => {

                        settitle({name: "", chec: null})
                        setIsOpenx(true)
                    })}>Video
                    </div>


                    <div className="btn btn-primary mx-2" onClick={(o => {


                        const yu = vdata


                        yu["SLIDER|" + (Math.random().toString().substring(2, 8))] = []

                        setdatav({...yu})

                    })}>SLIDER
                    </div>

                    <div className="btn btn-primary" onClick={(o => {


                        setIsads(true)


                    })}>ADS
                    </div>

                    <div className="btn btn-primary ms-2" onClick={(o => {


                        const yu = vdata

                        const getp = prompt("Give The Name Of Category")


                        yu["Categoryx|" + getp] = []

                        setdatav({...yu})

                    })}>Category
                    </div>


                </div>
                <div className="">
                    <div className="btn btn-danger " onClick={o=>{

                         updateserver();

                    }}>Update</div>
                </div>

            </div>


            {Object.entries(vdata).reverse().map(([v, k], inx) => {

                return <div className="text-white row" key={inx}>
                    <div className="col-12 ">
                        <div className="d-flex display-6 justify-content-between  border-bottom border-4  ">

                            <div
                                className="h1 bg2 px-5 py-1  rounded-top-5  rounded-start-2  mb-0 mt-3">{v.split("|")[0] !== "Categoryx" ? v.split("|")[0] : v.split("|")[1]}</div>
                            <div className="">


                                {v.split("|")[0]!=="ADS" ?
                                <div className="btn btn-success  mt-3 me-1" onClick={o=>{

                                    setcurrentstring(v)

                                    if (v.split("|")[0] === "Categoryx" ) {

                                        setIsOpenbnr(true)
                                    }else {


                                        setIsOpen(true)
                                    }


                                }}>Add</div> :""}

                                {v.split("|")[0] !== "SLIDER" &&v.split("|")[0] !== "ADS" ? <div className="btn btn-primary mt-3" onClick={u => {


                                    const jk = v.split("|")

                                    if (jk[0] === "Categoryx") {

                                        const rty = prompt("Whats New Name??", jk[1])


                                        const updatedObject = {};
                                        for (const key in vdata) {
                                            if (key === v) {

                                                updatedObject[jk[0] + "|" + rty] = vdata[key];


                                            } else {
                                                updatedObject[key] = vdata[key];
                                            }
                                        }

                                        return;
                                    }

                                    tixtle.name = v;
                                    tixtle.chec = jk.length === 2 ? jk[1] : null;
                                    setIsOpenx(true)

                                    console.log(v)
                                }}> Edit
                                </div> : ""}

                                <div className="btn btn-danger mt-3 ms-1" onClick={u => {


                                    const updatedObject = {};
                                    for (const key in vdata) {
                                        if (key === v) {
                                            // updatedObject[tp.value + "|" + tixtle.chec] = vdata[key];
                                        } else {
                                            updatedObject[key] = vdata[key];
                                        }
                                    }

                                    setdatav(updatedObject)


                                }}> Delete
                                </div>
                                {v.split("|").length === 2 && v.split("|")[1] !== "null" && v.split("|")[0] !== "SLIDER" &&v.split("|")[0] !== "ADS" && v.split("|")[0] !== "Categoryx" ?
                                    <div className="btn btn-danger mt-3 ms-1" onClick={u => {


                                        router.push("/admin/more?_id=" + v.split("|")[1])


                                    }}> More
                                    </div> : ""}
                                <FaArrowDown className="mx-3" onClick={o=>{


                                    setdatav(  movestructure  (vdata,v,true))


                                }}/>

                                <FaArrowUp onClick={o=>{


                                    setdatav(  movestructure  (vdata,v,false))


                                }}/>

                            </div>


                        </div>

                    </div>

                    {v.split("|")[0] !== "ADS" ?  v.split("|")[0] !== "Categoryx" ? <> {k.map((i, o) => <div key={o}
                                                                                className="col-lg-4 col-md-6 col-12 mt-2 ">
                            <div className="position-relative"><DraggableItem data={i} pos={o} cat={v} upitem={upitem} delex={deletx} setpropsx={setpropx}/> <DroppableArea
                                onDrop={handleDrop} pos={o} cat={v}/></div>
                        </div>)}

                            {k.length === 0 ? <div className="col-lg-4 col-md-6 col-12 mt-2 ">
                                <div className="w-100  position-relative" style={{height: "250px"}}><DroppableArea
                                    onDrop={handleDrop} pos={0} cat={v}/></div>
                            </div> : ""}
                        </>


                        : k.map((lp,op)=>{

                            return  <div key={op}
                                         className="col-lg-4 col-md-6 col-12 mt-2 " >

                                <div className="card p-2 bg2">
                  <img src={rh.ImUrl+lp.dp} className="img-fluid" height={250} style={{height:"250px",cursor:"pointer"}} alt="" onClick={u=>{

                                    router.push("/admin/more?_id="+lp._id)
                                }}/>

                                    <div className="card-footer">

                                        <div className="d-flex justify-content-between h1  w-100 text-white " >

                                            <FaArrowRight/>

                                            <FaTrash  onClick={iod=>{
                                                deletx(v,op)
                                            }}/>
                                        </div>
                                    </div>

                                </div>



                            </div>


                        }):<div className="col-12 p-2 "

                    >


                            <img src={rh.ImUrl+k.dp} className="w-100" height={k.height} style={{height:k.height,cursor:"pointer",objectFit:"fill"}} alt="" onClick={u=>{

                            }}/>


                    </div>}

                    {/*<div className="col-12 bg-white mb-5" style={{minHeight:"1px"}}></div>*/}


                </div>


            })}




        </div>


        </Sidex>
    </DndProvider>

}