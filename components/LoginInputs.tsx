"use client"
import { Context } from "@/context/AuthContext"
import { instance } from "@/hook/instance"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import React, { FormEvent, useContext, useState } from "react"

interface LoginType {
    onClose:() => any
}

const LoginInputs:React.FC<LoginType> = ({onClose}) => {
    const {setAccessToken} = useContext(Context)
    const [showPass, setShowPass] = useState<boolean>(false)
    const endContent = (
        <div>
            {showPass ? 
                <Image onClick={() => setShowPass(false)} className="cursor-pointer" style={{width:"auto", height:"auto"}} src={"/eye2.png"} alt="img" priority width={30} height={30}/>
                :
                <Image onClick={() => setShowPass(true)} className="cursor-pointer" style={{width:"auto", height:"auto"}} src={"/eye.png"} alt="img" priority width={30} height={30}/>

        }
        </div>
    )

    function handleLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data = {
            phone_number: (e.target as HTMLFormElement).phone_number.value,
            password: (e.target as HTMLFormElement).password.value
        }
        instance().post("/auth/sign-in", data).then(res => {
            setAccessToken(res.data.data.tokens.access_token)
            onClose()
        })
    }

  return (
    <form onSubmit={handleLogin} className="space-y-5" autoComplete="off">
    <Input name="phone_number" required size="lg" placeholder="Enter phone number" type="number" defaultValue="+998"/>
    <Input endContent={endContent} name="password" required size="lg" placeholder="Enter your password" type={showPass ? "text" : "password"}/>
    <Button size="lg" color="warning" className="text-white w-full font-semibold text-[20px]">Login</Button>
    </form>
  )
}

export default LoginInputs