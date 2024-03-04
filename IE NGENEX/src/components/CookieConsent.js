import React from 'react';
import { CookieConsent } from 'react-cookie-consent';


function Cook() {
    return (
        <>
            < CookieConsent
                debug={true}
                location='bottom'
                style={{ background: 'black' }
                }
                buttonStyle={{ color: 'black', background: 'white', fontSize: '14px' }}
                buttonText='Got it!' >
                This Site uses Cookies.Visit our < a href="/privacy" > privacy policy</a > for more.
            </CookieConsent >
        </>
    );
}

export default Cook;