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
import { toast } from 'react-hot-toast'
import Button from '../Button'


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
       toast.error(`${error}`)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title='Welcome to Rentbnb' subtitle='Create an account' center />
      <Inputs id='email' type='text' label='Email' disabled={isLoading} register={register} errors={errors} required />
      <Inputs id='name' type='text' label='Name' disabled={isLoading} register={register} errors={errors} required />
      <Inputs id='password' type='password' label='Password' disabled={isLoading} register={register} errors={errors} required />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outLine label='Continue with Google' icon={FcGoogle} onClick={() => console.log('gooogle')}/>
      <Button outLine label='Continue with Github' icon={AiFillGithub} onClick={() => console.log('github')}/>
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div className="">Already have an account?</div>
          <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">Log in</div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>
  )
}

export default RegisterModal