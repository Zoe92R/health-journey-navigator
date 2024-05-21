import { Meta, StoryObj } from "@storybook/react"
import { ButtonProps } from "@mui/material";

import HjnButton, { IHjnButton, ButtonType } from "./HjnButton";

const meta: Meta<typeof HjnButton> = {
  title: 'Example/HjnButton',
  component: HjnButton,
};

export default meta;

type Story = StoryObj<IHjnButton & ButtonProps>;

export const Primary: Story = {
  args: {
    children: "click",
    type: ButtonType.Primary
  }
};

export const Secondary: Story = {
  args: {
    children: "click",
    type: ButtonType.Secondary,
    color: "secondary",
  }
};

export const Costume: Story = {
  args: {
    children: "click",
    variant: "contained",
    sx: { padding: '20px' }, //Mui ButtonProps
    size: "small" //Mui ButtonProps
  }
};