import {
	Heading,
	Text,
	Flex,
	Button,
	Spacer,
	Stack,
	Avatar,
	useColorMode,
	Icon,
	IconButton,
	Image,
	Link,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

function Carousel() {
	const desktopDisplayVariant = useBreakpointValue({
		base: "none",
		xl: "inherit",
		lg: "inherit",
		md: "inherit",
		sm: "none",
	})
	const mobileDisplayVariant = useBreakpointValue({
		base: "inherit",
		xl: "none",
		lg: "none",
		md: "none",
		sm: "inherit",
	})

	return (
		<Flex flexDirection='column'>
			<Flex pt={4} pb={1} display={desktopDisplayVariant}>
				<Heading fontSize='3xl'>Hello, I like to work with</Heading>
				<Heading fontSize='3xl'>
					<Flex className={styles.verticalFlip}>
						<span>Python.</span>
						<span>SQL.</span>
						<span>JSX.</span>
						<span>
							<s>Food.</s>
						</span>
					</Flex>
				</Heading>
			</Flex>
			<Flex pt={4} pb={1}>
				<Heading fontSize='3xl' display={mobileDisplayVariant}>
					Hello, I like to work with Python, SQL, and JSX.
				</Heading>
			</Flex>
			{/* Description */}
			<Flex>
				<Text fontSize='xl'>
					I am a Fraud Anaylst. Check out my projects below, read my{" "}
					<Link
						href='https://www.linkedin.com/in/stephen-rutherford-b420951a3'
						isExternal
					>
						resume
					</Link>
					, or send me an{" "}
					<Link href='mailto:stephen@rutherford.dev'>email</Link>.
				</Text>
			</Flex>
		</Flex>
	)
}

export default Carousel
