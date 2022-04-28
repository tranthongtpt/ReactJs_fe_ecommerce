import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import {useState} from 'react'

const New = ({inputs,title}) => {

    const [file,setFile] = useState("");

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>

                <div className="top">
                    <h1>{title}</h1>
                </div>

                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file): "https://images.unsplash.com/photo-1651036398488-28b4f5d353cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" } alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input type="file" id="file" 
                                onChange={(e)=> setFile(e.target.files[0])} 
                                style={{ display: "none" }} 
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                        
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New