"use client"
import { instance } from "@/hook/instance"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import React, { FormEvent, SetStateAction, useState } from "react"

interface CreateUserType {
    setIsLogin:React.Dispatch<SetStateAction<"login" | "createUser">>
}

const CreateUsers:React.FC<CreateUserType> = ({setIsLogin }) => {
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

    function handleCreateUser(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data = {
            first_name: (e.target as HTMLFormElement).first_name.value,
            last_name: (e.target as HTMLFormElement).last_name.value,
            phone_number: (e.target as HTMLFormElement).phone_number.value,
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value
        }
        instance().post("/auth/user/sign-up", data).then(() => {
           setIsLogin("login") 
        })
    }

  return (
    <form onSubmit={handleCreateUser} className="space-y-5" autoComplete="off">
        <Input name="first_name" required size="lg" placeholder="Enter first name"/>
        <Input name="last_name" required size="lg" placeholder="Enter last name"/>
        <Input name="phone_number" required size="lg" placeholder="Enter phone number" type="number" defaultValue="+998"/>
        <Input name="email" required size="lg" placeholder="Enter your email"/>
        <Input endContent={endContent} name="password" required size="lg" placeholder="Enter your password" type={showPass ? "text" : "password"}/>
        <Button size="lg" color="warning" className="text-white w-full font-semibold text-[20px]">Create User</Button>
    </form>
  )
}

export default CreateUsers