import "../pages/widgetSm.css";

import { Visibility } from "@material-ui/icons";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent.flos2-2.fna.fbcdn.net/v/t1.6435-9/187203285_947132126048608_8773191570853311344_n.jpg?stp=c0.137.480.480a_dst-jpg_s526x395&_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeGe943A9EvcKTkjN-KDU2_7I0KhbHrb2EsjQqFsetvYSx-IC1M3ghzOOR_Q2Dv73uZ2JF1MiO3mLise4r4M02hK&_nc_ohc=lIJWTua5--MAX_d7Kfe&_nc_ht=scontent.flos2-2.fna&oh=00_AT8ieREmJZMRI9jSU61PxOm7uvVGGVUBDDVaZC0u8Zbx2g&oe=62A3DD06"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Banigo Kene</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="" className="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Saviour Blessing</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src=""
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Thompson Tasha</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Afforah Pricila</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
