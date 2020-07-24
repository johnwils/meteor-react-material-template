import { makeStyles } from '@material-ui/core';

/**
 * Custom styles for the TermsOfUse and PrivacyPolicy pages
 */
const useSharedDisclaimerStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

export default useSharedDisclaimerStyles;
