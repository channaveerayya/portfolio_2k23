import * as React from "react"
import {Container,Grid} from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material"
import { motion, useIsPresent } from "framer-motion"
import Link from 'next/link';
import Image from "next/legacy/image";
import { useRouter } from "next/router"

export default function Index(props) {
  const theme = useTheme()
  const isPresent = useIsPresent()
  const router: any = useRouter()
  const { basePath }: any = router
  return (
    <Container maxWidth="xl">
     
    <Grid container>
<Grid item sm={12} md={6}>
h1ijjijijiji
</Grid>
<Grid item  sm={12} md={6}>
  <Box>
  <Image
      layout={"responsive"}
      width={500}
      height={500}
      src={`${basePath}/hero.svg`}
      quality={100}
     alt="hero"
    />
  </Box>
</Grid>
    </Grid>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut" } }}
        // exit={{ scaleX: 1, transition: { duration: 1.5, ease: "circOut" } }}
        style={{
          originX: isPresent ? 1 : 0,
          position: "fixed",
          top: "4rem",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.palette.color?.drawerBackground,
          zIndex: 2,
        }}
      />
    </Container>
  )
}

