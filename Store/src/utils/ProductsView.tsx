import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { Bill as BillType } from "./types";
  
  const ProductsView = ({ bill }: { bill: BillType }) => {
    return (
      <TableCell colSpan={7}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bill.products.map((product, index: number) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {product.name}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {-product.amount}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {product.price}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {product.price * -product.amount}
                  </TableCell>
                </TableRow>
              ))}
              {bill.discount > 0 && (
                <TableRow>
                  <TableCell sx={{ borderBottom: "none" }}>Discount</TableCell>
                  <TableCell sx={{ borderBottom: "none" }}></TableCell>
                  <TableCell sx={{ borderBottom: "none" }}></TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {bill.discount}
                  </TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell sx={{ borderBottom: "none" }}>Total</TableCell>
                <TableCell sx={{ borderBottom: "none" }}></TableCell>
                <TableCell sx={{ borderBottom: "none" }}></TableCell>
                <TableCell sx={{ borderBottom: "none" }}>{bill.total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TableCell>
    );
  };
  
  export default ProductsView;
  