import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import AppLocale from "../../services/localization";
import { useLocaleContext } from "../AppContextProvider/LocaleContextProvider";
import { allowMultiLanguage } from "../../constants/AppConst";
import { IntlGlobalProvider } from "../../helpers/Common";

const AppLocaleProvider = (props) => {
  const { locale } = useLocaleContext();
  if (allowMultiLanguage) {
    const currentAppLocale = AppLocale[locale.locale];
    return (
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
        <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
      </IntlProvider>
    );
  } else {
    return (
      <IntlProvider locale="en" messages={[]}>
        {props.children}
      </IntlProvider>
    );
  }
};

export default AppLocaleProvider;

AppLocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
