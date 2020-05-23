import React from "react";
import Skeleton from "tiny-skeleton-loader-react";
import "../../App.css";
import "../../components/Cards/cards.module.css";
import "../../components/Chart/chart.module.css";
import "@material-ui/core/styles";

const SkeletonCard = () => {
  return (
    <div class="App-body">
      <div class="cards_container__2lQAp">
        <div class=".MuiGrid-container MuiGrid-justify-xs-center">
          <div class="deathead">
            <Skeleton width={352} height={28} block={false} />
          </div>
        </div>
        <div class="cards_cardGrid__2mRLE cardGrid MuiGrid-container MuiGrid-justify-xs-center">
          <div class="MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div class="Component-root-178">
              <div class="cards_cardContent__270gU">
                <Skeleton width={270} height={142} />
              </div>
            </div>
          </div>
          <div class="MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div class="Component-root-181">
              <div class="cards_cardContent__270gU">
                <Skeleton width={270} height={142} />
              </div>
            </div>
          </div>
          <div class="MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
            <div class="Component-root-183">
              <div class="cards_cardContent__270gU">
                <Skeleton width={270} height={142} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Graph-paper-71">
        <Skeleton width={850} height={500} />
      </div>
      <div><h1><Skeleton width={468} height={42} /></h1></div>
    </div>
  );
};
export default SkeletonCard;
