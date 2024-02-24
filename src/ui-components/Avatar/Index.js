import { Avatar } from "@mui/material";

const IndexAvatar = (props) => {
  function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    // let color = "#";
    // for (i = 0; i < 3; i += 1) {
    //   const value = (hash >> (i * 8)) & 0xff;
    //   color += `00${value.toString(16)}`.slice(-2);
    // }

    //Generate a bright color with fixed saturation and lightness
    const hue = ((hash % 360) + 360) % 360;
    const saturation = 90;
    const lightness = 40;
    const color = `hsl(${hue},${saturation}%,${lightness}%)`;

    /* eslint-enable no-bitwise */
    console.log(color);
    return color;
  }

  function stringAvatar(name, width, height) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: width,
        height: height,
      },
      children:
        name.includes(" ") &&
        name.split(" ").filter((head) => head !== "").length !== 1
          ? `${name.split(" ")[0][0].toUpperCase()}${name
              .split(" ")[1][0]
              .toUpperCase()}`
          : `${name[0].toUpperCase()}${name[1].toUpperCase()}`,
    };
  }
  return (
    <>
      <Avatar
        {...stringAvatar(props.userOb.display_name, props.width, props.height)}
      />
    </>
  );
};
export default IndexAvatar;
