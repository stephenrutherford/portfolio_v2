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
import Gist from "react-gist"

function WebScraping() {
	const { colorMode, toggleColorMode } = useColorMode()
	const gistData = {
		id: "3b6c338918224f4eb1718edd36163bef",
		file: null,
	}

	return (
		<Flex mw='750px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Web Scraping</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/webscraping/promo.svg'
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
						href='https://github.com/stephenrutherford/Cats-for-Adoption-Web-Scraping-and-Analysis'
						isExternal
					>
						<Text pl={4}>GitHub</Text>
					</Link>
				</Flex>

				<Flex alignItems='center'>
					<Image
						boxSize='40px'
						objectFit='cover'
						src={colorMode === "light" ? "images/web.svg" : "images/web_2.svg"}
						alt='Live Demo'
					/>
					<Link
						href='https://github.com/stephenrutherford/Cats-for-Adoption-Web-Scraping-and-Analysis/blob/master/anaylsis.ipynb'
						isExternal
					>
						<Text pl={4}>Jupyter Notebook</Text>
					</Link>
				</Flex>
			</VStack>
			<VStack mt={10} spacing={4} alignItems='left'>
				<Heading size='md'>Overview</Heading>
				<Text>
					A data analysis of cats available for adoption using Python web
					scraping, PostgreSQL, and Pandas.
				</Text>
				<Heading size='md'>Analysis</Heading>
				<Text>
					Please click{" "}
					<Link
						href='../images/projects/webscraping/webscraping.pdf'
						isExternal
					>
						here
					</Link>{" "}
					to view the analysis as a PDF . Alternatively, view the links above
					for the GitHub repository or Jupyter Notebook.
				</Text>
			</VStack>
		</Flex>
	)
}

export default WebScraping
