import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import { Card } from "reactstrap";
import Head from "../../../layout/head/Head";
import {
  BlockBetween,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
  Button,
} from "../../../components/Component";
import UserProfileAside from "./UserProfileAside";

const UserProfileNotificationPage = () => {
  const [sm, updateSm] = useState(false);
  const [mobileView , setMobileView] = useState(false);
  
  // function to change the design view under 990 px
  const viewChange = () => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    } else {
      setMobileView(false);
      updateSm(false);
    }
  };

  useEffect(() => {
    viewChange();
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
      updateSm(false);
    });
    return () => {
      window.removeEventListener("resize", viewChange);
      window.removeEventListener("load", viewChange);
    };
  }, []);
  
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>
      <Content>
        <Card className="card-bordered">
          <div className="card-aside-wrap">
            <div
              className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${
                sm ? "content-active" : ""
              }`}
            >
              <UserProfileAside updateSm={updateSm}  sm={sm} />
            </div>
            <div className="card-inner card-inner-lg">
              {sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}
              <BlockHead size="lg">
                <BlockBetween>
                  <BlockHeadContent>
                    <BlockTitle tag="h4">Notification Settings</BlockTitle>
                    <BlockDes>
                      <p>You will get only notification what have enabled.</p>
                    </BlockDes>
                  </BlockHeadContent>
                  <BlockHeadContent className="align-self-start d-lg-none">
                    <Button
                      className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`}
                      onClick={() => updateSm(!sm)}
                    >
                      <Icon name="menu-alt-r"></Icon>
                    </Button>
                  </BlockHeadContent>
                </BlockBetween>
              </BlockHead>

              <BlockHead size="sm">
                <BlockBetween>
                  <BlockHeadContent>
                    <BlockTitle tag="h6">Security Alerts</BlockTitle>
                    <BlockDes>
                      <p>You will get only those email notification what you want.</p>
                    </BlockDes>
                  </BlockHeadContent>
                </BlockBetween>
              </BlockHead>

              <BlockContent>
                <div className="gy-3">
                  <div className="g-item">
                    <div className="custom-control custom-switch">
                      <InputSwitch id="custom-switch" checked label="Email me whenever encounter unusual activity" />
                    </div>
                  </div>
                  <div className="g-item">
                    <div className="custom-control custom-switch">
                      <InputSwitch id="custom-switch2" label="Email me if new browser is used to sign in" />
                    </div>
                  </div>
                </div>
              </BlockContent>

              <BlockHead size="sm">
                <BlockBetween>
                  <BlockHeadContent>
                    <BlockTitle tag="h6">News</BlockTitle>
                    <BlockDes>
                      <p>You will get only those email notification what you want.</p>
                    </BlockDes>
                  </BlockHeadContent>
                </BlockBetween>
              </BlockHead>

              <BlockContent>
                <div className="gy-3">
                  <div className="g-item">
                    <div className="custom-control custom-switch">
                      <InputSwitch id="custom-switch3" checked label="Notify me by email about sales and latest news" />
                    </div>
                  </div>
                  <div className="g-item">
                    <div className="custom-control custom-switch">
                      <InputSwitch id="feature-update" label="Email me about new features and updates" />
                    </div>
                  </div>
                  <div className="g-item">
                    <div className="custom-control custom-switch">
                      <InputSwitch id="account-tips" checked label="Email me about tips on using account" />
                    </div>
                  </div>
                </div>
              </BlockContent>
            </div>
          </div>
        </Card>
      </Content>
    </React.Fragment>
  );
};

export default UserProfileNotificationPage;
