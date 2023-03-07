export function parseEev(env: Record<string, any>) {
  for (const key in env) {
    if (Object.prototype.hasOwnProperty.call(env, key)) {
      const value = env[key];
      if (value === "true") {
        env[key] = true;
      }
      if (value === "false") {
        env[key] = false;
      }

      if (/^\d+$/.test(value)) {
        env[key] = Number(value); //
      }
    }
  }
  return env;
}
