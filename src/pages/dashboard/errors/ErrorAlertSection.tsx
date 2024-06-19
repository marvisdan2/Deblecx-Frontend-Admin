import axios from "axios";
import { URL } from "@/constants";
import { useEffect } from "react";

const getErrorAlert = async () => {
  const { base, errorAlert } = URL;
  const res = await axios.get(
    `https://bender-api-internal.dev.deblecx.com/api/internal/error/alert/`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const ErrorAlertSection = () => {
  useEffect(() => {
    getErrorAlert();
  }, []);

  return (
    <div>
      <h1>Alert Section</h1>
    </div>
  );
};

export default ErrorAlertSection;
