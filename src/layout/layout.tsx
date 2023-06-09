import { Box } from "@mui/material"
import { LayoutProps } from "./layout.props"
import {Navbar, Footer} from 'src/components/index'

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={'90vh'}>{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
