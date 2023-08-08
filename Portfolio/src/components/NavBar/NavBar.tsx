import React from "react";
import n from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { Image, HStack, Button, Link } from "@chakra-ui/react";

export default function NavBar(): React.JSX.Element {
	return <div className={n.NavDiv}>
		<span id={n.name}>
			<Link as={NavLink} to='/'><h1>Gustavo Peretti</h1></Link>
		</span>
		<div className={n.NLinks}>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
			<HStack
			pr={{base: '0.5em', lg: '0'}}>
				<Button
						w={{ base: '3em', md: '4em' }}
						h={{ base: '2.5em', md: '1.8em' }}
						colorScheme='blue'
						leftIcon={<Image
							mr={1}
							boxSize={"1em"}
							src="https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/United-Kingdom-flag-icon.png"
							alt={"flag"}
						/>}
						as={Link} 
						href="https://drive.google.com/file/d/1FxfJwfJM5SHFAvjrk9AR-eC4tXPnqsrf/view?usp=share_link"
						isExternal
						>
						cv
					</Button>
					<Button
						w={{ base: '3em', md: '4em' }}
						h={{ base: '2.5em', md: '1.8em' }}
						colorScheme='blue'
						leftIcon={<Image
							mr={1}
							boxSize={"1em"}
							src="https://icons.iconarchive.com/icons/wikipedia/flags/256/ES-Spain-Flag-icon.png"
							alt={"flag"}
						/>}
						as={Link} 
						href="https://drive.google.com/file/d/1SpzwMKR6Knc0sPKdyfM63cjB82q6YGe0/view?usp=share_link" 
						isExternal
						>
						cv
					</Button>
			</HStack>
		</div>
	</div>;
}
