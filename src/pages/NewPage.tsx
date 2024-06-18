import axios from "axios";

const getConnector = async () => {
  const res = await axios.get(
    "https://bender-api-internal.dev.deblecx.com/api/internal/connector/",
    {
      withCredentials: true,
    }
  );
  return res.data;
};
function NewPage() {
  getConnector();
  return <div data-testid="newpage-text">{"foo"}</div>;
}

export default NewPage;
