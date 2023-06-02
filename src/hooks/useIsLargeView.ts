/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery, useTheme } from "@mui/material"

export const useIsLargeView = () => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.up("sm"))
}
