import { ImFacebook,ImLinkedin ,ImInstagram, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
  return (
    <header className="bg-blue-100 ">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text"  placeholder="Search..."/>
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"}>
                    <a className="font-bold uppercase text-4xl">Blogcity</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-8">
                    <Link href={"/"}><a><ImFacebook color="Blue" /></a></Link>
                    <Link href={"/"}><a><ImInstagram color="Blue" /></a></Link>                    
                    <Link href={"/"}><a><ImYoutube color="Blue" /></a></Link>
                    <Link href={"/"}><a><ImLinkedin color="Blue" /></a></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
