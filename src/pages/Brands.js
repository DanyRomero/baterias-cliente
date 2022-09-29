import * as React from "react";
import {
  TextField,
  Grid,
  Button,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState, useEffect } from "react";
import BrandsTable from "../components/BrandsTable";
import BrandForm from "../components/BrandForm";

const API_URL = "http://localhost:5005";

export default function Brands() {
  const [open, setOpen] = React.useState(false);
  const [brands, setBrands] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getBrands = () => {
    axios
      .get(`${API_URL}/marcas`)
      .then((response) => setBrands(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBrands();
  }, []);

  const handleNewBrand = (formData) => {
    axios
      .post(`${API_URL}/marcas`, formData)
      .then((response) => {
        getBrands();
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h3>Listado de marcas</h3>
      <Grid container spacing={2}>
        <Grid item md={9} xs>
          <form>
            <Grid container>
              <Grid item xs>
                <TextField
                  size="small"
                  label="Buscar por Nombre"
                  value={""}
                  fullWidth
                  onChange={(e) => e.target.value}
                />
              </Grid>
              <Grid item xs="auto">
                <Button type="submit">
                  <SearchIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs="auto">
          <Button variant="outlined" onClick={handleClickOpen}>
            <AddIcon /> Marca
          </Button>
          <BrandForm
            open={open}
            onClose={handleClose}
            onSubmit={handleNewBrand}
          />
        </Grid>
      </Grid>
      <BrandsTable
        brands={brands}
        getBrands={getBrands}
        onEdit={(brand) => setOpen(true)}
      />
    </Container>
  );
}
