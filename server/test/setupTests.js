import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'whatwg-fetch'
import 'isomorphic-fetch'
import 'es6-promise'
import 'node-fetch'

Enzyme.configure({ adapter: new Adapter() })

global.shallow = Enzyme.shallow
global.mount = Enzyme.mount
