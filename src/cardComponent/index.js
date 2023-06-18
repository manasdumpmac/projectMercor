import "./card.css";
import { Card, CardContent, Box, Typography } from "@mui/material";

const TaskCard = ({ data }) => {
  let priorityStyles = getPriorityStyles(data.priority);
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography
            sx={{
              ...priorityStyles,
              borderRadius: "5px",
              px: "5px",
              fontSize: 12,
            }}
          >
            {data.priority}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
          {data.title}
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: 14, color: "#787486" }}>
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
function getPriorityStyles(priority) {
  let textColor, bgColor;

  switch (priority) {
    case "Low":
      textColor = "#FFA500"; // Orange
      bgColor = "#FFE6B3"; // Lighter shade of orange
      break;
    case "High":
      textColor = "#FF0000"; // Red
      bgColor = "#FFB3B3"; // Lighter shade of red
      break;
    case "Completed":
      textColor = "#008000"; // Green
      bgColor = "#B3FFB3"; // Lighter shade of green
      break;
    default:
      textColor = "#000000"; // Black
      bgColor = "#FFFFFF"; // White
  }

  return {
    color: textColor,
    backgroundColor: bgColor,
  };
}
