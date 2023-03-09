import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: `${yup.ref("$label")}不能为空`,
    // required: `${label}不能为空`,
  },
  string: {
    email: "请输入正确的邮箱格式",
    min: "最少${min}个字符",
    max: "最多${max}个字符",
  },
  number: {
    min: "最小值为${min}",
    max: "最大值为${max}",
  },
});

export default yup;
