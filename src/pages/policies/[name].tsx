import React, { useEffect } from 'react'
import PoliciesLayout from '../../../components/policies/PoliciesLayout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useRouter } from 'next/router'
import { clientAction } from '../../../redux/client-slice'

const Policies = () => {
  const {currentPolicies} = useSelector((state: RootState) => state.client)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clientAction.setCurrentPolicies(router.query.name))
  }, [router, dispatch])
  
  return (
    <PoliciesLayout>
      
    </PoliciesLayout>
  )
}

export default Policies