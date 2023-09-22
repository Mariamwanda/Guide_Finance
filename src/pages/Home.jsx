import Chart from "../components/Chart.jsx";
import FeaturedInfo from "../components/FeaturedInfo.jsx";
import "./home.css";
import { userData } from "../dummyData.js";
import WidgetSm from "../Components/WidgetLg.jsx";
import WidgetLg from "../Components/WidgetLg.jsx";
import Sidebar from "../Components/Sidebar.jsx";

function Home() {
  return (
 
    <div className="home">
         <Sidebar/>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
