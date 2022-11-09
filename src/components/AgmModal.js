import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const modalWrapper = {
  overflow: "auto",
  maxHeight: "85vh",
  display: "flex",
};

const modalBlock = {
  position: "relative",
  zIndex: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
};

const modalContentStyle = {
  position: "relative",
  background: "#fff",
  boxShadow: 24,
  width: "60%",
  margin: "70px",
  borderRadius: "10px",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  color: "#364A63",
  padding: "25px",
};

const AgmModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button fullWidth onClick={handleOpen}>
        Detalles
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalWrapper}
      >
        <Box sx={modalBlock}>
          <Box sx={modalContentStyle}>
            <Grid container display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <img width="100vw" src="/images/agmLogo.png" alt="" />
                <Typography ml={2} fontWeight="bold">
                  Línea - AGM
                </Typography>
              </Box>
              <Typography variant="h6" fontWeight="bold">
                Energía que no se detiene
              </Typography>
            </Grid>
            <Grid container mt={2} spacing={4}>
              <Grid item md={6} p={1}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight="bold"
                >
                  La energía del futuro, hoy
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  LTH AGM es la mejor batería de placa plana en el mercado. Su
                  avanzada tecnología la hace más confiable, duradera y
                  poderosa, asegurando el mejor desempeño para los vehículos
                  actuales.
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight="bold"
                  mt={3}
                >
                  Idel para vehículos con:
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  -Accesorios o equipados
                </Typography>
                <Typography id="modal-modal-description">
                  -Alta demanda eléctrica
                </Typography>
                <Typography id="modal-modal-description">
                  -Batería AGM de fábrica
                </Typography>
                <Typography id="modal-modal-description">
                  -Batería debajo del asiento o en cajuela
                </Typography>
                <Typography id="modal-modal-description">
                  -Sistema Start-Stop
                </Typography>
              </Grid>
              <Grid item md={6}>
         
                <Box display="flex" alignItems="center">
                  <Typography
                    width="85px"
                    variant="h2"
                    color="white"
                    bgcolor="red"
                    borderRadius="15px"
                    m={1}
                    textAlign="center"
                  >
                    5
                  </Typography>
                  <Typography variant="h4">Años de garantía</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    width="85px"
                    variant="h2"
                    color="white"
                    bgcolor="blue"
                    borderRadius="15px"
                    p={1}
                    m={1}
                  >
                    18
                  </Typography>
                  <Typography variant="h4">
                    Meses de reemplazo sin costo
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h6" fontWeight="bold" my={2}>
              Características
            </Typography>
            <Box
              bgcolor="#ECF2F7"
              borderRadius="15px"
              p={3}
              position="relative"
            >
              <Grid container>
                <Grid item md={7}>
                  <Box display="flex">
                    <CheckOutlinedIcon fontSize="small" />
                    <Typography ml={1}>
                      Tecnología patentada POWERFRAME® en ambas rejillas.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <CheckOutlinedIcon fontSize="small" />
                    <Typography ml={1}>
                      Avanzada tecnología Absorvent Glass Mat (AGM).
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <CheckOutlinedIcon fontSize="small" />
                    <Typography ml={1}>
                      Hasta 2 veces más duración y garantía que una batería
                      convencional estándar.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <CheckOutlinedIcon fontSize="small" />
                    <Typography ml={1}>
                      Alta resistencia a la vibración.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <CheckOutlinedIcon fontSize="small" />
                    <Typography ml={1}>Libre de derrames.</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={5}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    style={{ maxWidth: "100%" }}
                    src="/images/agmBattery.png"
                    alt=""
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AgmModal;
