import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Infomation</h1>
                        <div className="item">
                            <img src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2021/02/00028876-vien-sui-khong-duong-immune-60mg-tuyp-20-vien-4918-6019_large.JPG"
                            alt="" 
                            className="itemImg"/>
                            <div className="details">
                                <h1 className="itemTitle">Jane</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">abz@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">0395557279</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Da Nang Viet Nam</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Viet Nam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="user spending ( last 6 months )"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last transactions</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}
export default Single