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
} from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

function Carousel() {
	return (
		<Flex flexDirection='column'>
			<Flex pt={4} pb={1}>
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
