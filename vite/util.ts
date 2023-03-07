import _ from "lodash";
export function parseEnv(env: Record<string, any>): ImportMetaEnv {
  const envs: any = _.cloneDeep(env);

  Object.entries(env).forEach(([key, value]) => {
    if (value == "true" || value == "false")
      envs[key] = value == "true" ? true : false;
    else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value == "null") envs[key] = null;
    else if (value == "undefined") envs[key] = undefined;
  });
  return envs;
}

// export function parseEnv(env: Record<string, any>): ImportMetaEnv {
//   for (const key in env) {
//     if (Object.prototype.hasOwnProperty.call(env, key)) {
//       const value = env[key];
//       if (value === "true") {
//         env[key] = true;
//       }
//       if (value === "false") {
//         env[key] = false;
//       }

//       if (/^\d+$/.test(value)) {
//         env[key] = Number(value); //
//       }
//     }
//   }
//   return env as ImportMetaEnv;
// }
