import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IService } from "../../../interfaces/IService";
import { updateServiceById } from "../../../services/servicesCrud";

export default function ServiceCard({
  service,
  setDidUpdateAccur,
}: {
  service: IService;
  setDidUpdateAccur: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const enum colors {
    GREEN = "green",
    RED = "red",
  }

  const [cardColor, setCardColor] = useState<colors>(
    service.status ? colors.GREEN : colors.RED
  );

  const handleClick = async () => {
    await updateServiceById({ status: !service.status }, service.id as string);
    setDidUpdateAccur(true);
  };

  useEffect(() => {
    setCardColor(service.status ? colors.GREEN : colors.RED);
  }, [service]);

  return (
    <Card
      sx={{ width: 275, height: 130, bgcolor: cardColor }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          name: {service.name}
        </Typography>
        <Typography variant="body2">
          status: {service.status ? "Up" : "Down"}
        </Typography>
      </CardContent>
    </Card>
  );
}
