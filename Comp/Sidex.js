import {
    FaBars,
    FaHome,

    FaPowerOff,
    FaUser, FaVideo
} from "react-icons/fa";


import React, {useEffect, useState} from "react";


import {useRouter} from "next/router";

//
//
// import {SiSololearn} from "react-icons/si";
// import {GrLanguage} from "react-icons/gr";
// import {GiRollingEnergy} from "react-icons/gi";
// import {ImStatsBars} from "react-icons/im";
// import {MdOutlineSlowMotionVideo} from "react-icons/md";
//


export default ( {children})=>{

    const [user, setuser] = useState({})


    function toggleSidebar() {
        const sidebarContent = document.getElementById('sidebar');
        sidebarContent.classList.toggle('show');


    }


    const router = useRouter()

    useEffect(()=>{


        if (localStorage.getItem("lol")){
            setuser( JSON.parse(localStorage.getItem("lol")))
        }


    },[])


    return <>
        <div className="">

            <div className="hdrxx d-flex align-items-center pe-4 justify-content-between bg2" >
                <div className="text-white d-flex  align-items-center">
                    {/*<FaHome className=" mx-2 h2" onClick={toggleSidebar} />*/}
                    <img src="https://cinemagicx.com/assets/images/logo/logo.png"  className="rounded-circle mx-4" alt=""/>


                    {/*<div className="">*/}

                    {/*    <div className="fw-bolder ">Admin</div>*/}
                    {/*    <div className="fw-medium">#id-3456</div>*/}
                    {/*</div>*/}

                </div>

                <div className="text-white h3">
                    {/*Hotel Motel Club*/}
                </div>

                <FaBars className="text-white h2" onClick={toggleSidebar} />


            </div>



            <div className="d-flex  overflow-x-hidden h-100">


                <div id="sidebar" className=" sidebar ext-light-emphasis  xitem bg2 mt-1" >




                    <div className={`btn mt-4  ${(router.pathname === "/admin" ? " act" : "")}`} onClick={o=>{window.location.href="/admin"}}><FaHome className="me-2"/> Dashboard</div>



                    <div className={`btn ${(router.pathname === "/admin/publisher" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/publisher"}}> <FaUser className="me-2"/> Manage Publisher</div>
                    <div className={`btn ${(router.pathname === "/admin/adv" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/adv"}}> <FaUser className="me-2"/> Manage Advertiser</div>


                    <div className={`btn ${(router.pathname === "/admin/genre" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/genre"}}> <FaUser className="me-2"/> Manage Seriess</div>

                    <div className={`btn ${(router.pathname === "/admin/ads" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/ads"}}> <FaUser className="me-2"/> Manage ADS</div>
                    <div className={`btn ${(router.pathname === "/admin/vads" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/vads"}}> <FaUser className="me-2"/> Manage Video Ads</div>

                    <div className={`btn ${(router.pathname === "/admin/language" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/language"}}> <FaUser className="me-2"/> Manage Language</div>
                    <div className={`btn ${(router.pathname === "/admin/categories" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <FaUser className="me-2"/> Manage Categories</div>

                    <div className={`btn ${(router.pathname === "/admin/videos" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/videos"}}> <FaUser className="me-2"/> Manage Videos</div>
                    <div className={`btn ${(router.pathname === "/admin/revX" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/revX"}}> <FaVideo className="me-2"/> Manage Reviews</div>
                    <div className={`btn ${(router.pathname === "/admin/categoriesa" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <FaUser className="me-2"/> Manage User</div>
                    <div className={`btn ${(router.pathname === "/admin/categoriesaa" ? " act" : "")}`} onClick={o=>{window.location.href="/admin/categories"}}> <FaUser  className="me-2"/>Uses Stat</div>



                    <div className="text-danger"><FaPowerOff className="me-2"/> Logout</div>



                </div>

                <div className="w-100 rounded-3 p-4 " >

                    {children}


                </div>

            </div>


        </div>
    </>



}