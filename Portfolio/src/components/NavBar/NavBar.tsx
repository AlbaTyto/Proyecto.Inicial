import React from "react";
import n from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { Image, HStack, Button, Link, Stack } from "@chakra-ui/react";
import FlagCV from "../FlagCV/FlagCV";

export default function NavBar(): React.JSX.Element {
	return <div className={n.NavDiv}>
		<span id={n.name}>
			<Link as={NavLink} to='/'><h1>Gustavo Peretti</h1></Link>
		</span>
		<div className={n.NLinks}>
			<Stack direction={['column', 'row']} spacing={"60%"}>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
			</Stack>
			<HStack spacing={'15%'}>
				<FlagCV 
				text="CV" 
				flag="https://icons.iconarchive.com/icons/custom-icon-design/round-world-flags/256/United-kingdom-icon.png"
				link="https://drive.google.com/file/d/1FxfJwfJM5SHFAvjrk9AR-eC4tXPnqsrf/view?usp=share_link"
				/>
				<FlagCV 
				text="CV" 
				flag="https://icons.iconarchive.com/icons/custom-icon-design/2014-world-cup-flags/256/Spain-icon.png"
				link="https://drive.google.com/file/d/1SpzwMKR6Knc0sPKdyfM63cjB82q6YGe0/view?usp=share_link"
				/>
			</HStack>
		</div>
	</div>;
}
