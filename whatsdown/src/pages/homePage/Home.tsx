import React, { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard";
import { IService } from "../../interfaces/IService";
import { Box, Grid } from "@mui/material";
import { getAllServices } from "../../services/servicesCrud";

export default function Home() {
  const [services, setServices] = useState<IService[]>([]);

  const [didUpdateAccur, setDidUpdateAccur] = useState<boolean>(false);

  useEffect(() => {
    const fetchServices = async () => {
      const services = await getAllServices();
      setServices(services);
    };

    if (didUpdateAccur) {
      setDidUpdateAccur(false);
    }

    fetchServices();
  }, [didUpdateAccur]);

  return (
    <Box>
      <Box>
        <h1>What's down</h1>
      </Box>
      {services.length > 0 ? (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ minWidth: "60rem" }}
        >
          {services.map((service: IService, index: number) => {
            return (
              <Grid item key={index} xs={4}>
                <ServiceCard
                  service={service}
                  setDidUpdateAccur={setDidUpdateAccur}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <h1>loading</h1>
      )}
    </Box>
  );
}
