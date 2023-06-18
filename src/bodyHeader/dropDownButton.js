import React from "react";
import { IconButton, ListItemText, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function DropdownButton(props) {
  const { buttonText, iconComponent, isdropdown } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton onClick={handleButtonClick}>
        {/* Add your desired icon component here */}
        {iconComponent}
      </IconButton>
      <ListItemText primary={buttonText} onClick={handleButtonClick} />
      {isdropdown && (
        <>
          <IconButton onClick={handleButtonClick}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* Add your dropdown menu items here */}
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}

export default DropdownButton;
