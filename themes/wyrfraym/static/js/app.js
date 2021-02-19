

{{ $js := resources.Get "js/main.js" | js.Build (dict "params" (dict "api" "https://example.org/api")) }}

import * as params from '@params';
{{ $externals := slice "react" "react-dom" }}
{{ $defines := dict "process.env.NODE_ENV" `"development"` }}
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const intro = document.querySelector('.intro');
const headline = document.querySelector('.headline');
