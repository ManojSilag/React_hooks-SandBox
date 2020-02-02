import React, { useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends Component {
//     // static contextType = ThemeContext;
//     render() { 
//         // const { isLightTheme, light, dark} = this.context;
//         // const theme = isLightTheme ? light : dark;
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                  <ThemeContext.Consumer>{( themeContext) =>{
//                     const { isAuthenticated, toggleAuth} = authContext;
//                     const { isLightTheme, light, dark} = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                  return(
//                     <nav style={{ background: theme.ui , color: theme.syantx}}>
//                     <h1>Context App</h1>
//                     <div onClick={toggleAuth}>
//                         { isAuthenticated ? 'logged In' : 'Logged out'}
//                     </div>
//                     <ul>
//                         <li>Home</li>
//                         <li>Abour</li>
//                         <li>Contact</li>
//                     </ul>
//                 </nav>
//                  )
                 
//                 }}
           
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//           );
//     }
// }
 
// export default Navbar;

const Navbar = () => {

        const themeContext = useContext(ThemeContext);
        const { isLightTheme, light, dark} = themeContext;
        const theme = isLightTheme ? light : dark;

        const authContext = useContext(AuthContext);
        const { isAuthenticated, toggleAuth} = authContext;
        return(
        <nav style={{ background: theme.ui , color: theme.syantx}}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
        { isAuthenticated ? 'logged In' : 'Logged out'}
        </div>
        <ul>
        <li>Home</li>
        <li>Abour</li>
        <li>Contact</li>
        </ul>
        </nav>
        )
}
 
export default Navbar;