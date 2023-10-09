import React, { useMemo, useState } from 'react'
import UserInfoBar from '../../components/UserInfoBar'
import { Box, Flex, Input, Spinner, Text, useToast } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { IoCloseCircle } from "react-icons/io5"
import { useTranslation } from 'react-i18next'
import httpClient from '../../http-client/httpClient'
import { checkIsTimeoutToken } from '../../util/function'
import { useRouter } from 'next/router'

enum ChangePwEnum {
  OldPw = "oldPw",
  NewPw = "newPw",
  ConfirmPw = "confirmPw",
}

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pwValidation, setPwValidation] = useState({
    onlyChar: false,
    uppercase: false,
    numAndStr: false,
    lengthValid: false,
  })
  const [passwordForm, setPasswordForm] = useState({
    oldPw: "",
    newPw: "",
    confirmPw: "",
  })
  const [error, setError] = useState("")
  const { t } = useTranslation()
  const toast = useToast()
  const router = useRouter()

  const resetForm = () => {
    setPasswordForm({
      oldPw: "",
      newPw: "",
      confirmPw: "",
    })
    setPwValidation({
      onlyChar: false,
      uppercase: false,
      numAndStr: false,
      lengthValid: false,
    })
    setError("")
  }

  const isVerifyError = useMemo(() => {
    return Object.values(pwValidation).some(item => item === false)
  },[pwValidation])

  const isConfirmPassword = useMemo(() => {
    if (pwValidation.onlyChar && passwordForm.newPw === passwordForm.confirmPw){ 
      return true
    } 
    return false
  }, [pwValidation, passwordForm])

  const changePassInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setPasswordForm({...passwordForm, [name]: value})
    if (name === ChangePwEnum.NewPw) {
      setPwValidation({
        ...pwValidation,
        uppercase: uppercaseRegExp.test(value) && lowercaseRegExp.test(value),
        onlyChar: (uppercaseRegExp.test(value) || lowercaseRegExp.test(value) || digitsRegExp.test(value)) && !specialCharRegExp.test(value),
        numAndStr: (lowercaseRegExp.test(value) || uppercaseRegExp.test(value)) && digitsRegExp.test(value),
        lengthValid: (value.length >= 6 && value.length < 20)
      });
    }
  }

  const submitChangePass = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (isVerifyError || !isConfirmPassword) return
    setIsLoading(true)
    try {
      const res: any = await httpClient.post("/Account/ChangePassword", {
        currentPassword: passwordForm.oldPw,
        newPassword: passwordForm.newPw,
      })
      if (res.error) {
        setError(res.error.message)
      } else {
        resetForm()
        toast({
          status: 'success',
          title: t('your_password_has_been_changed_successfully'),
        })
      }
    } catch (err: any) {
      console.log(err);
      checkIsTimeoutToken(err, router)
      toast({
        status: "error",
        title: err?.response?.data?.error?.message || t('something_went_wrong'),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <UserInfoBar/>
      <Box px={"30px"} w={"100%"}>
        <Text fontSize={"20px"} fontWeight={500} color={"#caffe1"} textAlign={'center'} my={"10px"}
          pb={"20px"}>
          Change Password
        </Text>
        <Box maxW={"550px"} p={["0px","0px","10px 15px","10px 15px"]} mx={"auto"}>
          <form onSubmit={submitChangePass}>
            <Box w={"100%"} mb={"20px"}>
              <label htmlFor="user" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>Old Password</Text>
              </label>
              <Input variant={"default"} type='password' id='user' name={ChangePwEnum.OldPw} fontSize={14} letterSpacing={"1px"}
                value={passwordForm.oldPw}
                onChange={changePassInputHandler}/>
              {error && <Text className='error'>{error}</Text>}
            </Box>
            <Box w={"100%"} mb={"20px"}>
              <label htmlFor="user" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>New Password</Text>
              </label>
              <Input variant={"default"} type='password' id='user' name={ChangePwEnum.NewPw} fontSize={14} letterSpacing={"1px"}
                value={passwordForm.newPw}
                onChange={changePassInputHandler}/>
            </Box>
            <Box w={"100%"} mb={"20px"}>
              <label htmlFor="user" className='text-vip'>
                <Text className='text_vip' mb={"5px"}>Confirm New Password</Text>
              </label>
              <Input variant={"default"} type='password' id='user' name={ChangePwEnum.ConfirmPw} fontSize={14} letterSpacing={"1px"}
                value={passwordForm.confirmPw}
                onChange={changePassInputHandler}/>
            </Box>
            <Flex flexDir={'column'} >
              <Flex sx={warningItem}>
                {pwValidation.onlyChar ? <CheckCircleIcon color={"global.success"} fontSize={15}/> : <IoCloseCircle style={{color: "#ce4242"}}/>}
                <Text fontSize={"15px"} color={pwValidation.onlyChar ? "global.success" : undefined}>{t('only')}</Text>
              </Flex>
              <Flex sx={warningItem}>
                {pwValidation.numAndStr ? <CheckCircleIcon color={"global.success"} fontSize={15}/> : <IoCloseCircle style={{color: "#ce4242"}}/>}
                <Text fontSize={"15px"} color={pwValidation.numAndStr ? "global.success" : undefined}>{t('least')}</Text>
              </Flex>
              <Flex sx={warningItem}>
                {pwValidation.uppercase ? <CheckCircleIcon color={"global.success"} fontSize={15}/> : <IoCloseCircle style={{color: "#ce4242"}}/>}
                <Text fontSize={"15px"} color={pwValidation.uppercase ? "global.success" : undefined}>{t('uppercase_lower_letter')}</Text>
              </Flex>
              <Flex sx={warningItem}>
                {pwValidation.lengthValid ? <CheckCircleIcon color={"global.success"} fontSize={15}/> : <IoCloseCircle style={{color: "#ce4242"}}/>}
                <Text fontSize={"15px"} color={pwValidation.lengthValid ? "global.success" : undefined}>{t('minimum')}</Text>
              </Flex>
              <Flex sx={warningItem}>
                {isConfirmPassword ? <CheckCircleIcon color={"global.success"} fontSize={15}/> : <IoCloseCircle style={{color: "#ce4242"}}/>}
                <Text fontSize={"15px"} color={isConfirmPassword ? "global.success" : undefined}>{t('reconfirm')}</Text>
              </Flex>
            </Flex>
            <Box w={"100%"} pt={"20px"}>
              <button className='login_btn' type={"submit"} disabled={isVerifyError || !isConfirmPassword}>
                {isLoading ? <Spinner/> : t('change_password')}
              </button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default ChangePassword

const uppercaseRegExp   = /(?=.*?[A-Z])/;
const lowercaseRegExp   = /(?=.*?[a-z])/;
const digitsRegExp      = /(?=.*?[0-9])/;
const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
const minLengthRegExp   = /.{6,}/;

const warningItem = {
  fontSize: [14,14,18,18],
  alignItems: "center",
  gap: 2,
  color: "white",
}