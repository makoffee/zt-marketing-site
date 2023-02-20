import * as React from "react"
import { Box, Flex, FlexList, NavLink, Text } from "./ui"

export default function NavItemGroup({ name, navItems }) {

  return (
    <Flex variant="spaceBetween" gap={2}>
        <Flex variant="spaceBetween">
          <Text bold >{name}</Text>
        </Flex>
        <Flex variant="columnStart" >
          <FlexList variant="columnStart" gap={2}>
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <NavLink to={navItem.href} >
                  <Flex variant="start" gap={2}>
                    <Flex variant="columnStart" marginY={0} gap={0}>
                      <Box as="span">
                        {navItem.text}
                      </Box>
                    </Flex>
                  </Flex>
                </NavLink>
              </li>
            ))}
          </FlexList>
        </Flex>
    </Flex>
  )
}
