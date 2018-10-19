/**
 * Browser Policy
 * Set security-related policies to be enforced by newer browsers.
 * These policies help prevent and mitigate common attacks like
 * cross-site scripting and clickjacking.
 */

import { BrowserPolicy } from 'meteor/browser-policy-common';

/**
 * allowed images
 */
const allowImageOrigin = ['via.placeholder.com'];
allowImageOrigin.forEach(o => BrowserPolicy.content.allowImageOrigin(o));

/**
 * allowed scripts
 */
// const allowScriptOrigin = [''];
// allowScriptOrigin.forEach(o => BrowserPolicy.content.allowScriptOrigin(o));

/**
 * allowed styles
 */
const allowStyleOrigin = ['fonts.googleapis.com'];
allowStyleOrigin.forEach(o => BrowserPolicy.content.allowStyleOrigin(o));

/**
 * allowed fonts
 */
const allowFontOrigin = ['fonts.gstatic.com'];
allowFontOrigin.forEach(o => BrowserPolicy.content.allowFontOrigin(o));
