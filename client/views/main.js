import html from 'yo-yo'

import navigation from './partials/navigation'
import map from './partials/map'

const DOMAIN = 'main'
 
export default (model, dispatch) => html`
  <div>
    ${navigation}
    <h1>${DOMAIN} view</h1>

    <a href='rsvp' class='button'>rsvp link</a> <br />
    January 10th 2016 <br />

    ${map}
  </div>
`

