# Dummy Folder for Next.js (Pages Router)

**Disclaimer:** This dummy folder was created specifically to fix a routing conflict when using Next.js (App Router) alongside the FSD (Feature-Sliced Design) architecture.

By default, Next.js searches for a `pages` directory within `src/` to initialize its legacy Pages Router. Because the FSD methodology also dictates naming the Pages layer `src/pages`, a path conflict occurs causing the project to break during the build stage.

By creating an empty `pages/` directory at the project root, we forcefully bind the legacy Pages Router to this folder, effectively forcing Next.js to ignore `src/pages/`. This workaround allows us to seamlessly use `src/pages` as a pure FSD layer without any Next.js interference.
