import { IconButton } from "@mui/material";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Iconify from "../Iconify";
import DataContext from "../../context/DataContext";
import { useContext,useState } from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import FormTooltip from "../Tooltip";
import getLabelName from "../SharedFunction";
import PopupModal from "../modal";
import { useNavigate } from "react-router-dom";

const CardHeader = (props) => {
  const { data, valid, isLoading } = useContext(DataContext);
  console.log(props.isCreate);
  console.log(props.breadcrumbText);
  let navigate = useNavigate();
  const [show,setShow] =useState(false);


  const handleNavLinkClick =(event)=>{
    if(props.isCreate ===0 ){
    event.preventDefault();
    setShow(true);
    }
  }
  const handleClosePopup =()=>{
    setShow(false);
  }

  


  return (
    <>
      <Card.Header
        style={{
          backgroundColor: `${data.login.backgroundColor}`,
          height: "50px",
        }}
      >
        <div className="row pl-2" style={{ color: "white" }}>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            <h5 style={{ marginBottom: "0" }}>
              {getLabelName(props.headerText)}
            </h5>
            <Breadcrumb breadcrumbText={props.breadcrumbText}></Breadcrumb>
          </div>
          <div className="col-md-6" style={{ textAlign: "right" }}>
            {props.linkURL !== "" ? (
              <NavLink
                id={props.linkId}
                style={{ float: "right" }}
                to={props.linkURL}
                state={{
                  headerText: props.headerText,
                  breadcrumbText: props.breadcrumbText,
                  url: props.linkURL,
                  parentURL: props.parentURL,
                  Module: props.Module,
                }}
                onClick ={handleNavLinkClick}
              >
                <FormTooltip
                  title={props.isCreate === 0 ? "Cancel" : "Create"}
                  data={
                    <IconButton edge="end" style={{ color: "white" }}>
                      <Iconify
                        icon={
                          props.isCreate === 0
                            ? "akar-icons:arrow-back"
                            : "mdi:plus"
                        }
                      />
                    </IconButton>
                  }
                ></FormTooltip>
              </NavLink>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card.Header>
      <PopupModal
        show={show}
        handleClose={() => handleClosePopup()}
        modalTitle={"Confirm"}
        modalBody={"Are you sure you want to cancel?"}
        onclick={
          (evnt) => {
          setShow(false);
          
             navigate(props.linkURL);
        }
      }
        buttonName={"Yes"}
        modalSize={"lg"}
        hideFooter={false}
      ></PopupModal>
    </>
  );
};
export default CardHeader;
