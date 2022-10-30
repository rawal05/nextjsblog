import { ImFacebook, ImTwitter, ImYoutube,ImLinkedin } from "react-icons/im";
import Link from 'next/link'
import Newslatter from "./_child/newslatter";

export default function footer() {

 

  return (
    <footer className="bg-gray-50" >
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link href={"/"}><a><ImFacebook color="Blue" /></a></Link>
                    <Link href={"/"}><a><ImTwitter color="Blue" /></a></Link>                    
                    <Link href={"/"}><a><ImYoutube color="Blue" /></a></Link>
                    <Link href={"/"}><a><ImLinkedin color="Blue" /></a></Link>
              </div>

              <p className="py-5 text-black-300">Copyright ©2022 All rights reserved </p>
              <p className="text-black-300 text-center">Terms & Condition</p>
          </div>
      </div>

    </footer>
  )
}
