import type { RouterConfig } from "@nuxt/schema"
import { useRequestURL } from "nuxt/app"
import type { RouteRecordRaw } from "vue-router"

const OUR_DOMAIN = "localhost"
const getTenant = () => {
	const { hostname } = useRequestURL()
	if (hostname === OUR_DOMAIN) {
		return null
	}
	return hostname.replace(`.${OUR_DOMAIN}`, "")
}
export default <RouterConfig>{
	routes(routes) {
		const tenant = getTenant()
		console.log(routes)
		return routes
			.filter((route) => tenant ? isTenantRoute(route) : !isTenantRoute(route))
			.map(normalizeRoute)
	},
}

const isTenantRoute = (route: RouteRecordRaw) => route.path.match(/^\/tenant\/?/)

const normalizeRoute = (route: RouteRecordRaw) => {

	return {
		...route,
		path: route.path.replace(/^\/(tenant|app)\/?/, "/"),
	}
}