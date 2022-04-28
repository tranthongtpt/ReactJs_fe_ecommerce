import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows=[
        {
            id: 11111,
            product:"Thuoc nho mat",
            img: "https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2021/02/00028876-vien-sui-khong-duong-immune-60mg-tuyp-20-vien-4918-6019_large.JPG",
            customer:"mr thong",
            date:"1 march",
            amount:785,
            method:"cash on delivery",
            status: "Approved",
        },
        {
            id: 22222,
            product:"Thuoc uong",
            img:"https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2020/01/00017891-boi-mau-forte-tat-thanh-125ml-siro-bo-phe-4358-5e14_large.jpg",
            customer:"mr A",
            date:"1 march",
            amount:785,
            method:"cash on delivery",
            status: "Pending",
        },
    ];

  return (
  <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>  
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> 
  )
}
export default List