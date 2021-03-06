import {
	Heading,
	Flex,
	Code,
	List,
	ListItem,
	UnorderedList,
	useColorMode,
	useBreakpointValue,
	Link,
	VStack,
	Image,
	Text,
} from "@chakra-ui/react"

function Boilerplate() {
	const { colorMode, toggleColorMode } = useColorMode()

	const gitURL = useBreakpointValue({
		base: "https://git.io/Jt1nK",
		xl:
			"https://github.com/stephenrutherford/NextJs-Chakra-Prettier-Boilerplate",
		lg:
			"https://github.com/stephenrutherford/NextJs-Chakra-Prettier-Boilerplate",
		md:
			"https://github.com/stephenrutherford/NextJs-Chakra-Prettier-Boilerplate",
		sm:
			"https://github.com/stephenrutherford/NextJs-Chakra-Prettier-Boilerplate",
	})

	return (
		<Flex maxW='750px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Next.js Boilerplate</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/boilerplate/promo.webp'
					border='1px solid lightgray'
					borderRadius='lg'
					overflow='hidden'
				/>
				{/* Test */}

				<Flex alignItems='center'>
					<Image
						boxSize='40px'
						objectFit='cover'
						src={
							colorMode === "light"
								? "images/github.webp"
								: "images/github_2.webp"
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
					This is a{" "}
					<Link href='https://nextjs.org/' isExternal>
						Next.js
					</Link>{" "}
					boilerplate template bootstrapped with create-next-app. Pre-configured
					with{" "}
					<Link href='https://chakra-ui.com/' isExternal>
						Chakra-UI
					</Link>{" "}
					library and ESLint with Prettier.
				</Text>
				<Heading size='md'>Getting Started</Heading>

				<Text>VSCode Extension Requirements</Text>
				<UnorderedList pl={8}>
					<ListItem>ESLint</ListItem>
					<ListItem>Prettier</ListItem>
				</UnorderedList>

				<Text>First, install ESLint globally:</Text>
				<Code p='2'> npm i -G eslint</Code>

				<Text>Next, start your Next.js app with the following command:</Text>
				<Code p='2'>npx create-next-app yourAppName -e {gitURL}</Code>

				<Text>Finally, open the Workspace:</Text>
				<Code p='2'> File > Open Workspace...</Code>

				<Heading size='md'>Deployment</Heading>
				<Code p='2'> cd yourAppName</Code>
				<Code p='2'> npm run dev</Code>
			</VStack>
		</Flex>
	)
}

export default Boilerplate
