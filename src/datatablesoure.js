export const  userColums = [
    { field: 'id', headerName: 'ID', width: 70 },{
        field:"user", 
        headerName:"User", 
        with:230,
        renderCell:(params) =>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>    
            )
        },
    },
    {
        field:"email",
        headerName:"Email",
        width:230,
    },
    {
        field:"age",
        headerName:"Age",
        width:100,
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params) =>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

]

export const userRows = [
    {
        id: 1,
        username:"mrthong",
        img: "https://images.fpt.shop/unsafe/fit-in/250x250/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2019/09/00011059-sam-nhung-bo-than-nv-1276-5d78_large.jpg",
        status: "active",
        email: "abv@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username:"mra",
        img: "https://images.fpt.shop/unsafe/fit-in/250x250/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2020/11/00020313-active-legs-15v-thien-minh-1700-5fb0_large.JPG",
        status: "passive",
        email: "annn@gmail.com",
        age: 55,
    },
    {
        id: 3,
        username:"mrb",
        img: "https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2020/11/00019020-an-ngon-tieu-hoa-khoe-bbear-thanh-cong-4x5-6885-5f9f_large.JPG",
        status: "active",
        email: "anneen@gmail.com",
        age: 55,
    },{
        id: 4,
        username:"mrc",
        img: "https://images.fpt.shop/unsafe/fit-in/250x250/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2021/09/00021988-anica-phytextra-60v-3501-614d_large.jpg",
        status: "pending",
        email: "ann1n@gmail.com",
        age: 50,
    }
]