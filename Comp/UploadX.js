import {useEffect, useState} from "react";
import axios from "axios";
import {rh} from "@/lib/RH";


export default (prop)=>{



    const [progressX,setprogressX] = useState();

    async function hadlser(d) {
        const file = d.currentTarget.files[0];


        let f = new FormData()
        f.append("file", file);
        try {
            const Response = await axios.post(`${rh.api}/api/upload`, f,{

                onUploadProgress(r){
                    setprogressX(  r.progress);
                }
            });

            if (Response) {


                let po=Response.data.name;
                if (prop.id){
                    document.getElementById(prop.id).value= po
                }
                if (prop.cb){

                    prop.cb(po)

                }


            }


        } catch (err) {
            console.log(err);
        }


    }
    return <div style={{width:"100%"}}>


        <input type="file" onChange={hadlser} className="w-100 form-control"/>


        { ( progressX >0  && progressX< 1 ) ?<div className="text-center bg-success" style={{width: (progressX*100)+"%"}}>

            {progressX *100}%

        </div>:""}












    </div>

}