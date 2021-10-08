import React from "react";
import { Link } from "react-router-dom";
import WelcomeContainer from "../welcome/welcome_container";
import FooterContainer from "../welcome/footer_container";


class buyNowSuccess extends React.Component {

      render() {
            return (

                  <div>
                        <WelcomeContainer />
                        <div className="success-container">
                              <p className="sucess-msg-1">Congratulation Your order is Confirmed!</p>
                              <p className="sucess-msg-2">Your item on its way</p>
                        </div>
                        <FooterContainer/>
                  </div>
            )
      }
}

export default buyNowSuccess;