import React, { useEffect } from 'react'
import PoliciesLayout from '../../../components/policies/PoliciesLayout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useRouter } from 'next/router'
import { clientAction } from '../../../redux/client-slice'
import { PoliciesEnum } from '../../../util/enum'
import TermsAndConditions from '../../../components/policies/TermsAndConditions'
import DisconnectPolicy from '../../../components/policies/DisconnectPolicy'
import PrivacyPolicy from '../../../components/policies/PrivacyPolicy'

const Policies = () => {
  const {currentPolicies} = useSelector((state: RootState) => state.client)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clientAction.setCurrentPolicies(router.query.name))
  }, [router, dispatch])
  
  return (
    <PoliciesLayout>
      {currentPolicies === PoliciesEnum.Terms && <TermsAndConditions/>}
      {currentPolicies === PoliciesEnum.DisconnectPolicies && <DisconnectPolicy/>}
      {currentPolicies === PoliciesEnum.PrivacyPolicies && <PrivacyPolicy/>}
    </PoliciesLayout>
  )
}

export default Policies