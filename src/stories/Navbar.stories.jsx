import React from 'react';


import { Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button} from '../lib';


export default {
  title: 'Core/Navbar',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Navbar>
    <NavbarGroup align={args.alignment}>
        <NavbarHeading>Blueprint</NavbarHeading>
        <NavbarDivider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
    </NavbarGroup>
    <NavbarGroup align={"right"}>
        <Button className="bp3-minimal" icon="cog" text="Settings" />
    </NavbarGroup>
</Navbar>


export const Primary = Template.bind({});
Primary.args = {
    alignment: "left"
};
