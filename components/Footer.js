import {
	Heading,
	Flex,
	Stack,
	useColorMode,
	Image,
	Link,
} from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

function Footer() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			minW='100vw'
			h='100%'
			borderTop='1px solid #eaeaea'
			margin='0rem'
			// pb={0}
			// p='1.5rem'
		>
			<Heading
				fontSize='xl'
				// ml='2'
				color={colorMode === "light" ? "gray.600" : "gray.200"}
				letterSpacing='0.4rem'
				pt={4}
				// margin='1.5rem 0'
			>
				GET IN TOUCH
			</Heading>
			<Flex>
				<Stack direction='row' pt={4} pb={4}>
					<Link href='mailto:stephen@rutherford.dev'>
						<Image
							mr={4}
							boxSize='40px'
							objectFit='cover'
							// src='images/email.svg'
							src={
								colorMode === "light"
									? "images/email.webp"
									: "images/email_2.webp"
							}
							alt='Email'
						/>
					</Link>
					<Link href='https://github.com/stephenrutherford' isExternal>
						<Image
							mr={4}
							boxSize='40px'
							objectFit='cover'
							src={
								colorMode === "light"
									? "images/github.webp"
									: "images/github_2.webp"
							}
							alt='GitHub'
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/stephen-rutherford-b420951a3'
						isExternal
					>
						<Image
							mr={4}
							boxSize='40px'
							objectFit='cover'
							src={
								colorMode === "light"
									? "images/linkedin.webp"
									: "images/linkedin_2.webp"
							}
							alt='LinkedIn'
						/>
					</Link>
				</Stack>
			</Flex>
		</Flex>
	)
}

export default Footer
