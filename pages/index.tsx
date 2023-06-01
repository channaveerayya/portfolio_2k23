import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"
import { motion, useIsPresent } from "framer-motion"
import Link from 'next/link';

export default function Index(props) {
  const theme = useTheme()
  const isPresent = useIsPresent()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          color={"primary"}
          onClick={props.toggleTheme}
        >
          Material UI - Next.js example
        </Typography>
      </Box>
      <h2>
        <Link href="/about"> about</Link>
      </h2>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut" } }}
        // exit={{ scaleX: 1, transition: { duration: 1.5, ease: "circOut" } }}
        style={{
          originX: isPresent ? 1 : 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.palette.primary.main,
          zIndex: 2,
        }}
      />
    </Container>
  )
}
