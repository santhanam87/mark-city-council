import { useMediaQuery, useTheme, type Breakpoint } from "@mui/material";

function useBreakPoint(breakpoint: Breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}

export default useBreakPoint;
