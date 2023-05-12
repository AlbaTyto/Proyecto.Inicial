import React from "react";
import n from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuList, Image } from "@chakra-ui/react";

export default function NavBar(): React.JSX.Element {
  return <div className={n.NavDiv}>
    <span id={n.name}>
    <NavLink to='/'><h1>Gustavo Peretti</h1></NavLink>
    </span>
    <div className={n.NLinks}>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <Menu>
						<MenuButton >
							Download CV
						</MenuButton>
						<MenuList>
							<MenuItem
								as={"a"}
								href={
									"https://drive.google.com/file/d/1FxfJwfJM5SHFAvjrk9AR-eC4tXPnqsrf/view?usp=share_link"
								}
								minH="48px"
							>
								<Image
									mr={1}
									boxSize={"1.5rem"}
									src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
									alt={"flag"}
								/>
								English
							</MenuItem>
							<MenuItem
								as={"a"}
								href={
									"https://drive.google.com/file/d/1SpzwMKR6Knc0sPKdyfM63cjB82q6YGe0/view?usp=share_link"
								}
								minH="48px"
							>
								<Image
									mr={1}
									boxSize={"1.5rem"}
									src="https://icons.iconarchive.com/icons/wikipedia/flags/256/ES-Spain-Flag-icon.png"
									alt={"flag"}
								/>
								Spanish
							</MenuItem>
						</MenuList>
					</Menu>
    </div>
  </div>;
}
