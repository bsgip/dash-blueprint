import React from 'react';


import { Menu, MenuDivider, MenuItem } from '../lib';


export default {
  title: 'Menu/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Menu>
    <MenuItem {...args} >
        <MenuItem text={"SubMenu Item 1"} href={"sub1"} />
        <MenuDivider />
        <MenuItem text={"SubMenu Item 2"} href={"sub2"} />
    </MenuItem>
    
</Menu>

export const Primary = Template.bind({});
Primary.args = {
    text: "Menu"
};
