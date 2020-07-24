import React, { useState} from "react";

import "./index.css";
import EditProfile from "./editProfile/EditProfile";
import ResetPasswordPage from "./resetPassword/resetPassword";
import SavedRooms from "./savedRooms/SavedRooms";
import RequestedContacts from "./requestedContacts/RequestedContacts";
import MyRooms from "./myRooms/MyRooms";

function ProfileManagement(props) {
  const [view, setView] = useState("");


  return (
    <div style={{'minHeight':'450px'}}>
      <div className="sidebar" style={{ color: "#FFFFFF !important" }}>
        <button  onClick={() => setView("")}>
          Edit Profile
        </button>
        <button  onClick={() => setView("reset_password")}>
          Change Password
        </button>
        <button href="" onClick={() => setView("my_properties")}>
          My Properties
        </button>
        <button href="" onClick={() => setView("saved_rooms")}>
          Saved Rooms
        </button>
        <button  onClick={() => setView("requested_contacts")}>
          Requested Contacts
        </button>
      </div>
      <div className="container">
        {view === "" ? (
          <EditProfile />
        ) : view === "reset_password" ? (
          <ResetPasswordPage
          />
        ) :view === "my_properties" ? (
          <MyRooms/>
        ) :view === "saved_rooms" ? (
          <SavedRooms />
        ) : (
          <RequestedContacts />
          // <ResetPasswordPage message={{title: 'Sorry!', body: 'Currently, you do not have any contact request approved!'}}/>
        )}
      </div>
    </div>
  );
}

export default ProfileManagement;
