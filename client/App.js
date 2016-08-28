import { App, Domain  } from 'inux'

import viewMain from './views/main'
import viewLogistics from './views/logistics'

const app = Domain({
  name: 'app',
  routes: [
    ['/', (params, model, dispatch) => viewMain(model, dispatch) ],
    ['/logistics', (params, model, dispatch) => viewLogistics(model, dispatch) ],
  ]
})
 
export default App([
  app
])

