import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const Buttons = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Button variant="outlined">Outlined button </Button>
      <Button variant="contained">Contained button</Button>
      <Button variant="text">Contained button</Button>
      <Button variant="text" style={{ backgroundColor: "red", color: "white" }}>
        Contained button
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button color="secondary" variant="outlined">
        Secondary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
      <Button color="success" variant="outlined">
        Secondary
      </Button>
      <Button color="success" variant="contained">
        Secondary
      </Button>
      <br />
      <Button color="error" variant="contained">
        Secondary
      </Button>
      <Button color="primary" size="small" variant="contained">
        Small
      </Button>
      <Button color="primary" size="medium" variant="contained">
        medium
      </Button>
      <Button color="primary" size="large" variant="contained">
        Large
      </Button>
      <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="outlined" startIcon={<SendIcon />}>
        Send
      </Button>
      <h1>This is added after the git</h1>
    </div>
  );
};

export default Buttons;
