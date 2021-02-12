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
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import Carousel from "../components/Carousel"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"
import { NextSeo } from "next-seo"

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div className={styles.container}>
			<NextSeo
				title='Stephen Rutherford'
				description='I am a Fraud Anaylst. Check out my projects!'
				keywords='Stephen Rutherford, Stephen, Rutherford, Fraud, Risk, Analyst, Investigator, Python, SQL, JSX'
				canonical='https://rutherford.dev/'
				author='Stephen Rutherford'
				robots='index, follow'
			/>
			{/* <Head>
				<meta
					name='description'
					content='I am a Fraud Anaylst. Check out my projects!'
					name='keywords'
					content='Stephen Rutherford, Stephen, Rutherford, Fraud, Risk, Analyst, Investigator, Python, SQL, JSX'
					name='author'
					content='Stephen Rutherford'
				/>
				<title>Stephen Rutherford</title>
				<link rel='icon' href='/favicon.ico' />
			</Head> */}

			<main className={styles.main}>
				{/* Title */}
				<Header />
				{/* Carousel */}
				<Carousel />
				{/* Projects */}
				<VStack mt={10} spacing={6}>
					<Card
						link='domainchecker'
						image='images/projects/domainchecker/thumb.svg'
						heading='Domain Checker'
						description='A fraud investigation tool used to check for invalid and disposable email domains.'
						badge1='PYTHON'
						badge2='SQL'
					/>
					<Card
						link='dashboard'
						image='images/projects/dashboard/thumb.svg'
						heading='Fraud Dashboard'
						description='	A fraud metrics and sales dashboard created with Next.js. Designed as
						a data visualization tool using charts and tables.'
						badge1='JSX'
					/>
					<Card
						link='webscraping'
						image='images/projects/webscraping/thumb.svg'
						heading='Cats for Adoption: Web Scraping and Analysis'
						description='A data analysis of cats available for adoption using Python web scraping, PostgreSQL, and Pandas.'
						badge1='PYTHON'
						badge2='PANDAS'
						badge3='SQL'
					/>
				</VStack>
			</main>

			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	)
}
