import {
  Box,
  Card,
  Grid,
  Button,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import StarIcon from "@mui/icons-material/Star";
import LthModal from "../components/LthModal";
import AgmModal from "../components/AgmModal";
import FullPowerModal from "../components/FullPowerModal";

const CardSelectedBattery = ({ battery, order, sendBattery }) => {
  
  const selectedYear = order.model.years.find(
    (year) => year._id === order.year
  );

  const expensiveBattery = selectedYear.batteries.reduce((max, min) =>
    max.price > min.price ? max : min
  );

  return (
    <Grid item xs={12} sm={4} key={battery._id}>
      <Card variant="outlined" sx={{ position: "relative" }}>
        {expensiveBattery._id === battery._id && (
          <Box
            display="flex"
            alignItems="center"
            p={1}
            position="absolute"
            bgcolor="red"
            color="white"
            borderRadius="0 10px"
          >
            <StarIcon />
            <Typography sx={{ color: "white" }}>Recomendada</Typography>
          </Box>
        )}
        <CardMedia
          sx={{ maxWidth: "60%", margin: "20px auto" }}
          component="img"
          alt="battery"
          image="/images/bateria.png"
        />
        <CardContent sx={{ color: "text.secondary" }}>
          <Typography color="primary" variant="h6" mb={1}>
            <strong>{battery.model}</strong>
          </Typography>
          <Box display="flex" my={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary.dark"
              mr={2}
            >
              Precio: ${battery.price - 200}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              CUPÓN -$200 MXN
            </Typography>
          </Box>
          <Typography variant="body2" fontWeight="bold" my={2}>
            Precio regular: ${battery.price} MXN
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => sendBattery(battery)}
          >
            Comprar ahora
          </Button>
          <Box>
            <Box display="flex" mt={2}>
              <RecommendOutlinedIcon fontSize="small" />
              <Typography variant="body2" ml={1}>
                Garantía: {battery.guarantee} meses
              </Typography>
            </Box>
            <Box display="flex">
              <PaymentOutlinedIcon fontSize="small" />
              <Typography variant="body2" ml={1}>
                Paga a meses sin intereses
              </Typography>
            </Box>
            <Box display="flex">
              <BoltOutlinedIcon fontSize="small" />
              <Typography variant="body2" ml={1}>
                Capacidad de arranque de {battery.amps} amperes
              </Typography>
            </Box>
          </Box>
        </CardContent>
        {battery.brand === "LTH" && <LthModal />}
        {battery.brand === "AGM" && <AgmModal />}
        {battery.brand === "Full Power" && <LthModal />}
      </Card>
    </Grid>
  );
};

export default CardSelectedBattery;
