import * as React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { useCart } from "react-use-cart";
import { Badge, IconButton, Modal } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
  height: "90%",
  p: 4,
};

function Header({ userData, setuserData }) {
  const { items, totalItems, cartTotal, updateItemQuantity, removeItem } =
    useCart();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12} sm={12} md={4}>
          <Grid item xs={12} sm={12} md={4} display="flex" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="/Asss/images.png"
              sx={{ width: 56, height: 68 }}
            />
            <Typography
              sx={{ color: "#00695c", fontStyle: "italic" }}
              variant="h4"
            >
              SHOPIT
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid item xs={6} sm={6} md={12}>
            <TextField
              name="userData"
              value={userData}
              onChange={(e) => {
                setuserData(e.target.value);
              }}
              variant="standard"
              sx={{ width: "90%" }}
              placeholder="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={12}></Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
          <Grid
            item
            xs={6}
            sm={6}
            md={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography sx={{ marginRight: "20px" }}>Men</Typography>
            <Typography sx={{ marginRight: "20px" }}>Women</Typography>
            <Typography sx={{ marginRight: "20px" }}>Kids</Typography>
            <Typography sx={{ marginRight: "20px" }}>About</Typography>
            <Typography sx={{ marginRight: "20px" }}>Contact US</Typography>
            <Badge badgeContent={totalItems} color="primary">
              <IconButton onClick={handleOpen}>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>

            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                marginRight: "20px",
                marginLeft: "20px",
              }}
              variant="contained"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      <img
                        src={item.image}
                        alt={item.title}
                        width="150px"
                        height="150px"
                      />
                    </TableCell>
                    <TableCell align="right">{item.title}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={1}>
                        <Button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-info ms-2"
                        >
                          -
                        </Button>
                        <Typography>{item.quantity}</Typography>

                        <Button
                          onClick={() => {
                            updateItemQuantity(item.id, item.quantity + 1);
                          }}
                          className="btn btn-info ms-2"
                        >
                          +
                        </Button>
                        <Button
                          className="btn btn-danger ms-2 my-2"
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          remove
                        </Button>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{item.itemTotal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            component="h2"
            varient="h5"
            textAlign="right"
            marginTop={2}
          >
            SubTotal: {cartTotal}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
// }

export default Header;
