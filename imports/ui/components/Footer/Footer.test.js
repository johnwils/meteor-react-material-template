import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer Component', () => {
  test('component renders', () => {
    const termsOfUseText = 'Terms of use';
    const privacyPolicyText = 'Privacy Policy';

    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    getByText(termsOfUseText);
    getByText(privacyPolicyText);
  });
});
