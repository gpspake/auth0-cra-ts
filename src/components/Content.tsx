import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { TodoLists } from './TodoLists'
import {CreateTodoList} from "./CreateTodoList";
import { EditTodoList } from './EditTodoList'

export const Content = () => {
  return (
    <Switch>
      <Route path="/todo/new">
        <CreateTodoList />
      </Route>
      <Route path="/todo/:todoListIdParam">
        <EditTodoList />
      </Route>
      <Route path="/">
        <TodoLists />
      </Route>
    </Switch>
  )
}
