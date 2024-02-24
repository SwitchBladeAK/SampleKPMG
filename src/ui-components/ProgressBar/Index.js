import ProgressBar from "react-bootstrap/ProgressBar";
const CustomProgressBar = (props) => {
  return (
    <ProgressBar>
      <ProgressBar
        striped
        animated
        variant={props.success}
        now={props.now}
        label={props.label}
        key={1}
      />
      <ProgressBar
        striped
        animated
        variant={props.fail}
        now={100 - props.now}
        key={2}
      />
    </ProgressBar>
  );
};
export default CustomProgressBar;
