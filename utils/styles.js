import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  links: {
    marginRight: 60,
    fontWeight: 'semi-bold',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',

    '& a:hover': {
      backgroundColor: '#ed4134',
      transformation: '0.3ease',
      textDecoration: 'none',
    },
  },

  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },

  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
});
export default useStyles;
