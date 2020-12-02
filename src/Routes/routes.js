import Contact from '../pages/Contact'
import Home from '../pages/Home'
const Routes = [
    {
        path:'/Contact',
        component:Contact,
        exact:true
    },
    {
        path:"/",
        component:Home,
        exact:true
    }
]
export default Routes