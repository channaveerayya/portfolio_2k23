import { useTheme } from "@mui/material"
import ResponsiveAppBar from "components/Navbar/DesktopNavBar";

function Layout(props) {
  const theme = useTheme()

  return (
    <div className="page-layout">
      <ResponsiveAppBar />
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color:${theme.palette.color?.bodyBackground}
        }
      `}</style>
    </div>
  );
}

export default Layout;