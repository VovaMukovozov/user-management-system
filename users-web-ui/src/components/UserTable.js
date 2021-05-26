import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { getUsers } from '../server/user'
import '../App.css'

const pageSize = 5
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, sortable: false, },
  { field: 'lastName', headerName: 'Last name', width: 150, sortable: false, },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    sortable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 250,
    sortable: false,
  },
  {
    field: 'createdAt',
    headerName: 'Creation Date',
    sortable: false,
    width: 250,
    type: 'dateTime',
  },
]

const UserTable = () => {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async ({ query } = {}) => {
    setLoading(true)
    try {
      const { data } = await getUsers({ ...query, limit: pageSize })
      setRows(data.users)
      setCount(data.total)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = params => {
    setPage(params.page)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    const query = {
      offset: page * pageSize,
    }
    fetchUsers({ query })
  }, [page])

  return (
    <div className="user-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        disableColumnMenu
        paginationMode={'server'}
        onPageChange={handlePageChange}
        rowCount={count}
        loading={loading}
        pagination
      />
    </div>
  )
}

export default UserTable