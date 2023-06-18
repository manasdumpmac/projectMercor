import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BulbIcon from './resources/bulbIcon.svg';

// Create a custom theme with the desired font
const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          backgroundColor: "white",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "white",
            border: "1px solid black",
          },
        },
      },
    },
  },
});

export default function BottomCard() {
  const imageStyle = {
    position: 'absolute',
    top: -25,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: "#F5F5F5",
    padding: '16px',
    borderRadius: '50px'
  };

  return (
    <div>
      <ThemeProvider theme={ theme }>
        <Paper
          elevation={ 0 }
          square
          style={ { backgroundColor: "#F5F5F5", borderRadius: "16px", position: 'relative' } }
        >
          <img style={ imageStyle } src={ BulbIcon } />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box m={ 2 } pt={ 2 } />
            <Typography variant="body2" component="div" fontSize="large">
              Thoughts Time
            </Typography>
            <Box m={ 0.1 } />
            <Typography variant="body2" component="div" mt={ 1 } color="#787486">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </Typography>
            <Box m={ 0.5 } pt={ 2 } />
            <Button variant="contained">Write a message</Button>
            <Box m={ 0.5 } pt={ 2 } />
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
