import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Browse from '../pages/browse'

const Routes = () => (
    <Switch>
        <Route exat path="/" component={Browse}/>
    </Switch>
)

export default Routes;



