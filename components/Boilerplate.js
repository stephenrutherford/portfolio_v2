import {
	Heading,
	Flex,
	Spacer,
	Avatar,
	useColorMode,
	IconButton,
	Link,
	VStack,
	Image,
	Text,
} from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

function Boilerplate() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex maxW='750px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Next.js Boilerplate</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/boilerplate/promo.svg'
					border='1px solid lightgray'
					borderRadius='lg'
					overflow='hidden'
				></Image>
				<Flex alignItems='center'>
					<Image
						boxSize='40px'
						objectFit='cover'
						src={
							colorMode === "light"
								? "images/github.svg"
								: "images/github_2.svg"
						}
						alt='GitHub'
					/>
					<Link
						href='https://github.com/stephenrutherford/NextJs-Chakra-Prettier-Boilerplate'
						isExternal
					>
						<Text pl={4}>GitHub</Text>
					</Link>
				</Flex>
			</VStack>
			<VStack mt={10} spacing={4} alignItems='left'>
				<Heading size='md'>Overview</Heading>
				<Text>
					This is a Next.js boilerplate template bootstrapped with
					create-next-app. Pre-configured with Chakra UI library and ESLint with
					Prettier.
				</Text>
				<Heading size='md'>Getting Started</Heading>

				<Text>VSCode Extension Requirements</Text>
				<Text>
					<li>ESLint</li>
					<li>Prettier </li>
				</Text>
				<Text>First, install ESLint globally:</Text>
				<Flex bgColor={colorMode === "light" ? "gray.300" : "gray.700"}>
					<Text
						className={styles.code}
						Color={colorMode === "light" ? "gray.700" : "gray.300"}
					>
						npm i -G eslint
					</Text>
				</Flex>
				<Text>Next, start your Next.js app with the following command:</Text>
				<Flex bgColor={colorMode === "light" ? "gray.300" : "gray.700"}>
					<Text
						className={styles.code}
						Color={colorMode === "light" ? "gray.700" : "gray.300"}
					>
						npx create-next-app yourAppName -e
						https://github.com/stephenrutherford/NextJs-Chakra-Prettier-Boilerplate
					</Text>
				</Flex>
				<Text>Finally, open the Workspace:</Text>
				<Flex bgColor={colorMode === "light" ? "gray.300" : "gray.700"}>
					<Text
						className={styles.code}
						Color={colorMode === "light" ? "gray.700" : "gray.300"}
					>
						File > Open Workspace...
					</Text>
				</Flex>

				<Heading size='md'>Deployment</Heading>
				<Flex bgColor={colorMode === "light" ? "gray.300" : "gray.700"}>
					<Text
						className={styles.code}
						Color={colorMode === "light" ? "gray.700" : "gray.300"}
					>
						cd yourAppName
					</Text>
				</Flex>
				<Flex bgColor={colorMode === "light" ? "gray.300" : "gray.700"}>
					<Text
						className={styles.code}
						Color={colorMode === "light" ? "gray.700" : "gray.300"}
					>
						npm run dev
					</Text>
				</Flex>
			</VStack>
		</Flex>
	)
}

export default Boilerplate
