import { useTheme } from "@mui/material"

function Layout(props) {
  const theme = useTheme()

  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color:${theme.palette.color?.background}
        }
      `}</style>
    </div>
  );
}

export default Layout;