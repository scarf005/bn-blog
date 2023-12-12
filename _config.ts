import { lume } from "./lume_core.ts"
import relativeUrls from "lume/plugins/relative_urls.ts"

const site = lume()

site.copy([".css"])
site.ignore("./README.md")
site.data("layout", "_includes/base.ts")
site.use(relativeUrls())

export default site
