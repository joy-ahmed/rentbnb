'use client'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import Heading from '../Heading'
import Inputs from '../inputs/Inputs'


const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setLoading] = useState(false)
  const {
    register, 
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios.post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title='Welcome to Rentbnb' subtitle='Create an account' center />
      <Inputs id='email' label='Email' disabled={isLoading} register={register} errors={errors} required />
    </div>
  )

  return (
    <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent}/>
  )
}

export default RegisterModal