import html from 'yo-yo'

import navigation from './partials/navigation'

const DOMAIN = 'main'
 
export default (model, dispatch) => html`
  <div>
    ${navigation}
    <h1>${DOMAIN} view</h1>

    transport <br />
    accomidation <br />
    international <br />
    venue <br />
    what to bring  (should what to wear be in here?)

  </div>
`

