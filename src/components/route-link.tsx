import React from "react";
import { createLink } from "@tanstack/react-router";
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import type { LinkComponent } from "@tanstack/react-router";

interface MUIButtonLinkProps extends ButtonProps<"a"> {
  // Add any additional props you want to pass to the Button
  label?: string;
  sx: React.CSSProperties;
  variant?: "text" | "contained" | "outlined";
}

const MUIButtonLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  MUIButtonLinkProps
>((props, ref) => (
  <Button ref={ref} component='a' {...props}>
    {props.label}
  </Button>
));

const CreatedButtonLinkComponent = createLink(MUIButtonLinkComponent);

export const RouteLink: LinkComponent<typeof MUIButtonLinkComponent> = (
  props
) => {
  return <CreatedButtonLinkComponent preload={"intent"} {...props} />;
};

// import Button from "@mui/material/Button";
// import { createLink, type LinkComponent } from "@tanstack/react-router";
// import { forwardRef, type AnchorHTMLAttributes } from "react";

// const BasicLinkComponent = forwardRef<
//   HTMLAnchorElement,
//   AnchorHTMLAttributes<HTMLAnchorElement> & {
//     label?: string;
//     sx: React.CSSProperties;
//     variant?: "text" | "contained" | "outlined";
//   }
// >((props, ref) => {
//   return (
//     <Button
//       component='a'
//       variant={props.variant || "contained"}
//       disableElevation
//       ref={ref}
//       href={props.href}
//       sx={props.sx}
//     >
//       {props.label ?? "Link"}
//     </Button>
//   );
// });

// const CreatedLinkComponent = createLink(BasicLinkComponent);

// export const RouteLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
//   return <CreatedLinkComponent preload={"intent"} {...props} />;
// };
