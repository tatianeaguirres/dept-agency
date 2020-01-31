import React from 'react'
import Works from '../works/works'
import Clients from '../clients/clients'
import Form from '../form/form'
import { clientsDescription, clientsData } from '../../mocks/clients-data'
import { testemonialData, worksData } from '../../mocks/works-data'

const Home = () => {
  return (
    <div>
      <Works worksData={worksData} testemonialData={testemonialData} />
      <Clients
        clientsDescription={clientsDescription}
        clientsData={clientsData}
      />
      <Form />
    </div>
  )
}

export default Home
