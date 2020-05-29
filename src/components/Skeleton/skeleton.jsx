/*
  Property	    Attribute	    Description	          Type	    Default
  width	        width	        Width	                string	  "100%"
  height	      height	      Height	              string	  "1em"
  background	  background	  background color	    string	  "#eff1f6"
  circle	      circle	      Make Skeleton Circle	boolean	   false
  borderRadius	border-radius	radius	              string	  "4px"
  block	        block	        Weather to start new	boolean	   true
  style	        style	        Extra Styles	        object	   {} 
*/

import React from "react";
import Skeleton from "tiny-skeleton-loader-react";
import "../../App.css";
import "../../components/Cards/cards.module.css";
import "@material-ui/core/styles";

const SkeletonCard = () => {
  return (
    <div className="App-body">
      <div className="cards_container__2lQAp">
        <div className=".MuiGrid-container MuiGrid-justify-xs-center">
          <div className="deathead">
            <Skeleton width={352} height={28} block={false} />
          </div>
        </div>
        <div className="cards_cardGrid__2mRLE cardGrid MuiGrid-container MuiGrid-justify-xs-center">
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div className="Component-root-178">
              <div className="cards_cardContent__270gU">
                <Skeleton width={265} height={142} />
              </div>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div className="Component-root-181">
              <div className="cards_cardContent__270gU">
                <Skeleton width={265} height={142} />
              </div>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div className="Component-root-183">
              <div className="cards_cardContent__270gU">
                <Skeleton width={265} height={142} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Skeleton width={855} height={500} style={{ margin: "30px 0px" }} />
      </div>

      <div className="makeStyles-root-72">
        <div>
          <div className="makeStyles-root-76">
            <Skeleton width={855} height={64} block={false} />
          </div>
          <div className="MuiTableContainer-root">
            <Skeleton width={855} height={1364} block={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;
