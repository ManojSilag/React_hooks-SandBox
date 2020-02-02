import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
     
    const context =  useContext(ThemeContext);
    const { isLightTheme, light, dark} = context;
    const theme = isLightTheme ? light : dark;
    return (   
    <div className="book-list" style={{ background: theme.bg , color: theme.syantx}}>
        <ul>
            <li style={{background: theme.ui}}>ABCDE</li>
            <li style={{background: theme.ui}}>EFGH</li>
            <li style={{background: theme.ui}}>IJKL</li>
            <li style={{background: theme.ui}}>MNOP</li>
        </ul>
    </div>
    );
}
 
export default BookList;
