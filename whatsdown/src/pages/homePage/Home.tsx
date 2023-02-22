import React, { useState } from "react";
import ServiceCard from "./components/ServiceCard";
import { IService } from "../../interfaces/IService";
import { Box, Grid } from "@mui/material";

export default function Home() {
  const [services, setServices] = useState<IService[]>([
    { name: "service1", status: true },
    { name: "service2", status: true },
    { name: "service3", status: false },
    { name: "service1", status: true },
    { name: "service2", status: true },
    { name: "service3", status: false },
  ]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{minWidth: '60rem'}}>
      {services.map((service: IService, index: number) => {
        return (
          <Grid item key={index} xs={4}>
            <ServiceCard service={service} />
          </Grid>
        );
      })}
    </Grid>
  );
}
