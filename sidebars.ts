import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    {
      type: "category",
      label: "User guide",
      collapsed: false,
      link: { type: "doc", id: "user-guide" },
      items: [
        "user-guide/quickstart",
        {
          type: "category",
          label: "➡️ Get data in",
          link: { type: "doc", id: "user-guide/in" },
          items: [{ type: "autogenerated", dirName: "user-guide/in" }],
        },
        {
          type: "category",
          label: "🔀 Transform data",
          link: { type: "doc", id: "user-guide/transform" },
          items: [
            {
              type: "category",
              label: "Geospatial data",
              link: { type: "doc", id: "user-guide/transform/geospatial" },
              collapsed: false,
              items: [
                {
                  type: "autogenerated",
                  dirName: "user-guide/transform/geospatial",
                },
              ],
            },
            {
              type: "category",
              label: "Generic data",
              link: { type: "doc", id: "user-guide/transform/generic" },
              collapsed: true,
              items: [
                {
                  type: "autogenerated",
                  dirName: "user-guide/transform/generic",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "⬅️ Get data out",
          link: { type: "doc", id: "user-guide/out" },
          items: [{ type: "autogenerated", dirName: "user-guide/out" }],
        },
        {
          type: "category",
          label: "⭐ Use cases",
          link: { type: "doc", id: "user-guide/use-cases" },
          items: [{ type: "autogenerated", dirName: "user-guide/use-cases" }],
        },
        {
          type: "category",
          label: "🎓 Examples",
          link: { type: "doc", id: "user-guide/examples" },
          items: [{ type: "autogenerated", dirName: "user-guide/examples" }],
        },
      ],
    },
    {
      type: "category",
      label: "Core concepts",
      collapsed: true,
      link: { type: "doc", id: "core-concepts" },
      items: [{ type: "autogenerated", dirName: "core-concepts" }],
    },
    {
      type: "category",
      label: "Workbench",
      collapsed: true,
      link: { type: "doc", id: "workbench" },
      items: [{ type: "autogenerated", dirName: "workbench" }],
    },
    {
      type: "category",
      label: "Python SDK",
      link: { type: "doc", id: "python-sdk/index" },
      items: [
        "python-sdk/top-level-functions",
        {
          type: "category",
          label: "API Reference",
          // link: { type: "doc", id: "user-guide/use-cases" },
          items: [
            { type: "autogenerated", dirName: "python-sdk/api-reference" },
          ],
        },

        "python-sdk/authentication",
        "python-sdk/dependencies",
        "python-sdk/changelog",
        "python-sdk/contribute",
      ],
    },
  ],
};

export default sidebars;
