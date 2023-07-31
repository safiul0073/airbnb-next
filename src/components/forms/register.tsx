import React, { useState } from 'react'
import { Button } from '../ui/Button'
import TextInput from '../ui/TextInput'
import { useForm, SubmitHandler } from "react-hook-form"
import { RegisterFormValuesTypes } from '../../../types'
import SocialButton from './SocilaButton'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Login } from './login'

export const Register = () => {

    const [formSwitch, setFormSwitch] = useState(true)
    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required(),
        name: yup.string().required()
      }).required();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValuesTypes>({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<RegisterFormValuesTypes> = (data) => {
        console.log(data)
    }
  return (
    <>
    {
        formSwitch ? 
        <>
            <div className="mt-2">
                <div className="text-center">
                    <p className="text-black font-bold text-xl mb-2">Welcome to Airbnb-clone</p>
                    <p className="text-gray-600 text-sm">Create an Account</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                    <TextInput
                        name="email"
                        register={register}
                        error={errors.email}
                        placeholder="Email Address"
                        type="email"
                    />

                    <TextInput
                        name="name"
                        register={register}
                        error={errors.name}
                        placeholder="Your Name"
                        type="text"
                    />

                    <TextInput
                        name="password"
                        register={register}
                        error={errors.password}
                        placeholder="Password"
                        type="password"
                    />

                    <div className="mt-8">
                        <Button
                            styleClasses="w-full bg-blue-600 text-white hover:bg-blue-500 text-center font-light"
                            text="Continue"
                            type="submit"
                        />

                        <div className="my-8">
                            <SocialButton
                                icon={<><FcGoogle/></>}
                                title="Continue with Google"
                            />
                            <SocialButton
                                icon={<><BsFacebook/></>}
                                title="Continue with FaceBook"
                            />

                            <p className="text-center mt-3 text-sm">Already have an Account? <span onClick={() => setFormSwitch(!formSwitch)} className="text-blue-600 hover:text-blue-700 cursor-pointer">Login.</span></p>
                        </div>
                    </div>
                </form>
            </div>
        </> : <Login/>
    }

    </>
  )
}
