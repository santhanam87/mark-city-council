import Button from "@mui/material/Button";
import { createLink, type LinkComponent } from "@tanstack/react-router";
import { forwardRef, type AnchorHTMLAttributes } from "react";

const BasicLinkComponent = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    label?: string;
    sx: React.CSSProperties;
    variant?: "text" | "contained" | "outlined";
  }
>((props, ref) => {
  return (
    <Button
      component='a'
      variant={props.variant || "contained"}
      disableElevation
      ref={ref}
      href={props.href}
      sx={props.sx}
    >
      {props.label ?? "Link"}
    </Button>
  );
});

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const RouteLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={"intent"} {...props} />;
};
