// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ViewListIcon from "@material-ui/icons/ViewList";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Timer from 'views/timer.jsx';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/timer",
    name: "Timer",
    icon: ViewListIcon,
    component: Timer,
    layout: "/admin",
  },


];

export default dashboardRoutes;
