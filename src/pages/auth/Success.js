import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from "../../components/Component";
import { Link } from "react-router-dom";
import {Button} from "../../components/Component";

const Success = () => {
  return (
    <>
      <Head title="Success" />
        <Block className="nk-block-middle nk-auth-body">
          <div className="brand-logo pb-5">
            <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Thank you for submitting form</BlockTitle>
              <BlockDes className="text-success">
                <p>You can now sign in with your new password</p>
                <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
                  <Button color="primary" size="lg">
                    Back to Login
                  </Button>
                </Link>
              </BlockDes>
            </BlockContent>
          </BlockHead>
        </Block>
        <AuthFooter />
    </>
  );
};
export default Success;
