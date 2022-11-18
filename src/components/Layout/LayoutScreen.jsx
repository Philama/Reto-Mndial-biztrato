import { ThemeProvider } from 'react-bootstrap';
import NavbarScreen from '../Navbar/NavbarScreen';

const LayoutScreen = ({ children }) => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <div className='container vh-100 overflow-hidden'>
        <NavbarScreen />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default LayoutScreen;
