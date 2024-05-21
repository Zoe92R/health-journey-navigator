import { FC, ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface IHjnTypography {
  children: ReactNode;
  color?: string;
}

const HjnTypography: FC<IHjnTypography & TypographyProps> = ({
  children,
  variant,
  color,
}) => {
  return (
    <Typography variant={variant} color={color}>
      {children}
    </Typography>
  );
};

export default HjnTypography;
