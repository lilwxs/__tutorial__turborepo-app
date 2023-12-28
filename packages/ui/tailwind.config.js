/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config";
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  prefix: "ui-",
  presets: [sharedConfig],
};
