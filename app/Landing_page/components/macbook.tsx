import Image from "next/image";

const Macbook = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5">
       <Image src="/macbook.png" alt="Planit" width={1000} height={500} />
    </div>
  )
}

export default Macbook
