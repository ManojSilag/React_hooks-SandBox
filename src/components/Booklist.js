import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
   static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark} = this.context;
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
}
 
export default BookList;