import "./card.css";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";
import messageIcon from "../leftDrawer/resources/messageIcon.svg";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TaskCard = ({ data }) => {
  let priorityStyles = getPriorityStyles(data.priority);
  return (
    <Card elevation={ 0 } sx={ { borderRadius: 3, height: '177px', position: 'relative' } }>
      <CardContent sx={ { display: 'flex', flexDirection: 'column', height: '100%' } }>
        <Box sx={ { display: "flex", alignItems: "center", justifyContent: 'space-between', mb: 1 } }>
          <Typography
            sx={ {
              ...priorityStyles,
              borderRadius: "5px",
              px: "5px",
              fontSize: 12,
            } }
          >
            { data.priority }
          </Typography>

          <MoreHorizIcon />
        </Box>
        <Typography sx={ { fontWeight: 700, fontSize: 16 } }>
          { data.title }
        </Typography>
        <Typography sx={ { fontWeight: 400, fontSize: 14, color: "#787486" } }>
          { data.description }
        </Typography>

        <Box sx={ { width: '100%', display: 'flex', justifyContent: 'space-between', mt: 'auto', justifySelf: 'flex-end', color: '#787486' } }>

          <Box sx={ { display: 'flex', } }>
            {
              data.people.map((people) => (
                <Avatar sx={ { width: 24, height: 24 } } alt={ people } src={ `https://picsum.photos/200?${Date.now()}` } />
              ))
            }

          </Box>
          <Box sx={ { display: 'flex', ml: 'auto' } }>
            <Box sx={ { display: 'flex', } }>
              <img style={ { marginRight: '12px' } } src={ messageIcon } />
              <Typography sx={ { display: ['none', 'none', 'none', 'flex'] } }>{ data.comments } comments</Typography>
            </Box>
            <Box sx={ { display: 'flex', } }>

              <FolderOutlinedIcon sx={ { ml: 2, mr: 1 } } />
              <Typography sx={ { display: ['none', 'none', 'none', 'flex'] } }>{ data.attachments } files</Typography>
            </Box>
          </Box>
        </Box>

      </CardContent>
    </Card >
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
