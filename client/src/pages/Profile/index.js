import React from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import Inventory from "./Inventory";
import Donars from "./Donars";
import Hospitals from "./Hospitals";
import Organizations from "./Organizations";
import InvetoryTable from "../../Components/InvetoryTable";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <Tabs>
      {currentUser.userType === "organization" && (
        <>
          <Tabs.TabPane tab="Inventory" key="1">
            <Inventory />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Donors" key="2">
            <Donars />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Hospitals" key="3">
            <Hospitals />
          </Tabs.TabPane>
        </>
      )}

      {currentUser.userType === "donar" && (
        <>
          <Tabs.TabPane tab="Donations" key="4">
            <InvetoryTable
              filters={{
                inventoryType: "in",
                donar: currentUser._id,
              }}
              userType="donar"
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Organizations" key="5">
            <Organizations userType="donar" />
          </Tabs.TabPane>
        </>
      )}

      {currentUser.userType === "hospital" && (
          <>
            <Tabs.TabPane tab="Consumptions" key="6">
              <InvetoryTable
                filters={{
                  inventoryType: "out",
                  hospital: currentUser._id,
                }}
                userType="hospital"
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Organizations" key="7">
              <Organizations userType="hospital" />
            </Tabs.TabPane>
          </>
        )}
    </Tabs>
  );
};

export default Profile;
