import yup from "./yup";
import * as veeValidate from "vee-validate";
import rules from "@vee-validate/rules";
import { localize, loadLocaleFromURL } from "@vee-validate/i18n";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
loadLocaleFromURL(
  "https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json"
); // cdn引入

veeValidate.configure({
  generateMessage: localize("zh_CN"),
});

Object.keys(rules).forEach((rule) => {
  veeValidate.defineRule(rule, rules[rule]);
});

const validate = {
  yup,
  ...veeValidate,
};

export default validate;
