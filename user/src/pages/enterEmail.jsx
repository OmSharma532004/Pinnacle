import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"


function ForgotPassword() {
    const apiUrl = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)



  const handleOnSubmit =  async(e) => {
    e.preventDefault()
    toast.loading("Please wait...")
    const response=await fetch(`${apiUrl}/reset-password-token`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email
        })
    });
    const data= await response.json();
    if(data.success){
        toast.dismiss();

        toast.success('Reset email sent successfully , Please check your email.')
        console.log(data);
        setEmailSent(true)
        
    }
    else{
        toast.dismiss();
        toast.error(data.message)
        console.log(data);
    }

  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
       <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            {!emailSent ? "Reset your password" : "Check email"}
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="form-style w-full"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword