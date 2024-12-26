import {BrowserRouter, Route} from 'react-router-dom'

import AppleHeader from './AppleComponent/AppleHeader'
import CollectionSwitching from './AppleComponent/CollectionSwitching'
import CaseSelection from './AppleComponent/CaseSelection'
import SizeCollection from './AppleComponent/SizeCollection'
import BandSelection from './AppleComponent/BandSelection'

const App = () => (
  <>
    <BrowserRouter>
      <AppleHeader />
      <Route exact path="/" component={CollectionSwitching} />
      <Route exact path="/case" component={CaseSelection} />
      <Route exact path="/size" component={SizeCollection} />
      <Route exact path="/band" component={BandSelection} />
    </BrowserRouter>
  </>
)

export default App
