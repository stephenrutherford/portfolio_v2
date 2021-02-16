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
import BP from "../components/Boilerplate"
// import styles from "../styles/Home.module.css"

export default function Boilerplate() {
	return (
		<div>
			<Head>
				<title>Stephen Rutherford</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<BP />
		</div>
	)
}
