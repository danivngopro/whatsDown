import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IService } from "../../../interfaces/IService";

export default function ServiceCard({ service }: { service: IService }) {
  const enum colors {
    GREEN = 'green',
    RED = 'red',
  }

  const [cardColor,setCardColor] = useState<colors>(service.status ? colors.GREEN : colors.RED);

  return (
      <Card sx={{ minWidth: 275, bgcolor: cardColor }}>
        <CardContent>
          <Typography variant="h5" component="div">
            name: {service.name}
          </Typography>
          <Typography variant="body2">
            status: {service.status.toString()}
          </Typography>
        </CardContent>
      </Card>
  );
}
