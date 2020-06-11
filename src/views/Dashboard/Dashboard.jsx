import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import axios from "axios";

import styles from "assets/jss/ordering-system-frontend/views/dashboardStyle.js";
import backgroundImage from "assets/img/dashboard_background.jpg";
import welcomeImage from "assets/img/logo_black.png";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const classes = useStyles();
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState({ firstName: "", lastName: "" });
  const [email, setEmail] = React.useState(localStorage.getItem("email"));
  React.useEffect(() => {
    var params = new URLSearchParams(props.location.search);
    var jwt = params.get("jwt");
    console.log("token");
    console.log(jwt);
    // console.log(JSON.parse(localStorage.getItem("email")));
    // setEmail(JSON.parse(localStorage.getItem("email")));
    // console.log(email);
    if (jwt) {
      axios
        .get(`http://localhost:9000/users/${email}`, {
          headers: {
            timer: `${jwt}`,
          },
        })
        .then((user) => {
          console.log(user.data);
          setUser({
            ...user,
            firstName: user.data.firstName,
            lastName: user.data.lastName,
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, []);
  return (
    <div>
      <GridContainer>
        <GridItem md="6">
          {" "}
          <h2>
            welcome mr {user.firstName} {  user.lastName}
          </h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
