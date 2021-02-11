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

function Dashboard() {
	const { colorMode, toggleColorMode } = useColorMode()
	const gistData = {
		id: "3b6c338918224f4eb1718edd36163bef",
		file: null,
	}

	return (
		<Flex mw='750px' flexDirection='column'>
			<VStack mt={10} spacing={6} alignItems='left'>
				<Heading>Fraud Dashboard</Heading>
				<Image
					backgroundColor='white'
					src='images/projects/dashboard/promo.svg'
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
					<Link href='#' isExternal>
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
					<Link href='#' isExternal>
						<Text pl={4}>Live Demo</Text>
					</Link>
				</Flex>
			</VStack>
			<VStack mt={10} spacing={4} alignItems='left'>
				<Text as='mark'>
					This dashboard is under active development. The Live Demo may have
					incomplete links or features.
				</Text>
				<Heading size='md'>Overview</Heading>
				<Text>
					A fraud metrics and sales dashboard created with Next.js. Designed as
					a data visualization tool using charts and tables.
				</Text>
				<Heading size='md'>Features</Heading>
				<Text>
					The app was built in Django using Python where it will perform a
					web-scrape from the website check-mail.org. The user can paste in the
					domains that they want to check, and the App will render a results
					table with two specific columns that contain data of interest.
					<li>Disposable - If the domain is considered disposable.</li>
					<li>
						Valid - If thedomain is able to receive email, or is high risk.
					</li>
					An export button was also included for larger querues. The user may
					want to download the entire results table as a CSV file for filtering
					and spreadsheet lookups.
				</Text>
			</VStack>
		</Flex>
	)
}

export default Dashboard
