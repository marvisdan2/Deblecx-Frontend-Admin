import axios from "axios";
import { useEffect } from "react";

import { URL } from "@/constants";
import { Typography } from "@mui/material";

const getConnector = async () => {
  const { base, connector } = URL;

  const res = await axios.get(`${base}${connector}`, {
    withCredentials: true,
  });
  return res.data;
};

export default function ConnectorPage() {
  useEffect(() => {
    getConnector();
  }, []);
  return <Typography variant="h2">Connector Page</Typography>;
}
