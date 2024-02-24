import { Breadcrumbs } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import getLabelName from "../SharedFunction";
const seprator = "/";
const Breadcrumb = (props) => {
  let urls = props.breadcrumbText;
  console.log(props.breadcrumbText);
  urls = urls !== "" ? urls : ";";
  const linkUrl = urls.split(";")[0].toString();
  const finalTeaxt = urls.split(";")[1].toString();
  const links = linkUrl.split(",");
  console.log(links);
  const breadcrumbSeparatorStyle1 = {
    // paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  };
  const breadcrumbSeparatorStyle2 = {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  };
  return (
    <>
      <div role="presentation" className="col-md-12 text-white pt-0">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-light" style={{ color: "white" }}>
            <li
              id="home"
              key={"home"}
              className="text-light"
              style={breadcrumbSeparatorStyle1}
            >
              <NavLink className="text-light" id="home" to="/home">
                Home
              </NavLink>
            </li>
            &nbsp;{seprator}
            {linkUrl !== ""
              ? links.map((r, index) => (
                  <li
                    id={index}
                    key={index}
                    className="text-light"
                    style={breadcrumbSeparatorStyle2}
                  >
                    <NavLink
                      id={r.split("#")[0]}
                      className="text-light"
                      to={r.split("#")[1]}
                    >
                      {getLabelName(r.split("#")[0])}
                    </NavLink>
                    &nbsp;{seprator}
                  </li>
                ))
              : ""}
            <li
              id={`breadcrumb_last`}
              key={`breadcrumb_last`}
              className="text-light"
              style={breadcrumbSeparatorStyle2}
            >
              {getLabelName(finalTeaxt)}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};
export default Breadcrumb;
