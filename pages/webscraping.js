import Head from "next/head"
import {
	Heading,
	Flex,
	Spacer,
	Avatar,
	useColorMode,
	IconButton,
	Link,
	VStack,
	Tooltip,
} from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WS from "../components/WebScraping"
import styles from "../styles/Home.module.css"

export default function WebScraping() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Stephen Rutherford</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<WS />
		</div>
	)
}
