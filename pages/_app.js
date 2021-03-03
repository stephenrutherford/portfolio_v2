import { ChakraProvider } from "@chakra-ui/react"
import "../styles/globals.css"
import theme from "../styles/theme"
import Layout from "../components/Layout"

import { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../lib/gtag"

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		}
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [router.events])

	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
