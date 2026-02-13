import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import router from "./routes";
import AppTheme from "./theme/AppTheme";

const App = () => {
  return (
    <AppTheme>
      <CssBaseline />
      <RouterProvider router={router} />
    </AppTheme>
  )
}

export default App