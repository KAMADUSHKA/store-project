import React from 'react'
import UserAuthorizedRoutes from './UserAuthorizedRoutes'
import { useRoutes } from 'react-router-dom'

export default function Routes() {
  return useRoutes (UserAuthorizedRoutes )
}
