import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Warning = "warning",
  Success = "success",
}

export interface IHjnButton {
  children: ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  sx?: object;
}

const HjnButton: FC<IHjnButton & ButtonProps> = ({
  children,
  type = ButtonType.Primary,
  disabled,
  onClick,
  sx,
  ...rest
}) => {
  const getVariant = () => {
    if (type === ButtonType.Primary) {
      return "contained";
    } else if (type === ButtonType.Secondary) {
      return "outlined";
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={getVariant()}
      disableRipple
      sx={{ ...sx, fontWeight: 600 }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default HjnButton;
