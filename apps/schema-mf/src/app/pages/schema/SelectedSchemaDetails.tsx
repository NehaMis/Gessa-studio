import React, { useState } from 'react'
import { ViewDetailsHeader, SchemaDefinition, SchemaDataTable } from '../../components/index'
import { useLocation } from 'react-router'
const SelectedSchemaDetails = () => {
    const [selectedTab, setselectedTab] = useState("")
    
    console.log(selectedTab)
  return (
    <div><ViewDetailsHeader setselectedTab={setselectedTab}/>
    {selectedTab==="Data Table"?<SchemaDataTable/>:<SchemaDefinition/>}
    </div>
  )
}

export default SelectedSchemaDetails