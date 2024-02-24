import FormTooltip from "../Tooltip";
import { IconButton } from "@mui/material";
import Iconify from "../Iconify";

const FormAttachment = (props) => {
    //console.log(props.originalFileName);
    //console.log(props.downloadPath);
    const v =[undefined,null,"",[]];
    
    
    return (
        <div style ={{display:"flex", flexDirection:"row"}}>
           { !v.includes(props.downloadPath) &&<FormTooltip
                          title={props.downloadPath?.split(/[\\,/]+/).slice(-1)}
                          data ={
                            <div>
                              <IconButton
                                edge="end"
                                onClick={props.onDownloadClick}
                              >
                                <Iconify icon="mdi:tray-arrow-down" style={{ color: 'black', fontSize: '24px' }} />
                              </IconButton>                      
                            </div>

                          }
                          />}
                      {props.downLoadOnly!==true && <FormTooltip
                            title={props.disabled ?"Attachment not allowed on disabled field":props.originalFileName ==="" || props.originalFileName === undefined?"Add Attachment":props.originalFileName}
                            data={<div>
                              <IconButton
                                 disabled ={props.disabled}
                                edge="end"
                                onClick={props.onClick}
                              >
                                <Iconify icon="mdi:attachment" style={{ color: props.attached ?'green':props.required && !props.disabled? 'red' : 'black', fontSize: '24px' }} />
                              </IconButton>
                              <input type="file"
                                ref={props.refr}
                                onChange={props.onChange}
                                style={{ display: 'none' }}
                                value=""                              
                              />
                         
                            </div>

                            }
                          />}
                        
                          </div>
    )
}

export default FormAttachment;