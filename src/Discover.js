import { useEffect, useState } from "react";
import Novellist from "./Novellist";




const Discover = () => {

    const [novels, setNovels] = useState (null);

    useEffect(() => {
        fetch("http://localhost:8000/novels")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setNovels(data)
            })
    }, [])

    const handleDelete = (id) => {
        // let a = "http://localhost:8000/novels/"+{id}
        // console.log('Deleted')

        fetch("http://localhost:8000/novels/"+{id},{
            method: "DELETE"
        }).then((res) => {
                return res.json()
        }).then ((data) => {
            console.log("Success", data)
        })
    }

    return (
        <div className="discovercontainer">
            <div className="discoverheading">
                <h1>
                    Discover Novels
                </h1>
            </div>

            <div className="discovercontents">
                {novels && <Novellist data={novels} handleDelete={handleDelete}/>}
            </div>
            
        </div>
    );
}
 
export default Discover;