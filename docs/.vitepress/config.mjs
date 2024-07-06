import { defineConfig } from "vitepress";
import {nav} from "./configs/nav.js";
import {sidebar} from "./configs/sidebar.js";
import {socialLinks} from "./configs/socialLinks.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jaspernote",
  base: "/jaspernote/",
  lastUpdated: true,
  ignoreDeadLinks: true,
  description: "jasper learn note",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav,
    sidebar,
    socialLinks,
    returnToTopLabel: '返回顶部',
    logo: "/public/logo.png",
    search: {
      provider: "local",
    },
    outline: {
      level: 3,
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/jaspercliff/jaspernote?tab=License-1-ov-file">CC BY-NC-ND 4.0</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/jaspercliff">jaspercliff</a>',
    },
  },
});
