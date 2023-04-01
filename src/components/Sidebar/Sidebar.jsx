import React from 'react'
import '../Sidebar/sidebar.css'
import Progresschart from '../Progresschart/Progresschart'
import Progresschart2 from '../Progresschart/Progresschart2'


function Sidebar() {
  return (
    <div id="sidebar">
        <div id="sidebar_heading">WSTF FRONT-END HACKATHON</div>
        <div id="all_user">All users <span id="small_text">DETAIL</span></div>
        <div id="all_user_data">2,431,340</div>
        <div className="sidebar_data">
          <div id="logos1">
            <span class="material-symbols-rounded desc_logo">moving</span>
          </div>
          <div className="data">
            <div className="desc">Total earning</div>
            <div className="desc_num">540,549</div>
          </div>
        </div>

        <div className="sidebar_data">
          <div id="logos2">
            <span class="material-symbols-outlined desc_logo">monetization_on</span>
          </div>
          <div className="data">
            <div className="desc">Sales</div>
            <div className="desc_num">540,549</div>
          </div>
        </div>

        <div className="sidebar_data">
          <div id="logos3">
            <span class="material-symbols-outlined desc_logo">bar_chart</span>
          </div>
          <div className="data">
            <div className="desc">Purchase</div>
            <div className="desc_num">540,549</div>
          </div>
        </div>

        <div className="user_data">
          <div className="active_user">
            <div className="user_percentage"><Progresschart/></div>
            <div className="user">
              <div className="user_num">92,980</div>
              <div className="users">Active users</div>
            </div>

          </div>
          <div className="active_user">
            <div className="user_percentage"><Progresschart2/></div>
            <div className="user">
              <div className="user_num">22,652</div>
              <div className="users">New users</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar