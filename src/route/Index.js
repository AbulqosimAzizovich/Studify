import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProductContextProvider } from "../pages/pre-built/products/ProductContext";
import { UserContextProvider } from "../pages/pre-built/user-manage/UserContext";

import Sales from "../pages/Sales";
import Crypto from "../pages/Crypto";
import Homepage from "../pages/Homepage";
import Invest from "../pages/Invest";

import Component from "../pages/components/Index";
import Accordian from "../pages/components/Accordions";
import Alerts from "../pages/components/Alerts";
import Avatar from "../pages/components/Avatar";
import Badges from "../pages/components/Badges";
import Breadcrumbs from "../pages/components/Breadcrumbs";
import ButtonGroup from "../pages/components/ButtonGroup";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";
import Carousel from "../pages/components/Carousel";
import Dropdowns from "../pages/components/Dropdowns";
import FormElements from "../pages/components/forms/FormElements";
import FormLayouts from "../pages/components/forms/FormLayouts";
import FormValidation from "../pages/components/forms/FormValidation";
import DataTablePage from "../pages/components/table/DataTable";
import DateTimePicker from "../pages/components/forms/DateTimePicker";
import CardWidgets from "../pages/components/widgets/CardWidgets";
import ChartWidgets from "../pages/components/widgets/ChartWidgets";
import RatingWidgets from "../pages/components/widgets/RatingWidgets";
import SlickPage from "../pages/components/misc/Slick";
import SweetAlertPage from "../pages/components/misc/SweetAlert";
import BeautifulDnd from "../pages/components/misc/BeautifulDnd";
import DualListPage from "../pages/components/misc/DualListbox";
import GoogleMapPage from "../pages/components/misc/GoogleMap";
import Modals from "../pages/components/Modals";
import Pagination from "../pages/components/Pagination";
import Popovers from "../pages/components/Popovers";
import Progress from "../pages/components/Progress";
import Spinner from "../pages/components/Spinner";
import Tabs from "../pages/components/Tabs";
import Toast from "../pages/components/Toast";
import Tooltips from "../pages/components/Tooltips";
import Typography from "../pages/components/Typography";
import CheckboxRadio from "../pages/components/forms/CheckboxRadio";
import AdvancedControls from "../pages/components/forms/AdvancedControls";
import InputGroup from "../pages/components/forms/InputGroup";
import FormUpload from "../pages/components/forms/FormUpload";
import NumberSpinner from "../pages/components/forms/NumberSpinner";
import NouiSlider from "../pages/components/forms/nouislider";
import WizardForm from "../pages/components/forms/WizardForm";
import UtilBorder from "../pages/components/UtilBorder";
import UtilColors from "../pages/components/UtilColors";
import UtilDisplay from "../pages/components/UtilDisplay";
import UtilEmbeded from "../pages/components/UtilEmbeded";
import UtilFlex from "../pages/components/UtilFlex";
import UtilOthers from "../pages/components/UtilOthers";
import UtilSizing from "../pages/components/UtilSizing";
import UtilSpacing from "../pages/components/UtilSpacing";
import UtilText from "../pages/components/UtilText";

import Blank from "../pages/others/Blank";
import Faq from "../pages/others/Faq";
import Regularv1 from "../pages/others/Regular-1";
import Regularv2 from "../pages/others/Regular-2";
import Terms from "../pages/others/Terms";
import BasicTable from "../pages/components/table/BasicTable";
import SpecialTablePage from "../pages/components/table/SpecialTable";
import ChartPage from "../pages/components/charts/Charts";
import EmailTemplate from "../pages/components/email-template/Email";
import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";

import ProjectCardPage from "../pages/pre-built/projects/ProjectCard";
import ProjectListPage from "../pages/pre-built/projects/ProjectList";
import UserListRegular from "../pages/pre-built/user-manage/UserListRegular";
import UserContactCard from "../pages/pre-built/user-manage/UserContactCard";
import UserDetails from "../pages/pre-built/user-manage/UserDetailsRegular";
import UserListCompact from "../pages/pre-built/user-manage/UserListCompact";
import UserProfileRegular from "../pages/pre-built/user-manage/UserProfileRegular";
import UserProfileSetting from "../pages/pre-built/user-manage/UserProfileSetting";
import UserProfileNotification from "../pages/pre-built/user-manage/UserProfileNotification";
import UserProfileActivity from "../pages/pre-built/user-manage/UserProfileActivity";
import KycListRegular from "../pages/pre-built/kyc-list-regular/KycListRegular";
import KycDetailsRegular from "../pages/pre-built/kyc-list-regular/kycDetailsRegular";
import TransListBasic from "../pages/pre-built/trans-list/TransListBasic";
import TransListCrypto from "../pages/pre-built/trans-list/TransListCrypto";
import ProductCard from "../pages/pre-built/products/ProductCard";
import ProductList from "../pages/pre-built/products/ProductList";
import ProductDetails from "../pages/pre-built/products/ProductDetails";
import InvoiceList from "../pages/pre-built/invoice/InvoiceList";
import InvoiceDetails from "../pages/pre-built/invoice/InvoiceDetails";
import InvoicePrint from "../pages/pre-built/invoice/InvoicePrint";
import PricingTable from "../pages/pre-built/pricing-table/PricingTable";
import GalleryPreview from "../pages/pre-built/gallery/GalleryCardPreview";
import ReactToastify from "../pages/components/misc/ReactToastify";

import AppMessages from "../pages/app/messages/Messages";
import Chat from "../pages/app/chat/ChatContainer";
import Kanban from "../pages/app/kanban/Kanban";
import FileManager from "../pages/app/file-manager/FileManager";
import FileManagerFiles from "../pages/app/file-manager/FileManagerFiles";
import FileManagerShared from "../pages/app/file-manager/FileManagerShared";
import FileManagerStarred from "../pages/app/file-manager/FileManagerStarred";
import FileManagerRecovery from "../pages/app/file-manager/FileManagerRecovery";
import FileManagerSettings from "../pages/app/file-manager/FileManagerSettings";
import Inbox from "../pages/app/inbox/Inbox";
import JsTreePreview from "../pages/components/misc/JsTree";
import Calender from "../pages/app/calendar/index";
import QuillPreview from "../pages/components/forms/rich-editor/QuillPreview";
import TinymcePreview from "../pages/components/forms/rich-editor/TinymcePreview";
import KnobPreview from "../pages/components/charts/KnobPreview";

import Error404Classic from "../pages/error/404-classic";
import Error404Modern from "../pages/error/404-modern";
import Error504Modern from "../pages/error/504-modern";
import Error504Classic from "../pages/error/504-classic";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Success from "../pages/auth/Success";

import Layout from "../layout/Index";
import LayoutNoSidebar from "../layout/Index-nosidebar";
import LayoutApp from "../layout/Index-app";

const Pages = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}`} element={<Layout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="crypto" element={<Crypto />}></Route>
        <Route path="sales" element={<Sales />}></Route>
        <Route path="invest" element={<Invest />}></Route>
        <Route path="_blank" element={<Blank />}></Route>

        {/*Pre-built Pages*/}
        <Route path="project-card" element={<ProjectCardPage />}></Route>
        <Route path="project-list" element={<ProjectListPage />}></Route>

        <Route element={<UserContextProvider />}>
          <Route path="user-list-regular" element={<UserListRegular />}></Route>
          <Route path="user-list-compact" element={<UserListCompact />}></Route>
          <Route path="user-contact-card" element={<UserContactCard />}></Route>
          <Route path="user-details-regular/:userId" element={<UserDetails />}></Route>
        </Route>

        <Route>
          <Route path="user-profile-notification" element={<UserProfileNotification />}></Route>
          <Route path="user-profile-regular" element={<UserProfileRegular />}></Route>
          <Route path="user-profile-activity" element={<UserProfileActivity />}></Route>
          <Route path="user-profile-setting" element={<UserProfileSetting />}></Route>
        </Route>

        <Route path="kyc-list-regular" element={<KycListRegular />}></Route>
        <Route path="kyc-details-regular/:kycId" element={<KycDetailsRegular />}></Route>
        <Route path="transaction-basic" element={<TransListBasic />}></Route>
        <Route path="transaction-crypto" element={<TransListCrypto />}></Route>
        <Route element={<ProductContextProvider />}>
          <Route path="product-list" element={<ProductList />}></Route>
          <Route path="product-card" element={<ProductCard />}></Route>
          <Route path="product-details/:productId" element={<ProductDetails />}></Route>
        </Route>

        <Route path="invoice-list" element={<InvoiceList />}></Route>
        <Route path="invoice-details/:invoiceId" element={<InvoiceDetails />}></Route>
        <Route path="pricing-table" element={<PricingTable />}></Route>
        <Route path="image-gallery" element={<GalleryPreview />}></Route>

        <Route path="pages">
          <Route path="terms-policy" element={<Terms />}></Route>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="regular-v1" element={<Regularv1 />}></Route>
          <Route path="regular-v2" element={<Regularv2 />}></Route>
        </Route>

        <Route path="components">
          <Route index element={<Component />}></Route>
          <Route path="accordions" element={<Accordian />}></Route>
          <Route path="alerts" element={<Alerts />}></Route>
          <Route path="avatar" element={<Avatar />}></Route>
          <Route path="badges" element={<Badges />}></Route>
          <Route path="breadcrumbs" element={<Breadcrumbs />}></Route>
          <Route path="button-group" element={<ButtonGroup />}></Route>
          <Route path="buttons" element={<Buttons />}></Route>
          <Route path="cards" element={<Cards />}></Route>
          <Route path="carousel" element={<Carousel />}></Route>
          <Route path="dropdowns" element={<Dropdowns />}></Route>
          <Route path="form-elements" element={<FormElements />}></Route>
          <Route path="form-layouts" element={<FormLayouts />}></Route>
          <Route path="checkbox-radio" element={<CheckboxRadio />}></Route>
          <Route path="advanced-control" element={<AdvancedControls />}></Route>
          <Route path="input-group" element={<InputGroup />}></Route>
          <Route path="form-upload" element={<FormUpload />}></Route>
          <Route path="number-spinner" element={<NumberSpinner />}></Route>
          <Route path="form-validation" element={<FormValidation />}></Route>
          <Route path="datetime-picker" element={<DateTimePicker />}></Route>
          <Route path="modals" element={<Modals />}></Route>
          <Route path="pagination" element={<Pagination />}></Route>
          <Route path="popovers" element={<Popovers />}></Route>
          <Route path="progress" element={<Progress />}></Route>
          <Route path="spinner" element={<Spinner />}></Route>
          <Route path="tabs" element={<Tabs />}></Route>
          <Route path="toast" element={<Toast />}></Route>
          <Route path="tooltips" element={<Tooltips />}></Route>
          <Route path="typography" element={<Typography />}></Route>
          <Route path="noUislider" element={<NouiSlider />}></Route>
          <Route path="wizard-basic" element={<WizardForm />}></Route>
          <Route path="quill" element={<QuillPreview />}></Route>
          <Route path="tinymce" element={<TinymcePreview />}></Route>
          <Route path="util-border" element={<UtilBorder />}></Route>
          <Route path="util-colors" element={<UtilColors />}></Route>
          <Route path="util-display" element={<UtilDisplay />}></Route>
          <Route path="util-embeded" element={<UtilEmbeded />}></Route>
          <Route path="util-flex" element={<UtilFlex />}></Route>
          <Route path="util-others" element={<UtilOthers />}></Route>
          <Route path="util-sizing" element={<UtilSizing />}></Route>
          <Route path="util-spacing" element={<UtilSpacing />}></Route>
          <Route path="util-text" element={<UtilText />}></Route>

          <Route path="widgets">
            <Route path="cards" element={<CardWidgets />}></Route>
            <Route path="charts" element={<ChartWidgets />}></Route>
            <Route path="rating" element={<RatingWidgets />}></Route>
          </Route>

          <Route path="misc">
            <Route path="slick-slider" element={<SlickPage />}></Route>
            <Route path="sweet-alert" element={<SweetAlertPage />}></Route>
            <Route path="beautiful-dnd" element={<BeautifulDnd />}></Route>
            <Route path="dual-list" element={<DualListPage />}></Route>
            <Route path="map" element={<GoogleMapPage />}></Route>
            <Route path="toastify" element={<ReactToastify />}></Route>
            <Route path="jsTree" element={<JsTreePreview />}></Route>
          </Route>
        </Route>
        <Route path="charts">
          <Route path="chartjs" element={<ChartPage />}></Route>
          <Route path="knobs" element={<KnobPreview />}></Route>
        </Route>

        <Route path="table-basic" element={<BasicTable />}></Route>
        <Route path="table-datatable" element={<DataTablePage />}></Route>
        <Route path="table-special" element={<SpecialTablePage />}></Route>
        <Route path="email-template" element={<EmailTemplate />}></Route>
        <Route path="nioicon" element={<NioIconPage />}></Route>
        <Route path="svg-icons" element={<SVGIconPage />}></Route>
      </Route>
      <Route path={`${process.env.PUBLIC_URL}`}>
        <Route element={<LayoutApp app={{ icon: "chat", theme: "bg-purple-dim", text: "Messages" }} />}>
          <Route path="app-messages" element={<AppMessages />}></Route>
        </Route>
        <Route element={<LayoutApp app={{ icon: "chat-circle", theme: "bg-orange-dim", text: "NioChat" }} />}>
          <Route path="app-chat" element={<Chat />}></Route>
        </Route>
        <Route element={<LayoutApp app={{ icon: "calendar", theme: "bg-success-dim", text: "Calendar" }} />}>
          <Route path="app-calender" element={<Calender />}></Route>
        </Route>
        <Route element={<LayoutApp app={{ icon: "inbox", theme: "bg-primary-dim", text: "Mailbox" }} />}>
          <Route path="app-inbox" element={<Inbox />}></Route>
        </Route>
        <Route element={<LayoutApp app={{ icon: "template", theme: "bg-info-dim", text: "Kanban" }} />}>
          <Route path="app-kanban" element={<Kanban />}></Route>
        </Route>
        <Route element={<LayoutApp app={{ icon: "folder", theme: "bg-orange-dim", text: "File Manager" }} />}>
          <Route path="app-file-manager">
            <Route index element={<FileManager />}></Route>
            <Route path="files" element={<FileManagerFiles />}></Route>
            <Route path="starred" element={<FileManagerStarred />}></Route>
            <Route path="shared" element={<FileManagerShared />}></Route>
            <Route path="recovery" element={<FileManagerRecovery />}></Route>
            <Route path="settings" element={<FileManagerSettings />}></Route>
          </Route>
        </Route>
      </Route>

      <Route path={`${process.env.PUBLIC_URL}`} element={<LayoutNoSidebar />}>
        <Route path="auth-success" element={<Success />}></Route>
        <Route path="auth-reset" element={<ForgotPassword />}></Route>
        <Route path="auth-register" element={<Register />}></Route>
        <Route path="auth-login" element={<Login />}></Route>

        <Route path="errors">
          <Route path="404-modern" element={<Error404Modern />}></Route>
          <Route path="404-classic" element={<Error404Classic />}></Route>
          <Route path="504-modern" element={<Error504Modern />}></Route>
          <Route path="504-classic" element={<Error504Classic />}></Route>
        </Route>
        <Route path="*" element={<Error404Modern />}></Route>

        <Route path="invoice-print/:invoiceId" element={<InvoicePrint />}></Route>
      </Route>
    </Routes>
  );
};
export default Pages;
