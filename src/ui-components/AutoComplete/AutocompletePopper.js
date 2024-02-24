import { Popper } from "@mui/material";

export const PopperMy = function (props) {
    return <Popper {...props} style={styles.popper }  placement="bottom-start" />;
 };
 const styles = (theme) => ({
  popper: {
     width: "fit-content"
  }
});